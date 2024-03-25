import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from '../img/Vector_1.png'; 
import imagen1 from '../img/Vector_2.png';    
import imagen2 from '../img/Group.png';    
import imagen4 from '../img/Element_1.png';     
import React from "react";  

function About() {
  return (
    <>
    <div className='About'>
    <Container>
      <Row>
        <Col xs={12} md={12}>
            <div className='thing align-items-center'>
            <h4 className='thing1 mb-0'>Things you need <span>to do</span> </h4>
            
            </div>
            <div className='thing2'>
            <p>We ensure that you'll embark on a perfectly planned, <br/>safe vacation at a price you can afford.</p>
            
            </div>
            <img src={imagen4} alt="Imagen 1" className="img1 img-fluid " />
        </Col>

      </Row>
      <div className='d-flex'> 
            <div className="cont1 container"> 
            <div className="row"> 
            <div className="col1 col"> 
            
            <img src={imagen} alt="Imagen 1" className="img-fluid d-flex pb-5" style={{marginLeft:'10px',marginTop:'30px'}}/>
            <h4 className='pb-1 d-flex' style={{marginLeft:'10px'}}>Sign Up</h4>
            <p className="flex-wrap" style={{marginLeft:'10px'}}>Completes all the work associated with planning and processing</p>
            </div>
           
            <div className="col1 col"> 
            <img src={imagen1} alt="Imagen 1" className="img-fluid d-flex pb-5" style={{marginLeft:'10px',marginTop:'30px'}} />
          <h4 className='pb-1 d-flex' style={{marginLeft:'10px'}}>Worth of Money</h4>
          <p className='text-flex' style={{marginLeft:'10px'}}>After successful access the book from axclusive deals & pricing</p>
            </div> 
            <div className="col1 col"> 
            <img src={imagen2} alt="Imagen 1" className="img-fluid d-flex pb-5"style={{marginLeft:'10px',marginTop:'30px'}}/>
          <h4 className='pb-1 d-flex' style={{marginLeft:'10px'}}>Exciting Tavel</h4>
          <p className='text-flex' style={{marginLeft:'10px'}}>Start and explore a wide range of exciting travel experience.</p>
            </div> 
            </div> 
            </div> 
            </div>
      
    </Container>
    </div>
    
    </>
    
  );
}

export default About;