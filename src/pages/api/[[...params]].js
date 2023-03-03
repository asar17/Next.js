const handler =(req,res)=>{
    const params=req.query.params
    if(params){
        res.status(200).json(params)
    }
    else{
        res.status(200).json({name:"home page api route"})
    }

}
export default handler