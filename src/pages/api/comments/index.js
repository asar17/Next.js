import {comments} from '../../../data'
const handler =(req,res)=>{
    if(req.method ==='GET'){
        res.status(200).json(comments)
    }
    else if(req.method === 'POST'){
        console.log('req',req)
        const comment=req.body.comment
        const newComment={
            id:Date.now(),
            text:comment
        }
        comments.push(newComment)
        //res.status(201).json(newComment)

    }
}
export default handler