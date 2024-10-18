import gallery from '../Images/free-images.avif';
const Home = () => {
    return(
        <>
        <div style={{display:"flex",marginTop:"5rem",overflowY:"hidden"}}>
            <div style={{width:"50%",padding:"1rem",marginTop:"3rem"}}>
                <p style={{fontSize:"4rem",color:"saddlebrown",textAlign:"center"}}>Increase Your Productivity</p>
                <br />
                <p style={{textWrap:"wrap"}}>Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image. The word “photography” comes from the Greek words “photos” meaning “light” and “graphos” meaning “drawing” or “writing.” It is a form of visual communication that has become an integral part of our daily lives.</p>
                <br />
                <p className='knowmore'>Know More</p>
            </div>
            <div style={{width:"50%"}}>
                <img src={gallery} alt="Gallery" style={{width:"90%"}} />
            </div>
        </div>
        </>
    )
}
export default Home;