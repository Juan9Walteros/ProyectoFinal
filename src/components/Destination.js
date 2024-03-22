import React from "react";
import Slider from "react-slick";
import { Card, CardTitle } from "react-bootstrap";
import Madrid from '../img/madrid.png'
import Firenze from '../img/Firenze.png'
import Paris from '../img/paris.png'
import London from '../img/london.png'


const Destination= () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
    };
    return(
        <>
        <div className="Destination">
            <div className='inter1'>
                <div className="txtexclusive ">
                    <div className="title">
                        <h1 className="txtE">Exclusive <span>deals & discounts</span></h1>
                    </div>
                    <div>
                        <p className="txtD">Discover pur fantastic early booking discounts <br />& start planning your journey</p>
                    </div>
                </div>
                <div className="conCards">
                <Slider {...settings}>
                    <div>
                    <Card className="card1">
                        <Card.Img className="img-fluid" variant="top" src={Madrid} style={{width:'270px', height:'290px', borderRadius:'8px'}} alt="..."/>
                        <Card.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <CardTitle>Madrid</CardTitle>
                                    </div>
                                    <div className="col-6">
                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-star-fill" style={{color:'#FA7436'}}></i> 4.8</small></p>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-text"><small className="text-body-secondary"> <i className="bi bi-geo-alt-fill"></i> Spain</small></p>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <p className="card-text"><small className="textS text-body-secondary"><del>$950</del></small></p>
                                        <p className="cardD card-text"><small> $850</small></p>
                                    </div>

                                </div>

                            </div>
                            </Card.Body>
                            </Card>
                    </div>
                    <div>
                    <Card className="card1">
                        <Card.Img className="img-fluid" variant="top" src={Firenze} style={{width:'270px', height:'290px'}} alt="..."/>
                        <Card.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <CardTitle>Firenze</CardTitle>
                                    </div>
                                    <div className="col2 col-6">
                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-star-fill" style={{color:'#FA7436'}}></i> 4.5</small></p>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-text"><small className="text-body-secondary"> <i className="bi bi-geo-alt-fill"></i> Italy</small></p>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <p className="card-text"><small className="textS text-body-secondary"><del>$850</del></small></p>
                                        <p className="cardD card-text"><small> $750</small></p>
                                    </div>

                                </div>

                            </div>
                            </Card.Body>
                            </Card>
                    </div>
                    <div>
                    <Card className="card1">
                        <Card.Img className="img-fluid" variant="top" src={Paris} style={{width:'270px', height:'290px'}} />
                        <Card.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <CardTitle>Paris</CardTitle>
                                    </div>
                                    <div className="col2 col-6">
                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-star-fill" style={{color:'#FA7436'}}></i> 4.4</small></p>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-text"><small className="text-body-secondary"> <i className="bi bi-geo-alt-fill"></i> France</small></p>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <p className="card-text"><small className="textS text-body-secondary"><del>$699</del></small></p>
                                        <p className="cardD card-text"><small> $599</small></p>
                                    </div>

                                </div>

                            </div>
                            </Card.Body>
                            </Card>
                    </div>
                    <div>
                    <Card className="card1">
                        <Card.Img className="img-fluid" variant="top" src={London} style={{width:'270px', height:'290px'}} />
                        <Card.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <CardTitle>London</CardTitle>
                                    </div>
                                    <div className="col2 col-6">
                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-star-fill" style={{color:'#FA7436'}}></i> 4.8</small></p>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-text"><small className="text-body-secondary"> <i className="bi bi-geo-alt-fill"></i> UK</small></p>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <p className="card-text"><small className="textS text-body-secondary"><del>$950</del></small></p>
                                        <p className="cardD card-text"><small> $850</small></p>
                                    </div>

                                </div>

                            </div>
                            </Card.Body>
                            </Card>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
        </>
    )
}

export default Destination;