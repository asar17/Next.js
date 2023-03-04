import Image from 'next/image'
const PetsPage =()=>{
    return(
        <>
        <h1>pets</h1>
        {
           ['1','2','3'].map((path)=>{
            return(
                <div key={path}>
                    <Image src={`/${path}.jpg`} alt="pet" width="280" height="420"/>
                </div>
            )
           })
        }
        </>
    )
}
export default PetsPage