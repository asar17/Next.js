import {useRouter} from 'next/router'
const ItemDetail =()=>{
    const router=useRouter()
    const {itemsId}=router.query
    return(
        <div>
            <h1>items detail {itemsId} </h1>
        </div>
    )
}
export default ItemDetail