const NewsByCategory =({news})=>{
    return(
        <>
         <h1>show news by category</h1>
         {news.map((n)=>{
            return(
                <div key={n.id}>
                    <h2>{n.id}  {n.title} {n.category}</h2>

                </div>
            )
         })}
        </>
    )
}
export default NewsByCategory

export const getServerSideProps  =async(context)=>{
    const {params}=context
    const {category}=params
    const res=await fetch(`http://localhost:4000/news?category=${category}`)
    const data=await res.json()
    return{
        props:{
            news:data,
            category    
        }
    }

}

