import Footer from '../components/layout/Footer'
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