import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg mt-2 w-80 h-96">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Chat with us</h2>
            <button onClick={toggleChat} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* Replace this with your chatbot implementation */}
            <p className="text-gray-800 dark:text-gray-300">Chat functionality coming soon!</p>
          </div>
        </div>
      )}
    </div>
  )
}