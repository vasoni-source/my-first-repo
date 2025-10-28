import React from 'react'
import "./ErrorPage.css"
export default function ErrorPage() {
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center px-4">
        <div class="text-center">
            <h1 class="text-9xl font-bold text-gray-800">404</h1>
            <p class="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
            <p class="text-gray-500 mt-2 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Go Home
            </a>
        </div>
    </div>
    </div>
  )
}
