import Link from "next/link";
import {
  AcademicCapIcon,
  BellIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function HeaderClient() {
  return (
    <>
      <section
        id="secondary-header"
        className="bg-gray-900 flex justify-between py-1 px-2"
      >
        <div className="flex gap-2">
          <AcademicCapIcon className="size-6 text-stone-100" />
          <BellIcon className="size-6 text-stone-100" />
          <BriefcaseIcon className="size-6 text-stone-100" />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <PhoneIcon className="size-6" />
          <p>96-195-25-35s</p>
        </div>
      </section>
      <header className="bg-stone-100 text-blue-950">
        <div className="m-auto max-w-6xl">
          <section>
            <h1>Company Brand</h1>
          </section>
          <section>
            <nav>Navbar</nav>
          </section>
          <section></section>
        </div>
      </header>
    </>
  );
}
