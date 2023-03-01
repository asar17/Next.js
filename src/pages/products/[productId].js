import {useRouter} from 'next/router'
const ProductListDetails =({pro})=>{
    const router=useRouter()
    if(router.isFallback){
        return <div>loading .....</div>

    }
    return(
        <div>
            <h1>product details</h1>
            <h2>{pro.id} {pro.title} {pro.price}</h2>
            <p>{pro.description}</p>
            <hr/>

        </div>
    )
}

export default ProductListDetails




export const getStaticProps =async(context)=>{
    console.log('re-generation');
    const {params}=context
    const res=await fetch(`http://localhost:4000/products/${params.productId}`)
    const data=await res.json()
    return{
        props:{
            pro:data
        },
        revalidate:10
    }
}

export const getStaticPaths =()=>{
    return{
        paths:[
            {params:{productId:'1'}}
        ],
        fallback:true
    }
}