// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "POST") {
    const user = req.body.user;
    const pass = req.body.pass;
    const isAdmin = req.body.isAdmin;
    
    res.status(200).json({ fill: 1 });

  
  }
}
  // if (isAdmin == 1 && process.env.TEST) {
  //   res.status(200).json({ fill: 1 });
  // } else {
  //   res.status(200).json({ fill: 1 });
  // }

  // if (isAdmin === 0 && process.env.TEST == 1) {
  //   console.log(typeof process.env.TEST);
  //   res.status(200).json({ fill: 1 });
  // } else {
  //   res.status(200).json({ fill: 1 });
  // }