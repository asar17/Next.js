
const NewsList =({news})=>{
    return(
        <>
            <h1>News List</h1>
         
            {news?.map((ne)=>{
                return(
                    <div key={ne.id}>
                        <h2>{ne.id} {ne.title} {ne.category}</h2>

                    </div>
                )
            })}
        
         </>
    )
}
export default NewsList

export const getServerSideProps = async()=>{
    const res=await fetch('http://localhost:4000/news')
    const data=await res.json()
    return{
        props:{
            news:data
        }
    }
}