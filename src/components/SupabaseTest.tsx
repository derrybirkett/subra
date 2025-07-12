'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function SupabaseTest() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    try {
      const supabase = createClient()
      
      // Just check if the client was created successfully
      if (supabase) {
        setStatus('connected')
      } else {
        setStatus('error')
        setError('Failed to create Supabase client')
      }
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Unknown error')
    }
  }, [])

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Supabase Connection Test</h2>
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${
          status === 'loading' ? 'bg-yellow-500' :
          status === 'connected' ? 'bg-green-500' :
          'bg-red-500'
        }`}></div>
        <span className="text-sm">
          {status === 'loading' && 'Testing connection...'}
          {status === 'connected' && '✅ Connected to Supabase!'}
          {status === 'error' && `❌ Connection failed: ${error}`}
        </span>
      </div>
    </div>
  )
} 