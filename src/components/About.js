import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from '../img/Vector_1.png'; 
import imagen1 from '../img/Vector_2.png';    
import imagen2 from '../img/Group.png';    
import imagen4 from '../img/Element_1.png';       

function About() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={12} >
            <div className=' align-items-center'>
            <h4 className='mb-0'>Things you need <span>to do</span> </h4>
            <img src={imagen4} alt="Imagen 1" className="img-fluid " />
            </div>
            <div className=''>
            <p>We ensure that you'll embark on a perfectly planned, <br/>safe vacation at a price you can afford.</p>
            </div>
        </Col>

      </Row>

     
      <Row className='justify-content-center' xs={9} md={6}>
      <Col xs={3} md={3}>
        <div className="box">
            <img src={imagen} alt="Imagen 1" className="img-fluid d-flex pb-5" />
            <h4 className='pb-1 d-flex '>Sign Up</h4>
            <p className="flex-wrap">Completes all the work associated with planning and processing</p>
        </div>
      </Col>
      <Col xs={3} md={3}>
        <div className="box">
            <img src={imagen1} alt="Imagen 1" className="img-fluid d-flex pb-5" />
          <h4 className='pb-1 d-flex'>Worth of Money</h4>
          <p className='text-flex'>After successful access the book from axclusive deals & pricing</p>
        </div>
      </Col>
      <Col xs={3} md={3}>
        <div className="box">
        <img src={imagen2} alt="Imagen 1" className="img-fluid d-flex pb-5" />
          <h4 className='pb-1 d-flex'>Exciting Tavel</h4>
          <p className='text-flex'>Start and explore a wide range of exciting travel experience.</p>
        </div>
      </Col>
    </Row>
      
    </Container>
  );
}

export default About;