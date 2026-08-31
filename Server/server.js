const app = require('../Server/app')

app.get('/',(req,res)=>{
    res.json({
        "message" : "Cortex AI backend is running"
    })
})

app.listen(3000,()=>{
    console.log("Server is Running....");
    
})