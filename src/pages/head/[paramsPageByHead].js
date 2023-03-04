import Footer from '../../components/Footer'
import Head from 'next/head'
const PageByHead =({h,title,desc})=>{
    return(
        <>
        <Head>
            <title>{title} {h}</title>
            <meta name="description" content={desc} />
        </Head>
        <h1>head page | {h}</h1>
        </>
    )
}
export default PageByHead


export const getStaticPaths =()=>{
    return{
        paths:[
            {params:{paramsPageByHead:'3'}}
        ],
        fallback:false
    }
}
export const getStaticProps =async(context)=>{
    const {params}=context
    console.log('context',context)

    const {paramsPageByHead}=params
    
    return{
        props:{
            h:paramsPageByHead,
            title:'hello athar',
            desc:'from head',
        }
    }
}

PageByHead.getLayout=function PageLayout (page){
    return(
        <>
        {page}
        <Footer/>
        </>
    )
}
