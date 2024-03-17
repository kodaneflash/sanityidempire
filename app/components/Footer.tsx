import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
            </li>
          </ul>
        </nav>
        <div className="mt-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            ID<span className="text-primary">Empire</span>
          </h1>
          <p className="text-gray-600">Your Trusted Vendor for Premium Fake ID&apos;s</p>
          <p className="text-gray-600">contact@idempire.us</p>
          <p className="text-gray-500 text-sm">© IDEmpire LLC All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
