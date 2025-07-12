import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Authentication Error</h1>
          <p className="mt-2 text-sm text-gray-600">
            There was an error during the authentication process. Please try again.
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              The authentication process encountered an error. This could be due to:
            </p>
            <ul className="text-sm text-gray-500 text-left space-y-1">
              <li>• Invalid or expired authentication code</li>
              <li>• Network connectivity issues</li>
              <li>• Provider configuration problems</li>
            </ul>
            
            <div className="pt-4">
              <Link href="/signin">
                <Button className="w-full">
                  Try Again
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/" 
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 