import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} HomeBase Inc. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="/termsofservice">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="mailto:admin@yourhomebase.co">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}