import Link from 'next/link'
import {useRouter} from 'next/router'
const Items =()=>{
   const router=useRouter()
   const {itemsId}=router.query
    return(
        <div>
            <h1>items page</h1>
            <Link href={`/items/${itemsId}`}>
              items {itemsId}
            </Link>
        </div>
    )
}
export default Items
