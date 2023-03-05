const handler=(req,res)=>{
    res.setPreviewData({name:"hello athar from preview data"})
    res.redirect(req.query.redirect)
}
export default handler