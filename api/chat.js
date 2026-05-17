export default async function handler(req, res) {

  const message = (req.body?.message || "").toLowerCase();

  let reply = "Wala ko kasabot bossing 😅";

  if (message.includes("hello")) {

  const helloReplies = [
    "Hello bossing 👋",
    "Hi boss 😄",
    "Uy kumusta bossing?",
    "Hello again 😎"
  ];

  reply = helloReplies[
    Math.floor(Math.random() * helloReplies.length)
  ];

}

  else if (message.includes("kamusta")) {
    reply = "Okay ra ko 😄 ikaw?";
  }

  else if (message.includes("name")) {
    reply = "Ako si Melvin AI 🤖";
  }

  else if (message.includes("bye")) {
    reply = "Bye bossing 👋";
  }

  return res.status(200).json({
    reply: reply
  });

}
