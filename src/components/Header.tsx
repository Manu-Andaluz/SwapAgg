import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              SwapAgg
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#faqs" className="text-gray-600 hover:text-gray-900">
              FAQs
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-light-blue to-light-purple text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition duration-300">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}
