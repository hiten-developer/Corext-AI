const express = require('express')
const pool = require('./db')
const app = express()

// MiddleWares
app.use(express.json())

// Users Details Route
app.get('/users',async (req,res)=>{
    try{
        const result = await pool.query("Select id,name,email,phone_no,dob from users");
        res.json({
            success : true,
            data : result.rows
        })
    } catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        })
    }
})

// Conversation Creation Route
app.post('/conversations',async (req,res)=>{
    try{
        const result = await pool.query("Insert Into conversations(user_id,title) Values($1,$2) RETURNING *" , [req.body.user_id,req.body.title]);
        res.json({
            success : true,
            message : "Your Data is Stored in DB successfully...",
            result : result.rows[0]
        })
    } catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        })
    }
})

// Messages Route
app.post('/messages',async (req,res) => {
    try{
        const result = await pool.query("insert into messages (conversation_id,content,role) values($1,$2,$3) RETURNING *" , [req.body.conversation_id,req.body.content,req.body.role]);
        res.json({
            success : true,
            message : "Your Data is Stored in DB successfully...",
            
            result : result.rows[0]
        })
    } catch(err){
         res.status(500).json({
            success : false,
            message : err.message
        })
    }
})

module.exports = app