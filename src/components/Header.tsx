import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className="bg-stone-100 border-stone-300 w-full shadow-stone-300 dark:bg-gray-900 border-b dark:border-gray-700 py-2">
      <div className="flex justify-between mx-2">
        <div>
          <h1 className="text-4xl text-stone-50">Company Logo</h1>
        </div>
        <div>
          <nav>
            <NavLinks />
          </nav>
        </div>
      </div>
    </header>
  );
}
