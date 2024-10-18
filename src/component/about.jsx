import i1 from '../Images/ii.jpeg';
import i2 from '../Images/i2.jpg';
import i3 from '../Images/i3.jpg';
import i4 from '../Images/i4.jpg';


import './style.css';
const About = () => {

    return(
        <>
        <div style={{marginTop:"1rem"}}>
        <p className='title'><b>About</b></p>
        <div className="aboutStyle">
            <div style={{padding:"10px",display:"flex",gap:"10px"}}>
                <img src={i1} alt="Image 1" className='img-Style'/>
                <p style={{textWrap:"wrap"}}>Whether you’re working on graphics, ads, or elements for your website, Photoshop has plenty of options to create eye-catching text.
                    If you’re used to working with images, you might feel a little out of your element working with typography. But you can use your photography and photo skills to style text in fun ways.</p>
            </div>
            <hr/>
            <div style={{padding:"5px",display:"flex",gap:"10px"}}>
                <img src={i2} alt="Image 2" className='img-Style'/>
                <p style={{textWrap:"wrap"}}>Hi! I'm Mosh, a software engineer with over 20 years of experience. I'm all about clear, concise, practical coding tutorials – no fluff, just the good stuff! My courses focus on real-world projects and the skills that will get you hired. I've helped millions of students transform their careers. Want to level up your skills? Check out my courses and get started.</p>
            </div>
            <hr/>
            <div style={{padding:"5px",display:"flex",gap:"10px"}}>
                <img src={i4} alt="Image 3" className='img-Style'/>
                <p style={{textWrap:"wrap"}}>Pellentesque in nunc vitae turpis accumsan feugiat. In ac lacus sed libero dapibus lacinia. Suspendisse auctor facilisis risus nec condimentum. Etiam viverra turpis vitae ligula ultricies bibendum. Morbi finibus, purus ut gravida mollis, lorem metus faucibus sapien, a vestibulum elit justo vitae nunc. Integer nec lorem ultricies, sodales lorem eget, efficitur lectus. Vivamus convallis nunc a metus suscipit fermentum.</p>
            </div>
        </div>
        </div>
        </>
    )
}
export default About;