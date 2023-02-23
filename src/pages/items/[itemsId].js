import {useRouter} from 'next/router'
const ItemDetail =()=>{
    const router=useRouter()
    console.log(router.query)
    const itemsId=router.query.itemsId
    return(
        <div>
            <h1>items detail {itemsId} </h1>
        </div>
    )
}
export default ItemDetail