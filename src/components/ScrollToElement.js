
import React from 'react';
import { Fragment } from 'react';


export default class ScrollToElement extends React.Component {

    constructor() {
        super();
        this.refDiv = React.createRef();
    }

    scrollToRef = () => {
        //window.scrollTo(0, this.refDiv.current.offsetTop);
        window.scrollTo({
            top: this.refDiv.current.offsetTop,
            left: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <Fragment>
                <button onClick={() => this.scrollToRef()}>Scroll To Red</button>
                <div style={{width: "500px", height: "500px", backgroundColor: "green"}}>This is 1</div>
                <div style={{width: "500px", height: "500px", backgroundColor: "white"}}>This is 2</div>
                <div style={{width: "500px", height: "500px", backgroundColor: "red"}} ref={this.refDiv}>This is 3</div>
                <div style={{width: "500px", height: "500px", backgroundColor: "white"}}>This is 2</div>
            </Fragment>
        );
    }
}