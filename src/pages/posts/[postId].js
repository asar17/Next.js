import {useRouter} from 'next/router'
const PostDetails =({postDetails})=>{
    const router=useRouter()
    if(router.isFallback){
        return(
            <h1>loading...</h1>
        )
    }
    return(
        <>
          <h1>
            {postDetails?.id}  {postDetails?.title}
          </h1>
          <p>{postDetails?.body}</p>

        </>
    )
}
export default PostDetails

export const getStaticPaths =()=>{
    // const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data=await res.json()
    // const paths=data.map((post)=>{
    //     return{
    //        params:{
    //         postId:`${post.id}`
    //        }
    //     }
    // })
    // return{
    //     paths:paths,
    //     fallback:true
    //}
    return{
        paths:[
            {
                params:{postId:'1'}
            },
            {
                params:{postId:'2'}
            },
            {
                params:{postId:'3'}
            },
        ],
        fallback:true
    }

}

export const getStaticProps = async (context) =>{
    const {params}=context
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data=await res.json()
    if(!data.id){
        return{
            notFound:true
        }
    }
    return {
        props:{
            postDetails:data
        }
    }

}