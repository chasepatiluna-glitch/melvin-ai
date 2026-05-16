export default async function handler(req, res) {

  try {

    return res.status(200).json({
      reply: "FREE AI CONNECTED SUCCESSFULLY"
    });

  } catch (err) {

    return res.status(500).json({
      reply: err.message
    });

  }

}
