"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const saveMemory = () => {
    const existing = localStorage.getItem("memories");
    const memories = existing ? JSON.parse(existing) : [];

    memories.push({
      text,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem("memories", JSON.stringify(memories));
    setText("");
    alert("Hafızaya kaydedildi");
  };

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Personal Memory</h1>

      <textarea
        placeholder="Hatırlanmasını istediğin şeyi yaz"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: 120 }}
      />

      <br />
      <br />

      <button onClick={saveMemory}>
        Hafızaya Kaydet
      </button>
    </main>
  );
}