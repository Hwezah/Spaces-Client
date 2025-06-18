import Navigation from "@/app/_components/Navigation";
import { SearchInput } from "./SearchInput";

function Header() {
  return (
    <header className="border-b dark:border-primary-900 px-8 py-6 bg-accent-50 dark:bg-primary-900">
      <Navigation />
      <div className="max-w-[68rem] mx-auto flex flex-col items-center gap-4">
        <SearchInput />
      </div>
    </header>
  );
}

export default Header;
