"use client";

import { useEffect } from "react";
import "@/app/globals.css";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";


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

    const style = document.createElement("style");
    style.id = "n8n-chat-style";
    style.innerHTML = `
      #n8n-chat {
        --chat--color-primary: oklch(0.623 0.214 259.815);       /* Base */
        --chat--color-primary-shade-50: oklch(0.58 0.214 259.815);  /* Slightly darker */
        --chat--color-primary-shade-100: oklch(0.52 0.21 259.815);  /* More depth */
        --chat--color-secondary: #20b69e;
        --chat--color-secondary-shade-50: #1ca08a;
        --chat--color-white: #ffffff;
        --chat--color-light: #f2f4f8;
        --chat--color-light-shade-50: #e6e9f1;
        --chat--color-light-shade-100: #c2c5cc;
        --chat--color-medium: #d2d4d9;
        --chat--color-dark: #101330;
        --chat--color-disabled: #777980;
        --chat--color-typing: #404040;

        --chat--spacing: 1rem;
        --chat--border-radius: 0.25rem;
        --chat--transition-duration: 0.15s;

        --chat--window--width: 400px;
        --chat--window--height: 600px;

        --chat--header-height: auto;
        --chat--header--padding: var(--chat--spacing);
        --chat--header--background: var(--color-gray-900);
        --chat--header--color: var(--chat--color-light);
        --chat--header--border-top: none;
        --chat--header--border-bottom: none;
        --chat--header--border-bottom: none;
        --chat--header--border-bottom: none;
        --chat--heading--font-size: 2em;
        --chat--header--color: var(--chat--color-light);
        --chat--subtitle--font-size: inherit;
        --chat--subtitle--line-height: 1.8;

        --chat--textarea--height: 50px;

        --chat--message--font-size: 1rem;
        --chat--message--padding: var(--chat--spacing);
        --chat--message--border-radius: var(--chat--border-radius);
        --chat--message-line-height: 1.8;
        --chat--message--bot--background: var(--chat--color-white);
        --chat--message--bot--color: var(--chat--color-dark);
        --chat--message--bot--border: none;
        --chat--message--user--background: var(--chat--color-secondary);
        --chat--message--user--color: var(--chat--color-white);
        --chat--message--user--border: none;
        --chat--message--pre--background: rgba(0, 0, 0, 0.05);

        --chat--toggle--background: var(--chat--color-primary);
        --chat--toggle--hover--background: var(--chat--color-primary-shade-50);
        --chat--toggle--active--background: var(--chat--color-primary-shade-100);
        --chat--toggle--color: var(--chat--color-white);
        --chat--toggle--size: 64px;

        --chat--input--text-color: var(--chat--color-dark);
      }
    `;

    const observer = new MutationObserver(() => {
      const chatEl = document.querySelector("#n8n-chat");
      if (chatEl && !document.getElementById("n8n-chat-style")) {
        document.head.appendChild(style);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const styleEl = document.getElementById("n8n-chat-style");
      if (styleEl) styleEl.remove();
    };
  }, []);

  return null;
};
