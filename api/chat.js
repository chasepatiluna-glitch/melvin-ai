export default async function handler(req, res) {

  const message = (req.body?.message || "").toLowerCase();

  let reply = "Hmm... dili ko sure ana bossing 😅";

  // 🧠 SIMPLE BRAIN LOGIC
  if (message.includes("hello") || message.includes("hi")) {
    reply = "Hello bossing 👋 kumusta ka?";
  }

  else if (message.includes("kamusta")) {
    reply = "Okay ra ko permi 😄 ikaw kumusta?";
  }

  else if (message.includes("name")) {
    reply = "Ako imong simple AI assistant 🤖";
  }

  else if (message.includes("love")) {
    reply = "Ayyy 😳 AI ra ko pero na touch ko ana!";
  }

  else if (message.includes("bye")) {
    reply = "Bye bossing 👋 balik lang anytime!";
  }

  else if (message.includes("unsa")) {
    reply = "Pwede ka mangutana bisan unsa bossing 😊";
  }

  else if (message.includes("help")) {
    reply = "Sure ko mo tabang nimo 👍 unsa imong pangutana?";
  }

  else if (message.includes("joke")) {
    reply = "Ngano walay WiFi ang kaldero? kay rice fields 😂";
  }

  return res.status(200).json({ reply });

}
