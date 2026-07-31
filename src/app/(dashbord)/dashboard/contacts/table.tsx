"use client";

import { useEffect, useState } from "react";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));

export default function ContactMessagesTable() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch("/api/contact", { cache: "no-store" });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Messages could not be loaded.");
        }

        setMessages(data);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Messages could not be loaded.");
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, []);

  const deleteMessage = async (id: string) => {
    const response = await fetch("/api/contact", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setMessages((currentMessages) => currentMessages.filter((message) => message.id !== id));
    }
  };

  if (isLoading) {
    return <p className="text-sm text-gray-600">Loading messages...</p>;
  }

  if (errorMessage) {
    return <p className="rounded border border-red-200 bg-red-50 p-4 text-sm text-red-700">{errorMessage}</p>;
  }

  if (!messages.length) {
    return (
      <div className="rounded border border-gray-200 bg-white p-6 text-gray-700">
        No contact messages have been received yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded border border-gray-200 bg-white">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-900 text-left text-sm text-white">
          <tr>
            <th className="px-4 py-3">Received</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Subject</th>
            <th className="px-4 py-3">Message</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm text-gray-800">
          {messages.map((message) => (
            <tr key={message.id} className="align-top">
              <td className="whitespace-nowrap px-4 py-4">{formatDate(message.submittedAt)}</td>
              <td className="px-4 py-4 font-medium">{message.name}</td>
              <td className="px-4 py-4">
                <a className="text-blue-600 hover:text-blue-800" href={`mailto:${message.email}`}>
                  {message.email}
                </a>
              </td>
              <td className="px-4 py-4 font-medium">{message.subject}</td>
              <td className="max-w-md whitespace-pre-line px-4 py-4 leading-6">{message.message}</td>
              <td className="px-4 py-4">
                <button
                  type="button"
                  onClick={() => deleteMessage(message.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
