import Footer from '../components/Footer'
const ProfileName =()=>{
    return(
        <div>
            <h1>profile page</h1>
        </div>
    )
}
export default ProfileName

ProfileName.getLayout=function PageLayout (page){
    return(
        <>
          {page}
          <Footer/>
        </>
    )

}