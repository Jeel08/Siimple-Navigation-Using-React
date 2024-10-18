import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import About from './component/about';
import Blog from './component/blog';
import Contact from './component/contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss";
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>

{/* <>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</> */}

function App() {
  return (
    <>
          <nav>
        <div className='row main'>
          <div className='col navBar'>
            <a href="/home" className='anchorStyle'>Home</a>
          </div>
          <div className='col navBar'>
            <a href="/about" className='anchorStyle'>About</a>
          </div>
          <div className='col navBar'>
            <a href="/blog" className='anchorStyle'>Blog</a>
          </div>
          <div className='col navBar'>
            <a href="/contact" className='anchorStyle'>Contact</a>
          </div>
        </div>
      </nav>
    <div className='row '>
    <BrowserRouter>
    <Routes>
      
    <Route path="/home" element={<Home/>} />
      {/* <div className='col navBar'>
        <Home/>
      </div> */}
      <Route path="/about" element={<About/>} />
      {/* <div className='col navBar'>
        <About></About>
      </div> */}

      <Route path="/blog" element={<Blog/>} />
      {/* <div className='col navBar'>
        <Blog></Blog>
      </div> */}

    <Route path="/contact" element={<Contact/>} />
      {/* <div className='col navBar'>
        <Contact></Contact>
      </div> */}

    </Routes>
    </BrowserRouter>
    </div>

    {/* <Container>
        <Row>

          <Col>
          <Home />
          </Col>
        
        <Col>
          <About />
        </Col>
        

        <Col>
          <Blog />
        </Col>

      <Col>
          <Contact />
      </Col>

        </Row>
      </Container> */}
    </>
  );
}

export default App;
