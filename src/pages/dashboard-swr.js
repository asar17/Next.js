import useSWR from 'swr'
import Header from '../components/Header'
const DashboardSwr =()=>{
    const fetcher =async()=>{
        const res=await fetch('http://localhost:4000/dashboard')
        const data=await res.json()
        return data
    
    }
   
    const {data}=useSWR('dashboard',fetcher)
    return(
        <div>
            <h2>Dashboard</h2>
            <h2>{data?.posts}</h2>
            <h2>{data?.likes}</h2>
            <h2>{data?.followers}</h2>
            <h2>{data?.following}</h2>
        </div>
    )
}
export default DashboardSwr

DashboardSwr.getLayout=function PageLayout (page){
    return(
        <>
         <Header/>
         {page}
        </>
    )
}