import Link from 'next/link'
const Items =({itemsId=10})=>{
    return(
        <div>
            <h1>items page</h1>
            <Link href={`/items/${itemsId}`}>
              <h5>items {itemsId}</h5>
            </Link>
        </div>
    )
}
export default Items
