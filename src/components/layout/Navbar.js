import Link from 'next/link'
import {signIn,signOut,useSession}  from 'next-auth/react'
const Navbar =()=>{
   const {data:session,loading}=useSession()
    return(
        <>
        <div className="all">
            <div>
               <h2>Navbar</h2> 
            </div>

            <div className="all-child2">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/dashboard">Dashboard</Link>


                {!session &&  (
                       <button onClick={()=>signIn()}>
                            <Link href="/api/auth/signin">
                                sign-in
                            </Link>
                       </button>
                )}

                 { session && (
                    <button onClick={()=>signOut()}>
                        <Link href="/api/auth/signout">
                            sign-out
                        </Link>
                    </button>

                 )}
             

                
               
            </div>

        </div>
        </>
    )
}
export default Navbar;