import Link from 'next/link'
const Home =()=>{
    return(
        <div>
            <h1>home page</h1>
            <Link href='/blog' legacyBehaviour>
               Blog
            </Link>
            <Link href='/items' legacyBehaviour>
               ... Items
            </Link>
        </div>
    )
}
export default Home
