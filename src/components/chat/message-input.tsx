"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Send, Paperclip, Smile, ImageIcon, FileText, Camera } from "lucide-react"

interface MessageInputProps {
  onSendMessage: (message: string) => void
  placeholder?: string
}

export function MessageInput({ onSendMessage, placeholder = "Type a message..." }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-t border-border/50 bg-gradient-to-r from-background to-muted/20 backdrop-blur-sm"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button" variant="ghost" size="sm" className="hover:bg-muted/50 transition-colors">
            <Paperclip className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuItem className="gap-2">
            <ImageIcon className="h-4 w-4" />
            Photo
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <FileText className="h-4 w-4" />
            Document
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Camera className="h-4 w-4" />
            Camera
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex-1 relative">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="pr-10 bg-background/50 border-border/50 focus:bg-background transition-all duration-200"
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-muted/50 transition-colors"
        >
          <Smile className="h-4 w-4" />
        </Button>
      </div>

      <Button
        type="submit"
        disabled={!message.trim()}
        className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-lg transition-all duration-200"
      >
        <Send className="h-4 w-4" />
        Send
      </Button>
    </form>
  )
}
