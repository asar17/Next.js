import Link from 'next/link'
const ProductList =({products})=>{
    return(
        <>
        <h1>list of products</h1>
        {products.map((p)=>{
            return(
                <div key={p.id}>
                       <h2>{p.id}  {p.title}  {p.price} </h2>
                    
                    <hr/>
                </div>
            )
        })}
        </>
    )
}
export default ProductList

export const getStaticProps =async ()=>{
    const res=await fetch('http://localhost:4000/products')
    const data=await res.json()
    return{
        props:{
            products:data
        },
        revalidate:30
    }
}