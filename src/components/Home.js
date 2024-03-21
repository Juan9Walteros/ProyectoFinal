
import Turista from '../img/Turista1.png'

const Home = () => {
    return(
        <>
        <div className="home ">
            <div className="cajonpri d-flex justify-content-center">
                <div className="textIz">
                    <div className="startd">

                    </div>
                    <div className='descrip'>

                    </div>
                    <div className='btnDicover'>
                        <h4 className='pb-4'> Get Started your  exciting </h4>
                    </div>
                </div>
                <div className="imgdere w-137 md: w-275  lg: w-550">
                    <img src={Turista}></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;