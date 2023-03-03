import useSWR from 'swr'
import {useRouter} from 'next/router'
import {useState} from 'react'
const Comment =({ commentId})=>{
    // const router=useRouter()
    // const [comment,setComment]=useState([])
    // const {commentId}=router.query
    const fetcher =async()=>{
        const res=await fetch(`http://localhost:3000/api/comments/${commentId}`)
        const data=await res.json()
        return data
       
        
    }
    const {data}=useSWR('comm',fetcher)

    return(
        <>
            {data?.id} | {data?.text}
        </>
    )
}
export default Comment

export const getStaticPaths = () =>{
    return{
        paths:[
            {params:{commentId:'1'}},
            {params:{commentId:'2'}},
            {params:{commentId:'3'}},
        ],
        fallback:false
    }
}

export const getStaticProps =(context)=>{
    const {commentId}=context.params
    return{
        props:{
            commentId:commentId
        }
    }


}