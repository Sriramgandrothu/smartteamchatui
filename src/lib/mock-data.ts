import type { Chat, Message } from "@/types/chat"

export const mockChats: Chat[] = [
  {
    id: "1",
    name: "Project PathFinder",
    participants: ["Pawan", "Prabhas", "Virat"],
    lastMessage: "Great work on the presentation! The client loved it.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 15),
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Marketing Strategy",
    participants: ["Sriram", "Mounika"],
    lastMessage: "Let's schedule a meeting for next week to discuss the campaign.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unreadCount: 0,
  },
  {
    id: "3",
    name: "Design Review",
    participants: ["Kushi", "Anupama", "Ashlesha"],
    lastMessage: "The new mockups look fantastic! Minor tweaks needed on the color scheme.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    unreadCount: 1,
  },
  {
    id: "4",
    name: "Development Sprint",
    participants: ["Karthik", "Balaji"],
    lastMessage: "Sprint planning complete. Ready to start development phase.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 48),
    unreadCount: 0,
  },
]

export const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      content: "Hey team! How's everyone doing with the Alpha project?",
      sender: "Pawan",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
    },
    {
      id: "2",
      content: "Making good progress on the backend API. Should be ready for testing by tomorrow.",
      sender: "Prabhas",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: "3",
      content: "UI components are almost complete. Just need to integrate with the API.",
      sender: "Virat",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1),
    },
    {
      id: "4",
      content: "Perfect! The client presentation is scheduled for Friday. We're on track.",
      sender: "Pawan",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "5",
      content: "Great work on the presentation! The client loved it.",
      sender: "Virat",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
  ],
  "2": [
    {
      id: "6",
      content: "I've been analyzing the market research data. Some interesting insights!",
      sender: "Sriram",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
    },
    {
      id: "7",
      content: "That sounds promising! What are the key findings?",
      sender: "Mounika",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
    },
    {
      id: "8",
      content: "Our target demographic is more engaged with video content than we thought. 73% prefer video over text.",
      sender: "Sriram",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: "9",
      content: "Let's schedule a meeting for next week to discuss the campaign.",
      sender: "Mounika",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
  ],
  "3": [
    {
      id: "10",
      content: "I’ve updated the new mockups for the dashboard. Please review.",
      sender: "Kushi",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26),
    },
    {
      id: "11",
      content: "Looks neat! I like the new layout. The buttons feel more intuitive.",
      sender: "Anupama",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25),
    },
    {
      id: "12",
      content: "Agree with Anupama, but I think the color scheme needs slight adjustments.",
      sender: "Ashlesha",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    {
      id: "13",
      content: "The new mockups look fantastic! Minor tweaks needed on the color scheme.",
      sender: "Kushi",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
  ],
  "4": [
    {
      id: "14",
      content: "Sprint backlog is finalized. Let’s kick off development tomorrow.",
      sender: "Karthik",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 50),
    },
    {
      id: "15",
      content: "Great! I’ll start with the authentication module.",
      sender: "Balaji",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 49),
    },
    {
      id: "16",
      content: "I’ll handle the database schema and initial setup.",
      sender: "Karthik",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    },
    {
      id: "17",
      content: "Sprint planning complete. Ready to start development phase.",
      sender: "Balaji",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    },
  ],
}

export const mockAISuggestions = {
  summary:
    "The teams are making solid progress across projects. Pawan, Prabhas, and Virat are handling the backend, UI, and presentation for Project PathFinder. Sriram and Mounika have key insights for Marketing Strategy. Kushi, Anupama, and Ashlesha are refining the design mockups, while Karthik and Balaji are set to start the Development Sprint.",
  replies: [
    "Sounds great! Keep up the excellent work.",
    "Thanks for the update. Let me know if you need any support.",
    "Fantastic progress! Looking forward to the next milestone.",
  ],
  icebreakers: [
    "Hi team! Excited to collaborate with you all on these projects.",
    "Hello! Looking forward to sharing updates and working together.",
    "Hey everyone! Ready to dive into some great teamwork and innovation.",
  ],
}
