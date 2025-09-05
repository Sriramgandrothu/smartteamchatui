"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowLeft, MoreVertical, Users, UserPlus, Settings, Archive, Trash2 } from "lucide-react"

interface ChatHeaderProps {
  chatName: string
  participants: string[]
  onBack: () => void
}

export function ChatHeader({ chatName, participants, onBack }: ChatHeaderProps) {
  const participantNames = participants.join(", ")

  return (
    <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-card to-card/80 backdrop-blur-sm shadow-elegant">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack} className="hover:bg-muted/50 transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-elegant">
            <Users className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground text-lg">{chatName}</h2>
            <p className="text-sm text-muted-foreground">{participantNames}</p>
          </div>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-muted/50 transition-colors">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add Participants
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Settings className="h-4 w-4" />
            Chat Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2">
            <Archive className="h-4 w-4" />
            Archive Chat
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
            <Trash2 className="h-4 w-4" />
            Delete Chat
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
