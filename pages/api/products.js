export default function handler(req, res) {
    if(req.method == 'POST'){
        //PCB
        if(req.body.data1 == 1){
            res.status(200).json({ arrayId: [1,2]}); 
        }
        //Case
        if(req.body.data == "2,1"){
            res.status(200).json({ arrayId: [3,4,7]}); 
        }
        //Switches
        if (req.body.data == "3,3") {
        res.status(200).json({ arrayId: [1, 2] });
        }
        //Keycaps
        if (req.body.data == "4,1") {
        res.status(200).json({ arrayId: [1,2,3,4,5,6,7,8,9] });
        }

  }
}
