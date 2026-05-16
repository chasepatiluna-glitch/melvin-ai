export default async function handler(req, res) {
  try {

    const message = req.body?.message;

    if (!message) {
      return res.status(400).json({ reply: "No message received" });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();

    console.log("OPENAI RAW:", data);

    if (!response.ok) {
      return res.status(500).json({
        reply: data.error?.message || "OpenAI failed"
      });
    }

    return res.status(200).json({
      reply: data.choices?.[0]?.message?.content || "No response from AI"
    });

  } catch (err) {
    return res.status(500).json({
      reply: "Server error: " + err.message
    });
  }
}
