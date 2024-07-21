import { MySQLService } from '../../services/sql'; // Assume you have a MySQL service utility
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue() {
  try {

    console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const query = `SELECT * FROM revenue`;
    const data = await MySQLService.runQuery({ query });

    console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const query = `
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const data = await MySQLService.runQuery({ query });

    const latestInvoices = data.map((invoice:LatestInvoiceRaw) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const invoiceCountQuery = `SELECT COUNT(*) as count FROM invoices`;
    const customerCountQuery = `SELECT COUNT(*) as count FROM customers`;
    const invoiceStatusQuery = `
      SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS paid,
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS pending
      FROM invoices`;

    const [invoiceCountResult, customerCountResult, invoiceStatusResult] = await Promise.all([
      MySQLService.runQuery({ query: invoiceCountQuery }),
      MySQLService.runQuery({ query: customerCountQuery }),
      MySQLService.runQuery({ query: invoiceStatusQuery }),
    ]);

    const numberOfInvoices = Number(invoiceCountResult[0].count ?? '0');
    const numberOfCustomers = Number(customerCountResult[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(invoiceStatusResult[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(invoiceStatusResult[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoicesQuery = `
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name LIKE ? OR
        customers.email LIKE ? OR
        CAST(invoices.amount AS CHAR) LIKE ? OR
        CAST(invoices.date AS CHAR) LIKE ? OR
        invoices.status LIKE ?
      ORDER BY invoices.date DESC
      LIMIT ? OFFSET ?`;

    const values = [
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      ITEMS_PER_PAGE,
      offset,
    ];

    const invoices:InvoicesTable[] = await MySQLService.runQuery({ query: invoicesQuery, values });

    return invoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const countQuery = `
      SELECT COUNT(*) as count
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name LIKE ? OR
        customers.email LIKE ? OR
        CAST(invoices.amount AS CHAR) LIKE ? OR
        CAST(invoices.date AS CHAR) LIKE ? OR
        invoices.status LIKE ?`;

    const values = [
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
    ];

    const countResult = await MySQLService.runQuery({ query: countQuery, values });

    const totalPages = Math.ceil(Number(countResult[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const invoiceQuery = `
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ?`;

    const values = [id];

    const data:InvoiceForm[] = await MySQLService.runQuery({ query: invoiceQuery, values });
    console.log(data);
    const invoice = data.map((invoice) => ({
      ...invoice,
      amount: invoice.amount / 100,
    }));

    console.log("Invoice Passed to Form", invoice[0]);
    const plainData = JSON.parse(JSON.stringify(invoice[0]));
    return plainData;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const query = `
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC`;

    const data = await MySQLService.runQuery({ query });
    const plainData:CustomerField[] = JSON.parse(JSON.stringify(data));
    return plainData;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const customersQuery = `
      SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url,
        COUNT(invoices.id) AS total_invoices,
        SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
        SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
      FROM customers
      LEFT JOIN invoices ON customers.id = invoices.customer_id
      WHERE
        customers.name LIKE ? OR
        customers.email LIKE ?
      GROUP BY customers.id, customers.name, customers.email, customers.image_url
      ORDER BY customers.name ASC`;

    const values = [`%${query}%`, `%${query}%`];

    const data = await MySQLService.runQuery({ query: customersQuery, values });

    const customers = data.map((customer:CustomersTableType) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer table.');
  }
}
