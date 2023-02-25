import Link from 'next/link'
import {useRouter} from 'next/router'
const Home =()=>{
    const router=useRouter()
    const handleNavigate =()=>{
        router.push({
            pathname:'/items',
            query:{itemsId:500}
        })
    }
   
    return(
        <div>
            <h1>home page</h1>
            <Link href='/blog' legacyBehaviour>
               Blog
            </Link>
            <Link href='/items' legacyBehaviour>
               ... Items
            </Link>
            {/* navigation between pages */}
            <button onClick={handleNavigate}>
                Place Order
            </button>
            {/*  navigate to posts page*/}
            <Link href="/posts">
              <h2>All Posts</h2>
            </Link>
        </div>
    )
}
export default Home
