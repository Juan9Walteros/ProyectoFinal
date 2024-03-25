import { Card, CardBody,CardText} from "react-bootstrap";
import Slider from "react-slick";
import React from "react";
import Img1 from '../img/Image-2.png' 
import Img2 from '../img/Image-3.png'
import Img3 from '../img/Image-4.png'
import Img4 from '../img/Image-5.png'
import Footer from "../layouts/footer";

const Blog= () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
    };
    return(
        <>
        <div className="principalBlog">
            <div className="seccion1">
                <h1 className="getUp">Get Update with <span>latest blog</span></h1>
            </div> 
            <div className="seccion2">
                <div className="cards7">
                    <Slider {...settings}>
                        <div>
                        <Card className="card7 card">
                            <Card.Img variant="top" src={Img1} />
                            <CardBody>
                                <CardText>
                                    The Amazing Difference a Year Of Travelling.
                                </CardText>
                                <p className="text-body-secondary">July 27, 2021</p>
                            </CardBody>
                         </Card>
                        </div>
                        <div>
                        <Card className="card7 card">
                            <Card.Img variant="top" src={Img2} />
                            <CardBody>
                                <CardText>
                                    Travel for enough, you meet yourself.
                                </CardText>
                                <p className="text-body-secondary">July 27, 2021</p>
                            </CardBody>
                         </Card>
                        </div>
                        <div>
                        <Card className="card7 card">
                            <Card.Img variant="top" src={Img3} />
                            <CardBody>
                                <CardText>
                                The Amazing Difference a Year Of Travelling.
                                </CardText>
                                <p className="text-body-secondary">July 27, 2021</p>
                            </CardBody>
                         </Card>
                        </div>
                        <div>
                        <Card className="card7 card">
                            <Card.Img variant="top" src={Img4} />
                            <CardBody>
                                <CardText>
                                    The Amazing Difference a Year Of Travelling.
                                </CardText>
                                <p className="text-body-secondary">July 27, 2021</p>
                            </CardBody>
                         </Card>
                        </div>
                    </Slider>
                </div>
            </div> 
        </div>
        <Footer/>
        </>
    )
}

export default Blog;