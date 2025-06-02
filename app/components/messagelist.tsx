interface Message {
    role: string
    content: string
  }
  
  export default function MessageList({ messages }: { messages: Message[] }) {
    return (
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-md ${
              msg.role === 'assistant' ? 'text-right' : 'text-left outlined bg-slate-200 dark:bg-slate-800 '
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
    )
  }
  