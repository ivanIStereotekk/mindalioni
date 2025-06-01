'use client'
import { useState } from 'react'
import MessageList from 'app/components/messagelist'
import MessageInput from 'app/components/messageinput'

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (prompt: string) => {
    if (!prompt.trim()) return

    const userMessage = { role: 'user', content: prompt }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      const res = await fetch('/api/rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      const parsedData = data.response;
      console.log(JSON.stringify(data.response) + ' +++++ P A R S E D D A T A');
      const assistantMessage = {
        role: 'assistant',
        content: JSON.stringify(parsedData),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-4 flex flex-col min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Ask Question</h1>

      {/* messages list */}
      <div className="flex-grow overflow-y-auto border rounded-md p-4 mb-4 bg-white">
        <MessageList messages={messages} />
      </div>

      {/* Форма ввода */}
      <MessageInput onSend={sendMessage} loading={loading} />
    </main>
  )
}
