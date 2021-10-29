const express=require('express');
const router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./Questions');
// app.post('/insert',(req, res) => {
//     try {
//         console.log("req",req);
//         var data = []
//         var getData =localStorage.getItem('Questions.json')
//         if (getData) {
//             data = JSON.parse(getData);
//             console.log(data);
//             data.push(req.body.newObj[0])
//         }
//         else {
//             localStorage.setItem('Questions.json', JSON.stringify(req.body.newObj)) //set item to localstorage 
//             return res.status("200").json({ "message": "successfully added" });
//         }
//         localStorage.setItem('Questions.json', JSON.stringify(data)) //set item to localstorage 
//         return res.status("200").json({ "message": "successfully added" });
//     }
//     catch (err) {
//        return err
//     }

// })

router.post('/insert', (req, res) => {
    try {
        console.log("done");
        var ques = [];
        var ans = [];
        var getQues = localStorage.getItem('Questions.json')
        var getAns = localStorage.getItem('answer.json')
        ques = JSON.parse(getQues);
        ques.push(req.body)
        ans = JSON.parse(getAns);
        ans.push(req.body.correct);
        //console.log(data);
        console.log(ques, ans)
        localStorage.setItem('Questions.json', JSON.stringify(ques)) //questions set item to localstorage
        localStorage.setItem('answer.json', JSON.stringify(ans)) //answer set item to localstorage  
        return res.status("200").json({ "message": "successfully added" });
    }
    catch (err) {
        return err
    }

})

// app.get('/questions',async (req,res)=>{
//     try{
//         var getData = await localStorage.getItem('Questions.json')
//         if(getData){
//             let questionAns = JSON.parse(getData);
//             console.log(questionAns);
//             res.send(questionAns)
//         }
//     }
//     catch(err){
//         return err
//     }
// })
router.get('/questions', async (req, res) => {
    try {
        var getData = localStorage.getItem('Questions.json')
        if (getData) {
            // let questionAns =await (JSON.parse(getData));
            //console.log(questionAns);
            res.send(getData);
        }
    }
    catch (err) {
        return err
    }
})
// app.post('/submit',(req, res) => {
//     try {
//         console.log("done");
//         localStorage.setItem('userAnswer.json', JSON.stringify(req.body)) //user ANswer set item to localstorage  
//         return res.status("200").json({ "message": "successfully added" });
//     }
//     catch (err) {
//        return err
//     }

// })
router.post('/submit', async (req, res) => {
    try {
        console.log("hi");
        console.log(req.body.result);
        var getAns = localStorage.getItem('answer.json');
        var getData = localStorage.getItem('Questions.json')
        if (getAns) {
            let questionAns = JSON.parse(getAns);
            let reqAns = req.body.result
            console.log(reqAns);
            var score = 0
            var total = 0
            questionAns.forEach(async (table, index) => {
                if (table === reqAns[index].data) {
                    score = score + 1
                }
                total = total + 1
            });
            console.log(score, total);
            res.send([{ "score": score, "total": total, getData }]);
        }
    }
    catch (err) {
        return err
    }
})
module.exports=router
