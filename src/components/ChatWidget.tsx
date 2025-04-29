"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import "@/app/globals.css";

export const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL,
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: [
        "Welcome to Yieldra! 💸",
        "I’m your DeFi Assistant — here to help you grow your stablecoins effortlessly with up to 5% APY.",
      ],
      i18n: {
        en: {
          title: "Welcome to Yieldra! 💸",
          subtitle: "Have questions about earning with DeFi? I'm here to help 24/7.",
          footer: "",
          getStarted: "Start Chat",
          inputPlaceholder: "Ask anything about Yieldra or DeFi...",
          closeButtonTooltip: "Close",
        },
      },
    });
  }, []);

  return <div></div>;
};
