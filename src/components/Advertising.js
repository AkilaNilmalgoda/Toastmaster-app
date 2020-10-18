import React, { Component } from 'react'
import MFSCLogo from '../images/MFSC logo.png'

export default class Advertising extends Component {
    render() {
        return (
            <section>

                <div className="row mx-auto d-flex justify-content-around advert-background" >
                    
                    
                    <img className="ad-logo" src={MFSCLogo} alt="MFSCLogo"/>
                       
                    <h4 className="col-md-5 col-sm-12 mx-auto text-wrap" >Join Moscow Free Speakers Club</h4>
                    
                    <h4 className="col-md-3 col-sm-12 mx-auto text-center  text-wrap"> Every other Monday @ 19.00</h4>
                    <h4 className="col-md-3 col-sm-12 mx-auto text-wrap" >moscowfreespeakers.ru</h4>
                    
                </div>              
            
            </section>
            
        )
    }
}
