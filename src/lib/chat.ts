export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function sendChatMessage(
  messageText: string,
  messages: Message[] = [],
): Promise<Response> {
  return fetch("/api/openai-stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: messageText,
      messages: messages,
    }),
  });
}

export async function processStreamResponse(
  response: Response,
  updateMessages: (updater: (prev: Message[]) => Message[]) => void,
): Promise<void> {
  if (!response.ok || !response.body) {
    throw new Error("Server error: " + response.statusText);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  // Add empty assistant message that will be updated
  updateMessages((prev) => [...prev, { role: "assistant", content: "" }]);

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split("\n\n");

    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const jsonData = line.slice(6);
        try {
          const parsedData = JSON.parse(jsonData);
          updateMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = parsedData;
            return newMessages;
          });
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }
}
