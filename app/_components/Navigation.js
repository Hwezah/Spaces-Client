import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";
export default async function Navigation() {
  const session = await auth();
  console.log(session);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/spaces"
            className="hover:text-accent-400 transition-colors"
          >
            Spaces
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              <div className="w-10 h-10 relative">
                <Image
                  fill
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                  className="rounded-full object-cover"
                />
              </div>
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
