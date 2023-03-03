import {useState} from 'react'
const Comments =()=>{
    const [comments,setComments]=useState([])
    const [comment,setComment]=useState('')
    const loadComments=async()=>{
        const res=await fetch('http://localhost:3000/api/comments')
        const data=await res.json()
        setComments(data)
        
    }
   
    const submitComment =async()=>{
        const res=await fetch('http://localhost:3000/api/comments',{
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    const deleteComment=async(commentId)=>{
        const res= await fetch(`/api/comments/${commentId}`,{
            method:'DELETE'
        })
        loadComments()
    }
    return(
        <>
          <input type="text" placeholder="write comment" onChange={(e)=>setComment(e.target.value)}/>
          <button onClick={submitComment}>submit commit</button>
          <button onClick={loadComments}>Load Comments</button>
          {comments?.map((comment)=>{
            return(
                <div key={comment.id}>
                    <h1>{comment.id} | {comment.text}</h1>
                    <button onClick={()=>deleteComment(comment.id)}>delete</button>
                </div>
            )
          })}
        </>
    )
}
export default Comments