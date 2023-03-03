import {useState} from 'react'
import {useRouter} from 'next/router'
{/* pre-rendering with client side data fetching*/}
const EventList =({eventList})=>{
    const router=useRouter()
    const [events,setEvents]=useState(eventList)
    {/*client side data fetching*/}
    const handleSportsEvents=async()=>{
        const res=await fetch('http://localhost:4000/events?category=sports')
        const data=await res.json()
        setEvents(data)
        router.push('/events?category=sports',undefined,{shallow:true})
        }
    return(
        <>
          <button onClick={handleSportsEvents}>sports events</button>
          <h1>List of events</h1>
          {events?.map((event)=>{
            return(
                <div key={event.id}>
                    <h2>
                        {event.id} {event.title} {event.date} | {event.category}
                    </h2>
                    <p>{event.description}</p>
                    <hr/>
                </div>
            )
          })}

        </>
    )
}
export default EventList


{/*server side data fetching*/}
export const getServerSideProps =async(context)=>{
    const {query}=context
    const {category}=query
    const queryString=category?'category=sports':''
    const res=await fetch(`http://localhost:4000/events?categotry=${queryString}`)
    const data=await res.json()
    return{
        props:{
            eventList:data
        }
    }

}