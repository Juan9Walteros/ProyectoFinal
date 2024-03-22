
import Turista from '../img/Turista1.png'
import { Dropdown } from 'react-bootstrap';

const Home = () => {
    return(
        <>
        <div className="home  w-137 md: w-275  lg: w-550">
            <div className="cajonpri d-flex">
                <div className="textIz">
                    <div className="startd">
                    <p className='txtH'>Get Started your exciting <span >journey </span>whith us.</p>
                    <div className='descrip'>
                        <p className='parr'>
                            A Team of experienced tourism professionals will provide 
                            you with the best advice and tips for your desire place.
                        </p>
                    </div>
                    <div className='btn2'>
                        <button className='btnDis' type='button'>Discover Now</button>
                        </div>
                    </div>
                </div>
                <div className="imgdere">
                    <img src={Turista} width="630" height="440" alt='...'></img>
                </div>
            </div>
            <div className='discoSearch d-flex align-items-center'> 
            <div className="container"> 
            <div className="row"> 
            <div className="col"> 
            <Dropdown>
      <Dropdown.Toggle className="Drop1" id="dropdown-basic" style={{ backgroundColor: '#FFFFFF', color:'#222222', border:'none'}}>Location</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <p className='ptxt'>Where are you going</p>
            </div> 
            <div className="col text-align-left"> 
            <Dropdown>
      <Dropdown.Toggle className="Drop1" id="dropdown-basic" style={{ backgroundColor: '#FFFFFF', color:'#222222', border:'none'}}>Date
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <p className='ptxt'>Where are you going</p>
            </div> 
            <div className="col"> 
            <Dropdown>
      <Dropdown.Toggle className="Drop1" id="dropdown-basic" style={{ backgroundColor: '#FFFFFF', color:'#222222', border:'none'}}>Guest
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <p className='ptxt'>Where are you going</p>
            </div> 
            <div className="col align-self-center"> 
            <button className="btn3" type="button">Explore Now</button>
            </div> 
            </div> 
            </div> 
            </div>
        </div>
        </>
    )
}

export default Home;