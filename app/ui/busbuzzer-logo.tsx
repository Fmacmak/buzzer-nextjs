import { TruckIcon } from "@heroicons/react/24/outline";
import { afacad } from "@/app/ui/fonts";

export default function BusBuzzerLogo() {
  return (
    <div
      className={`${afacad.className} flex flex-row items-center leading-none text-white`}
    >
      <TruckIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">BusBuzzer</p>
    </div>
  );
}
