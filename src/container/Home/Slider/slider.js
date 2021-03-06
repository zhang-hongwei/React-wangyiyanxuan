import React from "react";
import "./slider.less"
import ReactSwipe from 'react-swipe';
export default class Slider extends React.Component{
    constructor(){
        super();
        this.state={index:0}
    }
    render(){
        let sliderOptions={
            continuous:true,
            auto:1000,
            callback:(index)=>{
                this.setState({index});
            }
        }
        return(
                <div className="carousel-wrapper">
                    {
                        this.props.sliders.length>0?<ReactSwipe className="carousel" swipeOptions={sliderOptions}>
                            {
                                this.props.sliders.map((item,index)=>(
                                    <li className="slider" key={index}>
                                        <img src={item} alt=""/>
                                    </li>
                                ))
                            }
                        </ReactSwipe>:null
                    }
                </div>
        )
    }
}