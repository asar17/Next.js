import {useState,useEffect} from 'react' 
import {getSession,signIn} from 'next-auth/react'
const Dashboard =()=>{
    const [allData,setAllData]=useState(null)
    const fetchData=async()=>{
        const res=await fetch('http://localhost:4000/dashboard')
        const data=await res.json()
        setAllData(data)
    }
    const securePage = async()=>{
        const session =await getSession()
        if(!session){
            signIn()
        }

    }
    useEffect(()=>{
        fetchData()
        securePage()
    },[])
    return(
        <div>
            <h2>Dashboard</h2>
            <h2>{allData?.posts}</h2>
            <h2>{allData?.likes}</h2>
            <h2>{allData?.followers}</h2>
            <h2>{allData?.following}</h2>
        </div>
    )
}
export default Dashboard