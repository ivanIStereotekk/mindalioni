'use client'

import { useState } from 'react'
import { TbSend2 } from 'react-icons/tb'


export default function MessageInput({
  onSend,
  loading,
}: {
  onSend: (msg: string) => void
  loading: boolean
}) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    onSend(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {/* Поле ввода сообщения */}
      <input
        type="text"
        className="flex-grow p-2 border rounded-md  bg-slate-200 dark:bg-slate-800"
        value={input}
        onChange={e => setInput(e.target.value)}
        disabled={loading}
        placeholder="Type your message..."
      />
      {/* Кнопка отправки */}
      <button
        type="submit"
        className="bg-slate-200 dark:bg-slate-800 text-white px-4 py-2 rounded-md disabled:opacity-50"
        disabled={loading}
      >
        {loading ? '...' : <TbSend2/>}
      </button>
    </form>
  )
}
