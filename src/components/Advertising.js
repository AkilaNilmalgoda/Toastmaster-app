import React, { Component } from 'react'
//import MFSCLogo from '../images/MFSC logo.png'
//import Pic1 from '../images/Untitled.jpg'
import MFSCgif from '../images/MFSC gif.gif'
import WearAMask from '../images/WearAMask.gif'
//import Pic2 from '../images/Untitled1.jpg'
import TMMain from '../images/TM Main.gif'
//import {Carousel} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel' 

export default class Advertising extends Component {
    render() {
        return (
            <section>

                <div className="row  d-flex justify-content-around fixed-bottom advert-background " >
                    <Carousel 
                    prevIcon={null} 
                    nextIcon={null}   
                    indicators={false} 
                    fade={true}
                    autoPlay={true}
                    interval={12000}
                    
                    >
                        <Carousel.Item
                        interval={2111}
                         > 
                            <img
                                className="d-block  "
                                src={TMMain}
                                alt="First slide"
                                
                                
                               
                            />
                            

                        </Carousel.Item>
                        <Carousel.Item 
                        
                        >
                            <img
                                className="d-block "
                                src={MFSCgif}
                        
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src={WearAMask}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>              
            
            </section>
            
        )
    }
}
