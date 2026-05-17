export default async function handler(req, res) {

  const message = (req.body?.message || "").toLowerCase();

  let reply = "Wala ko kasabot bossing 😅";

  /* HELLO */
  if (message.includes("hello")) {

    const replies = [
      "Hello bossing 👋",
      "Hi boss 😄",
      "Uy kumusta bossing?",
      "Hello again 😎"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* KAMUSTA */
  else if (message.includes("kamusta")) {

    const replies = [
      "Okay ra ko 😄 ikaw?",
      "Goods ra boss 👍",
      "Alive and kicking 😎"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* BASKETBALL */
  else if (message.includes("basketball")) {

    const replies = [
      "Basketball fan diay ka 🏀",
      "Kinsay GOAT nimo? 😎",
      "NBA enjoy kaayo tan-awon 🔥"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* MUSIC */
  else if (message.includes("music")) {

    const replies = [
      "Unsay favorite music nimo? 🎵",
      "Music is life 😄",
      "OPM or foreign songs boss?"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* LOVE */
  else if (message.includes("love")) {

    const replies = [
      "Ayyy na inlove 😳",
      "Love is dangerous hahaha 😂",
      "Basta love complicated usahay 😅"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* ADVICE */
  else if (message.includes("advice")) {

    const replies = [
      "Padayon lang boss 💪",
      "Ayaw give up 👍",
      "Small progress is still progress 😎"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* THANK YOU */
  else if (
    message.includes("thank") ||
    message.includes("salamat")
  ) {

    const replies = [
      "Welcome bossing 😄",
      "Anytime boss 👍",
      "No problem 😎"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* JOKE */
  else if (message.includes("joke")) {

    const replies = [
      "Ngano hilom ang computer? Kay nag crash 😂",
      "Ngano walay wifi sa dagat? Basin mawala ang net 😂",
      "Lowbat ang cellphone kay emotionally drained 😂"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  /* BYE */
  else if (message.includes("bye")) {

    const replies = [
      "Bye bossing 👋",
      "Amping pirmi 😄",
      "Balik lang anytime 👍"
    ];

    reply = replies[Math.floor(Math.random() * replies.length)];
  }

  return res.status(200).json({
    reply: reply
  });

}
