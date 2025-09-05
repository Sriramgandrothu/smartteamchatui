import type { Message } from "@/types/chat"
import { cn } from "@/lib/utils"

interface MessageBubbleProps {
  message: Message
  isCurrentUser?: boolean
}

export function MessageBubble({ message, isCurrentUser = false }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex gap-4 p-4 animate-fade-in hover:bg-muted/20 transition-colors duration-200",
        isCurrentUser ? "justify-end" : "justify-start",
      )}
    >
      {!isCurrentUser && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center flex-shrink-0 shadow-md">
          <span className="text-sm font-semibold text-secondary-foreground">
            {message.sender
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
      )}
      <div className={cn("max-w-[70%] space-y-2", isCurrentUser ? "items-end" : "items-start")}>
        {!isCurrentUser && <p className="text-sm font-medium text-foreground">{message.sender}</p>}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm shadow-sm transition-all duration-200 hover:shadow-md",
            isCurrentUser
              ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ml-auto shadow-elegant"
              : "bg-card text-card-foreground border border-border/50",
          )}
        >
          <p className="text-pretty">{message.content}</p>
        </div>
        <p className="text-xs text-muted-foreground">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
      {isCurrentUser && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-elegant">
          <span className="text-sm font-semibold text-primary-foreground">You</span>
        </div>
      )}
    </div>
  )
}
