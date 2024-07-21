const mysql = require("mysql");


export class MySQLService {
    /**
     * Establish a connection to my sql database
     */
    public static sql_connection:any;
    public static createConnection() {
        this.sql_connection = mysql.createConnection({
            host: process.env.db_host,
            user: process.env.db_user,
            password: process.env.db_pass,
            database: process.env.db_db,
            multipleStatements: true
        });
        return this.sql_connection;
    }
    public static runQuery({ query, values }:{ query: string, values?: any[] }): any {
        return new Promise((resolve, reject) => {
            try {
                console.log("SQL: ",query)
                return this.createConnection().query(query, values, (err:any, result:any) => {
                    if (err) {
                      console.log(err);
                        return reject(err.sqlMessage);
                    } else {
                        return resolve(result);
                    }
                });
            } catch (error) {
                return reject(error);
            } finally {
                this.sql_connection.end();
            }

        });
    }
}


// async function seedUsers() {
//   // await MySQLService.runQuery({query:`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`});
//   await MySQLService.runQuery({query:`
//     CREATE TABLE IF NOT EXISTS users (
//       id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL UNIQUE,
//       password VARCHAR(255) NOT NULL
//     );
//   `});

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return MySQLService.runQuery({query:`
//        INSERT IGNORE INTO users (id, name, email, password)
//         VALUES (?,?,?,?);
//       `, values:[user.id, user.name, user.email, hashedPassword]});
//     }),
//   );

//   return insertedUsers;
// }

// async function seedInvoices() {
//   // await MySQLService.runQuery({query:`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`});

//   await MySQLService.runQuery({query:`
//    CREATE TABLE IF NOT EXISTS invoices (
//     id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
//     customer_id CHAR(36) NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
// );
//   `});

//   const insertedInvoices = await Promise.all(
//     invoices.map(
//       (invoice) => MySQLService.runQuery({query:`
//         INSERT IGNORE INTO invoices (customer_id, amount, status, date)
//         VALUES (?,?,?,?);
//       `, values:[invoice.customer_id, invoice.amount, invoice.status, invoice.date]}),
//     ),
//   );

//   return insertedInvoices;
// }

// async function seedCustomers() {
//   // await MySQLService.runQuery({query:`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`});

//   await MySQLService.runQuery({query:`
//     CREATE TABLE IF NOT EXISTS customers (
//       id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `});

//   const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer) => MySQLService.runQuery({query:`
//         INSERT IGNORE INTO customers (id, name, email, image_url)
//         VALUES (?,?,?,?);
//       `, values: [customer.id, customer.name, customer.email, customer.image_url]}),
//     ),
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await MySQLService.runQuery({query:`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `});

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => MySQLService.runQuery({query:`
//         INSERT IGNORE INTO revenue (month, revenue)
//         VALUES (?,?);       
//       `, values: [rev.month, rev.revenue]}),
//     ),
//   );

//   return insertedRevenue;
// }

// export async function GET() {
//   return Response.json({ message: 'Database already seeded successfully' });
// }

// export async function GET() {
//   try {
//     await MySQLService.runQuery({query:`BEGIN`});
//     await seedUsers();
//     await seedCustomers();
//     await seedInvoices();
//     await seedRevenue();
//     await MySQLService.runQuery({query:`COMMIT`});

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     await MySQLService.runQuery({query:`ROLLBACK`});
//     return Response.json({ error }, { status: 500 });
//   }
// }
