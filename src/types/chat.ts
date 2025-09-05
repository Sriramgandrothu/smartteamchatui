export interface Message {
  id: string
  content: string
  sender: string
  timestamp: Date
  isAI?: boolean
}

export interface Chat {
  id: string
  name: string
  participants: string[]
  lastMessage: string
  lastMessageTime: Date
  unreadCount?: number
}

export interface AISuggestion {
  id: string
  type: "summary" | "reply" | "icebreaker"
  content: string
}
