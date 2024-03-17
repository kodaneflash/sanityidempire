import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link>
            </li>
            <li>
              <Link href="/Contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </li>
            <li>
              <Link href="/Privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/Terms" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            ID<span className="text-primary">Empire</span>
          </h1>
          <p className="text-gray-600">Your Trusted Vendor for Premium Fake ID&apos;s</p>
          <p className="text-sm">© IDEmpire All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
