import {useRouter} from 'next/router'
import Link from 'next/link'
const Docs=()=>{
    const router=useRouter()
   // const params=router.query.params
   const {params=[]}=router.query
   if(params.length===1){
    return(
        <h1>viewing docs {params[0]}</h1>
    )
   }
   else if(params.length===2){
    return(
        <h1>viewing docs {params[0]} and {params[1]}</h1>
    )
   }
    return(
        <div>
            docs page   
            <Link href="/">
              Home
            </Link>
        </div>
    )
}
export default Docs