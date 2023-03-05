const Envireonment =()=>{
    return(
        <>
          <h1>hello from env file</h1>
          <p>{process.env.NEXT_PUBLIC_NAME}</p>
        </>
    )
}
export default Envireonment