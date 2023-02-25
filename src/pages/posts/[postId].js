const PostDetails =({postDetails})=>{
    return(
        <>
          <h1>
            {postDetails.id}  {postDetails.title}
          </h1>
          <p>{postDetails.body}</p>

        </>
    )
}
export default PostDetails

export const getStaticPaths =async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json()
    const paths=data.map((post)=>{
        return{
           params:{
            postId:`${post.id}`
           }
        }
    })
    return{
        paths:paths,
        fallback:false
    }

}

export const getStaticProps = async (context) =>{
    const {params}=context
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data=await res.json()
    return {
        props:{
            postDetails:data
        }
    }

}