import Link from "next/link";
import { Twitter, DiscIcon as Discord } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-light-purple text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              SwapAgg
            </Link>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-gray-200 transition duration-300">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-200 transition duration-300">
              <Discord className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© {new Date().getFullYear()} SwapAgg. All rights reserved.</div>
      </div>
    </footer>
  );
}
