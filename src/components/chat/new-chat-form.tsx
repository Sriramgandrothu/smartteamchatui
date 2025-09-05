"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Sparkles, Lightbulb } from "lucide-react"
import { mockAISuggestions } from "@/lib/mock-data"

interface NewChatFormProps {
  onBack: () => void
  onCreateChat: (name: string, participants: string[]) => void
}

export function NewChatForm({ onBack, onCreateChat }: NewChatFormProps) {
  const [chatName, setChatName] = useState("")
  const [participantName, setParticipantName] = useState("")
  const [participants, setParticipants] = useState<string[]>([])
  const [showIcebreakers, setShowIcebreakers] = useState(false)

  const handleAddParticipant = () => {
    if (participantName.trim() && !participants.includes(participantName.trim())) {
      setParticipants((prev) => [...prev, participantName.trim()])
      setParticipantName("")
    }
  }

  const handleRemoveParticipant = (participant: string) => {
    setParticipants((prev) => prev.filter((p) => p !== participant))
  }

  const handleCreateChat = () => {
    if (chatName.trim() && participants.length > 0) {
      onCreateChat(chatName.trim(), participants)
    }
  }

  const handleUseIcebreaker = (icebreaker: string) => {
    console.log("Using icebreaker:", icebreaker)
    handleCreateChat()
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">New Chat</h2>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Chat Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Chat Name</label>
          <Input
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
            placeholder="Enter chat name..."
            className="w-full"
          />
        </div>

        {/* Add Participants */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Add Participants</label>
          <div className="flex gap-2">
            <Input
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              placeholder="Enter participant name..."
              className="flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleAddParticipant()}
            />
            <Button onClick={handleAddParticipant} disabled={!participantName.trim()}>
              Add
            </Button>
          </div>
        </div>

        {/* Participants List */}
        {participants.length > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Participants ({participants.length})</label>
            <div className="flex flex-wrap gap-2">
              {participants.map((participant) => (
                <Badge
                  key={participant}
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleRemoveParticipant(participant)}
                >
                  {participant} ×
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* AI Icebreaker Section */}
        <Card className="border-accent/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-accent" />
              AI Icebreaker Generator
              <Badge variant="secondary" className="text-xs">
                AI
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              onClick={() => setShowIcebreakers(!showIcebreakers)}
              className="w-full justify-start gap-2"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              Generate Icebreaker Messages
            </Button>

            {showIcebreakers && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Choose an AI-generated icebreaker to start the conversation:
                </p>
                <div className="space-y-2">
                  {mockAISuggestions.icebreakers.map((icebreaker, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleUseIcebreaker(icebreaker)}
                      className="w-full text-left justify-start text-xs h-auto p-3 border-accent/30 hover:bg-accent/10"
                    >
                      &quot;{icebreaker}&quot;
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Create Button */}
      <div className="p-4 border-t border-border">
        <Button
          onClick={handleCreateChat}
          disabled={!chatName.trim() || participants.length === 0}
          className="w-full gap-2"
        >
          <Users className="h-4 w-4" />
          Create Chat
        </Button>
      </div>
    </div>
  )
}
