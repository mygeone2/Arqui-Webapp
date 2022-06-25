// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default  function handler(req, res) {
 
  if(req.method == 'POST'){
     
    const user = req.body.user
    const pass = req.body.pass
    if(req.body.testLogin == 1){
       res.status(200).json({
         isAuthenticated: true,
         user: "miguel",
         token: "asd",
       });
    }else{
      res.status(400).send('Bad Login Creds');
    }
  }
}
