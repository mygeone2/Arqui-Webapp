// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "POST") {
    const user = req.body.user;
    const pass = req.body.pass;
    const isAdmin = req.body.isAdmin;

    if (isAdmin == 1 && process.env.test) {
      res.status(200).json({fill:1});
    } else {
      res.status(400).send("Bad Login Creds");
    }

    if (isAdmin == 0 && process.env.test) {
      res.status(200).json({ fill: 1 });
    } else {
      res.status(400).send("Bad Login Creds");
    }
  }
}
