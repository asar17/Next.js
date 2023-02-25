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


export const getStaticProps = async (context) =>{
    const {params}=context
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data=await res.json()
    return {
        postDetails:data
    }

}