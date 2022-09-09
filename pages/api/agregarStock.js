// a nextjs api

export default function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body.data;
    console.log(data);
        res.status(200).send({"a":1});
    }
  }
