import React from "react";
import Slider from "react-slick";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import Roma from '../img/rome.png';
import London from '../img/london2.png';
import Osaka from '../img/osaka.png';
import Palmas from '../img/Plameras ne.png';
import Aviones from '../img/Aviones.png';

const Tour= () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
    };
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
    };
    return(
        <>
        <div className="Tour">
        <img className="Palmas" src={Palmas} alt="..." />
            <div className='inter2'>
                <div className="txtexclusive2">
                    <div className="title3">
                        <h1 className="txtE3">Best <span>vacation plan</span></h1>
                    </div>
                    <div>
                        <p className="txtD3">Plan your perfect vacation with our travel  agency. Chose <br />amoung hundresds of all-inclusive offers!</p>
                    </div>
                </div>
                <div className="conCards">
                <Slider {...settings}>
                    <div>
                        <Card className="card3">
                            <Card.Img className="img-fluid" src={Roma} alt="..." style={{width:'369px', height:'327px', borderRadius:'16px'}}/>
                            <CardBody>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <CardTitle className="cardT1">Rome, Itaky</CardTitle>
                                        </div>
                                        <div className="col-6">
                                            <p className="textT1">$5,42k</p>
                                        </div>
                                        <div className="col-6">
                                        <p className="card-text"><i class="bi bi-cursor-fill"></i><small className="textm text-body-secondary" > 10 Days Trip</small></p>
                                        </div>
                                        <div className="col-6">
                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-star-fill" style={{color:'#ffc107'}}></i> 4.8</small></p>
                                        </div>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card className="card3">
                            <Card.Img className="img-fluid" src={London} alt="..." style={{width:'369px', height:'327px', borderRadius:'16px'}}/>
                            <CardBody>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <CardTitle className="cardT1">London, UK</CardTitle>
                                        </div>
                                        <div className="col-6">
                                            <p className="textT1">$2,42k</p>
                                        </div>
                                        <div className="col-6">
                                        <p className="card-text"><i class="bi bi-cursor-fill"></i><small className="textm text-body-secondary" > 07 Days Trip</small></p>
                                        </div>
                                        <div className="col-6">
                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-star-fill" style={{color:'#ffc107'}}></i> 4.7</small></p>
                                        </div>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card className="card3">
                            <Card.Img className="img-fluid" src={Osaka} alt="..." style={{width:'369px', height:'327px', borderRadius:'16px'}}/>
                            <CardBody>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <CardTitle className="cardT1">Osaka,Japan</CardTitle>
                                        </div>
                                        <div className="col-6">
                                            <p className="textT1">$5,42k</p>
                                        </div>
                                        <div className="col-6">
                                        <p className="card-text"><i class="bi bi-cursor-fill"></i><small className="textm text-body-secondary" > 10 Days Trip</small></p>
                                        </div>
                                        <div className="col-6">
                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-star-fill" style={{color:'#ffc107'}}></i> 4.8</small></p>
                                        </div>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
        <div className="People">
            <img className="aviones" src={Aviones} alt="..."/>
            <div className="inter3">
                <div className="txt4">
                <h1 className="txtE3">What people say <span>about us.</span></h1>
                <p className="text-secondary">Our Clients send us bunch of smilies with our services and we love them.</p>

                </div>
                <div className="concard4">

                    <Slider {...settings2}>
                   
                    <div>
                        <Card className="card4">
                            <CardBody>
                                <div className="txt5">
                                <p className="p1"> "On the Windows talking painted pasture yes its <br />express parties use. Sure last upon he same as<br />knew next. Of believed or diverted no."</p>
                                </div>
                                <div className="txt6">
                                    <p className="p1"><b>Mike Taylor</b></p>
                                    <p className="p2"> Lahore, Pakistan</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card className="card4">
                            <CardBody>
                                <div className="txt5">
                                <p className="p1"> "On the Windows talking painted pasture yes its <br />express parties use. Sure last upon he same as<br />knew next. Of believed or diverted no."</p>
                                </div>
                                <div className="txt6">
                                    <p className="p1"><b>Chris Thomas</b></p>
                                    <p className="p2"> CEO of Red button</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    </Slider>
                </div>
            </div>

        </div>
        </>
    )
}

export default Tour;