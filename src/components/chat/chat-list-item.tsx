"use client"

import type { Chat } from "@/types/chat"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ChatListItemProps {
  chat: Chat
  onClick: (chatId: string) => void
  isActive?: boolean
}

export function ChatListItem({ chat, onClick, isActive = false }: ChatListItemProps) {
  const formatTime = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
      return `${diffInMinutes}m ago`
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  return (
    <div
      onClick={() => onClick(chat.id)}
      className={cn(
        "flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer transition-colors border-b border-border/50",
        isActive && "bg-muted",
      )}
    >
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-sm font-semibold text-primary-foreground">
          {chat.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-foreground truncate">{chat.name}</h3>
          <span className="text-xs text-muted-foreground flex-shrink-0">{formatTime(chat.lastMessageTime)}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground truncate flex-1">{chat.lastMessage}</p>
          {chat.unreadCount && chat.unreadCount > 0 && (
            <Badge variant="default" className="ml-2 bg-accent text-accent-foreground">
              {chat.unreadCount}
            </Badge>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-1">{chat.participants.length} participants</p>
      </div>
    </div>
  )
}
