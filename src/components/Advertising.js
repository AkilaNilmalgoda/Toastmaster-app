import React, { Component } from 'react'
//import MFSCLogo from '../images/MFSC logo.png'
//import Pic1 from '../images/Untitled.jpg'
import MFSCgif from '../images/MFSC gif.gif'
import WearAMask from '../images/WearAMask.gif'
//import Pic2 from '../images/Untitled1.jpg'
import Pic3 from '../images/Untitled2.jpg'
import {Carousel} from 'react-bootstrap';


export default class Advertising extends Component {
    render() {
        return (
            <section>

                <div className="row mx-auto d-flex justify-content-around fixed-bottom advert-background" >
                    <Carousel 
                    prevIcon={null} 
                    nextIcon={null}   
                    indicators={false} 
                    fade={true}
                    autoPlay={true}
                    interval={12222}
                    >
                        <Carousel.Item  > 
                            <img
                                className="d-block w-100"
                                src={WearAMask}
                                alt="First slide"
                               
                            />
                            

                        </Carousel.Item>
                        <Carousel.Item interval={1222}>
                            <img
                                className="d-block w-100"
                                src={MFSCgif}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Pic3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>              
            
            </section>
            
        )
    }
}
