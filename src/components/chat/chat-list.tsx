"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatListItem } from "./chat-list-item"
import type { Chat } from "@/types/chat"
import { Search, Plus, MessageSquare } from "lucide-react"

interface ChatListProps {
  chats: Chat[]
  onChatSelect: (chatId: string) => void
  onNewChat: () => void
  selectedChatId?: string
}

export function ChatList({ chats, onChatSelect, onNewChat, selectedChatId }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.participants.some((participant) => participant.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col h-full bg-sidebar/50 backdrop-blur-sm animate-slide-in">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border/50 bg-gradient-to-r from-sidebar to-sidebar/80">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-elegant">
              <MessageSquare className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground">Smart Chat</h1>
              <p className="text-xs text-muted-foreground">AI-powered conversations</p>
            </div>
          </div>
          <Button
            onClick={onNewChat}
            size="sm"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-lg transition-all duration-200"
          >
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background/50 border-border/50 backdrop-blur-sm focus:bg-background transition-all duration-200"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-6 shadow-elegant">
              <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {searchQuery ? "No chats found" : "No conversations yet"}
            </h3>
            <p className="text-muted-foreground mb-6 text-balance">
              {searchQuery ? "Try adjusting your search terms" : "Start a new conversation to get started"}
            </p>
            {!searchQuery && (
              <Button
                onClick={onNewChat}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-lg transition-all duration-200"
              >
                <Plus className="h-4 w-4" />
                Start New Chat
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-1 p-2">
            {filteredChats.map((chat, index) => (
              <div key={chat.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ChatListItem chat={chat} onClick={onChatSelect} isActive={selectedChatId === chat.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
