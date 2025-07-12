import Auth from "@/components/Auth"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sign in to Subra</h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage your subscriptions with ease
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <Auth />
        </div>
        
        <div className="text-center">
          <a 
            href="/" 
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  )
} 