import React, { Component } from 'react';
import Categories from './Categories';
import AddQ from './AddQ'

export default class AddQs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Toggled: true,
            name: "Akila"
        }
    }

    Toggleinfo = () => {
        this.setState({
            Toggled: !this.state.Toggled
        })
    }
    render() {
        return (
            <section>
                <div className="row justify-content-between toggle-heading mt-2 ">
                    <div className="toggle-heading-name ml-5 ">
                        <Categories heading="Add Questions"></Categories>
                    </div>

                    <div className=" mr-5">
                        <span type="button" onClick={this.Toggleinfo} ><i className="fas fa-angle-double-down fa-3x toggle-icon  "></i></span>
                    </div>
                </div>
                <div className="sdcsedc">
                    {this.state.Toggled ? <AddQ/> : null}
                </div>
            </section>
        )
    }
}
