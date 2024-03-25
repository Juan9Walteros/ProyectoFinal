import React from "react"
import Logo from '../img/Logo.png'
import Facebook from '../img/Facebook Icon.png'


const Footer = () => {
    return(
        <div className="principalFooter">
            <div className="interFooter">
                <div className="redes">
                    <img  src={Logo}  alt="" />
                    <div>
                        <p className="txtP text-secondary">Book  your trip in minute, get  all  Control for much longer.</p>
                    </div>
                    <div className="conBtn">
                        <button className="btn7 btn" type="button"><img src={Facebook} alt="..."/></button>
                        <button className="btn8 btn" type="button"><i class="bi bi-instagram"></i></button>
                        <button className="btn7 btn" type="button"><i class="bi bi-twitter"></i></button>
                    </div>
                </div>
                <div className="conInfo">
                    <div>
                        <h5 className="h5">Company</h5>
                        <div>
                        <p className="pInfo text-secondary">About</p>
                        <p className="pInfo text-secondary">Careers</p>
                        <p className="pInfo text-secondary">Logistic</p>
                        <p className="pInfo text-secondary">Privacy & Policy</p>
                        </div>
                        
                    </div>
                    <div>
                        <h5 className="h5">Contact</h5>
                        <div>
                        <p className="pInfo text-secondary">Help/FAQ</p>
                        <p className="pInfo text-secondary">Press</p>
                        <p className="pInfo text-secondary">Affilates</p>
                        </div>
                        
                    </div>
                    <div>
                        <h5 className="h5">More</h5>
                        <div>
                        <p className="pInfo text-secondary">Press Centre</p>
                        <p className="pInfo text-secondary">Our Blog</p>
                        <p className="pInfo text-secondary">Low dare tips</p>
                        </div>   
                    </div>
                    </div>
        </div>
        <hr className="hr-style"></hr>
        <div className="finalF">
        <div><p className="text-secondary">Copyright, Trabook 2022. All rights reserved.</p></div>
        <div><p className="text-secondary">Terms & Conditions</p></div>
        </div>
    </div>
    )
}
export default Footer;