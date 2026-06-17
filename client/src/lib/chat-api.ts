import { apiRequest } from "./queryClient";
import type { Conversation, Message } from "@shared/schema";

export async function getConversations(): Promise<Conversation[]> {
  const response = await apiRequest("GET", "/api/conversations");
  return response.json();
}

export async function createConversation(data: { title: string; category: string }): Promise<Conversation> {
  const response = await apiRequest("POST", "/api/conversations", data);
  return response.json();
}

export async function getMessages(conversationId: string): Promise<Message[]> {
  const response = await apiRequest("GET", `/api/conversations/${conversationId}/messages`);
  return response.json();
}

export async function sendMessage(conversationId: string, content: string, category: string): Promise<{
  userMessage: Message;
  assistantMessage: Message;
  aiResponse: any;
}> {
  const response = await apiRequest("POST", `/api/conversations/${conversationId}/messages`, {
    content,
    category,
  });
  return response.json();
}

export async function uploadFile(file: File): Promise<{
  file: any;
  analysis: string;
}> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!response.ok) {
    const text = await response.text() || response.statusText;
    throw new Error(`${response.status}: ${text}`);
  }

  return response.json();
}

export async function exportConversation(conversationId: string): Promise<void> {
  const response = await fetch(`/api/conversations/${conversationId}/export`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to export conversation");
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `conversation-${conversationId}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
