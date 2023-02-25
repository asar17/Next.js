import UserView from '../components/userView'
const UserList =({users})=>{
    return(
        <div>
            <h1>user name</h1>
            {users.map((user)=>{
                return(
                    <div key={user.id}>
                       <UserView user={user}/>
                    </div>
                )

            })}
        </div>
    )
}
export default UserList


{/* using getStaticProps to fetch data from external api  */}
export const getStaticProps = async() =>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    return{
        props:{
            users:data
        }
    }
}