import { GithubIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center mt-24">
      <div className="pt-16 space-y-12">
        <nav className="text-sm font-medium text-center space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="flex items-center justify-center">
          <a
            target="_blank"
            href="https://github.com/shivansh02"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="px-4 text-gray-800 hover:text-blue-500"
          >
            <GithubIcon className="w-8 h-8 fill-current" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; <Link href="/">{process.env.NEXT_PUBLIC_SITENAME}</Link>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
