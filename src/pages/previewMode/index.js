import Footer from '../../components/layout/Footer'
const News =({data})=>{
    return(
        <>
         <h1>hello preview</h1>
         <p>{data}</p>
        </>
    )
}
export default News


export const getStaticProps =(context)=>{
    console.log(context.previewData)
    const res=context.previewData.name
    return{
        props:{
            data:context.preview?res:'hello from not preview mode'
        }
    }
}

News.getLayout=function PageLayout(page){
    return(
        <>
        {page}
        <Footer/>
        </>
    )
}