export default async function handler(req, res) {
  const message = (req.body?.message || "").toLowerCase();

  let reply = "Sorry bossing, wala ko kasabot 😅";

  // SIMPLE SMART RESPONSES
  if (message.includes("hello") || message.includes("hi")) {
    reply = "Hello bossing 👋 unsa akong matabang nimo?";
  }

  else if (message.includes("kamusta")) {
    reply = "Okay ra ko bossing 👍 ikaw kumusta?";
  }

  else if (message.includes("unsa")) {
    reply = "Pwede ka mangutana bisan unsa bossing 😊";
  }

  else if (message.includes("name")) {
    reply = "Ako imong AI chatbot assistant 🤖";
  }

  else if (message.includes("bye")) {
    reply = "Bye bossing 👋 balik lang anytime!";
  }

  return res.status(200).json({ reply });
}
