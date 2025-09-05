"use client"

import { useState } from "react"
import { ChatList } from "@/components/chat/chat-list"
import { ChatWindow } from "@/components/chat/chat-window"
import { NewChatForm } from "@/components/chat/new-chat-form"
import { mockChats } from "@/lib/mock-data"
import type { Chat } from "@/types/chat"

export default function HomePage() {
  const [chats, setChats] = useState<Chat[]>(mockChats)
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>()
  const [currentView, setCurrentView] = useState<"list" | "chat" | "new">("list")

  const selectedChat = chats.find((chat) => chat.id === selectedChatId)

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId)
    setCurrentView("chat")
  }

  const handleNewChat = () => {
    setCurrentView("new")
  }

  const handleBackToList = () => {
    setCurrentView("list")
    setSelectedChatId(undefined)
  }

  const handleCreateChat = (name: string, participants: string[]) => {
    const newChat: Chat = {
      id: Date.now().toString(),
      name,
      participants,
      lastMessage: "Chat created",
      lastMessageTime: new Date(),
      unreadCount: 0,
    }
    setChats((prev) => [newChat, ...prev])
    setSelectedChatId(newChat.id)
    setCurrentView("chat")
  }

  return (
    <div className="h-screen flex bg-gradient-to-br from-background via-muted/30 to-background">
      {/* lg: Show sidebar + main content */}
      <div className="hidden md:flex w-full">
        <div className="w-80 border-r border-border/50 bg-sidebar/80 backdrop-blur-sm">
          <ChatList
            chats={chats}
            onChatSelect={handleChatSelect}
            onNewChat={handleNewChat}
            selectedChatId={selectedChatId}
          />
        </div>
        <div className="flex-1">
          {currentView === "list" && (
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
              <div className="text-center animate-fade-in">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-elegant">
                    <svg
                      className="w-10 h-10 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">Welcome to Smart Chat</h2>
                <p className="text-muted-foreground text-lg">
                  Select a conversation to start chatting with AI-powered features
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle"></div>
                  <span>AI-powered conversations</span>
                </div>
              </div>
            </div>
          )}
          {currentView === "chat" && selectedChat && <ChatWindow chat={selectedChat} onBack={handleBackToList} />}
          {currentView === "new" && <NewChatForm onBack={handleBackToList} onCreateChat={handleCreateChat} />}
        </div>
      </div>

      {/* Responsive: Show one view at a time */}
      <div className="md:hidden w-full">
        {currentView === "list" && (
          <ChatList
            chats={chats}
            onChatSelect={handleChatSelect}
            onNewChat={handleNewChat}
            selectedChatId={selectedChatId}
          />
        )}
        {currentView === "chat" && selectedChat && <ChatWindow chat={selectedChat} onBack={handleBackToList} />}
        {currentView === "new" && <NewChatForm onBack={handleBackToList} onCreateChat={handleCreateChat} />}
      </div>
    </div>
  )
}
