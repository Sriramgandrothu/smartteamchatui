"use client"

import { useState, useRef, useEffect } from "react"
import { ChatHeader } from "./chat-header"
import { MessageBubble } from "./message-bubble"
import { MessageInput } from "./message-input"
import { AIFeatures } from "./ai-features"
import type { Chat, Message } from "@/types/chat"
import { mockMessages } from "@/lib/mock-data"

interface ChatWindowProps {
  chat: Chat
  onBack: () => void
}

export function ChatWindow({ chat, onBack }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [showAISummary, setShowAISummary] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const currentUser = "You" // In a real app, this would come from auth context

  useEffect(() => {
    setMessages(mockMessages[chat.id] || [])
    setShowAISummary(false) // Reset AI summary when switching chats
  }, [chat.id])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: currentUser,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSmartReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleSummaryToggle = () => {
    setShowAISummary(!showAISummary)
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-background to-muted/10 animate-fade-in">
      <ChatHeader chatName={chat.name} participants={chat.participants} onBack={onBack} />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-transparent to-muted/5">
        <div className="space-y-1 pb-4">
          {messages.map((message, index) => (
            <div key={message.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <MessageBubble message={message} isCurrentUser={message.sender === currentUser} />
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* AI Features */}
      <AIFeatures
        onSummaryClick={handleSummaryToggle}
        onSmartReplyClick={handleSmartReply}
        showSummary={showAISummary}
      />

      {/* Message Input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  )
}
