import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Subra
              </Link>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="ghost">
                  Sign In
                </Button>
              </Link>
              <Link href="/signin">
                <Button>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Manage your subscriptions
            <span className="block text-blue-600">with ease</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Keep track of all your subscriptions in one place. Never miss a payment or renewal again.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signin">
              <Button size="lg">
                Start managing subscriptions
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
