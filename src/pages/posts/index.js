import Link from 'next/link'
const PostList =({posts})=>{
    return(
        <>
         <h1> All Posts Page</h1>
         {posts?.map((post)=>{
            return(
                <div key={post.id}>
                    <Link href={ `posts/${post.id}`}>
                        {post.id}  {post.title}
                    </Link>
                </div>
            )
         })}
        </>
    )
}
export default PostList



{/* using getStaticProps to fetch posts from external api  */}
export const getStaticProps =async () =>{
    const res=await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json()
    return{
        props:{
            posts:data
        }
    }
}