"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageSquare } from "lucide-react"
import { mockAISuggestions } from "@/lib/mock-data"

interface AIFeaturesProps {
  onSummaryClick: () => void
  onSmartReplyClick: (reply: string) => void
  showSummary?: boolean
}

export function AIFeatures({ onSummaryClick, onSmartReplyClick, showSummary = false }: AIFeaturesProps) {
  return (
    <div className="space-y-4 p-4 border-t border-border bg-muted/30">
      {/* AI Summary Section */}
      <div className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onSummaryClick}
          className="w-full justify-start gap-2 bg-transparent"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          Summarize Thread
          <Badge variant="secondary" className="ml-auto">
            AI
          </Badge>
        </Button>

        {showSummary && (
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Thread Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">{mockAISuggestions.summary}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Smart Reply Suggestions */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <MessageSquare className="h-4 w-4 text-accent" />
          Smart Reply Suggestions
          <Badge variant="secondary" className="text-xs">
            AI
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {mockAISuggestions.replies.map((reply, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => onSmartReplyClick(reply)}
              className="text-xs h-8 border-accent/30"
            >
              {reply}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
