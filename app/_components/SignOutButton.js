import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";
function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover: hover:-100 transition-colors flex items-center gap-4 font-semibold -200 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 -600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
