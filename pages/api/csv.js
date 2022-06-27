// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "POST") {
        console.log(req);
        res.status(200).json({
            isAuthenticated: true
        });
    }
}
