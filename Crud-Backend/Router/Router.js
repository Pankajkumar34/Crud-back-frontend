const express = require('express')
const router = express.Router()
const MySchema = require('../model/Schema')
// const bycrypt = require('bcrypt')


// require variables---------------------------
router.post('/post', (req, res) => {
    // res.json(req.body)
    const user = MySchema(req.body)
    user.save((err, resp) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            res.status(200).json({ resp })
        }
    })
})
router.get('/get', (req, res) => {
    MySchema.find((req.body), (err, resp) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            res.status(200).json({ resp })
        }
    })
})
router.get("/:id", async (req, res) => {
    try {
        const post = await MySchema.findById(req.params.id);
        if (!post) return res.status(404).send("Post not found");
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.delete("/delete/:id", (req, res) => {
    // MySchema.findByIdAndDelete((req.params.id),(err,resp)=>{
    //     if(err){
    //         res.status(400).json({err})
    //     }else{
    //         res.status(200).json({resp})
    //     }
    // })
    MySchema.findByIdAndDelete((req.params.id),(err,resp) => {
        if(err){
            res.status(400).json({err:"not found"})
        }else{
            res.send({ resp: true })
        }
        
    })


})
// router.put('/:_id',(req,res)=>{
//     MySchema.findById((req.params._id),{...req.body},(err,resp)=>{
//         if(err){
//             res.status(400).json({err})
//         }else{
//             res.status(200).json({resp})
//         }
//     })


// })

router.put("/put/:_id", (req, res) => {
    MySchema.findByIdAndUpdate((req.params._id), {
        username: req.body.username,
        email: req.body.email, password: req.body.password
    }
        , (err, resp) => {
            if (err) {
                res.status(400).json({ err })
            } else {
                res.status(200).json({ resp })
            }
        })
})

router.put("/update/:_id", (req, res) => {
    MySchema.findByIdAndUpdate((req.params._id), {
        "username": req.body.username,
        "email": req.body.email,
        "password": req.body.password
    }, (err, resp) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            res.status(200).json({ resp })
        }
    })
})



module.exports = router