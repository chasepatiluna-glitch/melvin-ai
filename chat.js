export default async function handler(req, res) {

  const message = (req.body?.message || "").toLowerCase();

  let reply = "Hmm... dili ko kasabot 😅";

  // 💙 FRIENDLY MODE PERSONALITY
  if (message.includes("hello") || message.includes("hi")) {
    reply = "Hello bossing 👋 kumusta imong adlaw?";
  }

  else if (message.includes("kamusta")) {
    reply = "Okay ra ko permi 😄 ikaw kumusta?";
  }

  else if (message.includes("love")) {
    reply = "Ayyy 😳 AI ra ko pero sweet kaayo na imong message!";
  }

  else if (message.includes("pangalan")) {
    reply = "Ako si Melvin AI 🤖 imong assistant sa chat!";
  }

  else if (message.includes("bye")) {
    reply = "Bye bossing 👋 balik lang anytime!";
  }

  else if (message.includes("help")) {
    reply = "Pwede ka mangutana nako bisan unsa 😊";
  }

  return res.status(200).json({ reply });
}
