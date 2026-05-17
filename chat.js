export default async function handler(req, res) {

  const message = (req.body?.message || "").toLowerCase();

  let reply = "Wala ko kasabot bossing 😅";

  if (message.includes("hello")) {
else if (message.includes("basketball")) {

  const replies = [
    "Basketball lover diay ka bossing 🏀",
    "Kinsay GOAT nimo? 😎",
    "NBA fan ka boss?"
  ];

  reply = replies[Math.floor(Math.random() * replies.length)];
}

else if (message.includes("music")) {

  const replies = [
    "Unsay favorite music nimo? 🎵",
    "Relaxing kaayo ang music boss 😄",
    "OPM or foreign songs?"
  ];

  reply = replies[Math.floor(Math.random() * replies.length)];
}

else if (message.includes("love")) {

  const replies = [
    "Ayyy na inlove 😳",
    "Love is dangerous bossing hahaha",
    "Basta love, sakit usahay 😂"
  ];

  reply = replies[Math.floor(Math.random() * replies.length)];
}

else if (message.includes("advice")) {

  const replies = [
    "Padayon lang bossing 💪",
    "Ayaw undang bisan lisod 👍",
    "Small progress is still progress 😎"
  ];

  reply = replies[Math.floor(Math.random() * replies.length)];
}

else if (message.includes("thank")) {

  const replies = [
    "Welcome bossing 😄",
    "Anytime boss 👍",
    "No problem 😎"
  ];

  reply = replies[Math.floor(Math.random() * replies.length)];
}

else if (message.includes("joke")) {

  const replies = [
    "Ngano walay wifi sa dagat? Kay basin mawala ang net 😂",
    "Ngano hilom ang computer? Kay nag crash 😂",
    "Basta lowbat ang cellphone, emotional nana 😂"
  ];

  reply = replies[Math.floor(Math.random() * replies.length)];
}
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
