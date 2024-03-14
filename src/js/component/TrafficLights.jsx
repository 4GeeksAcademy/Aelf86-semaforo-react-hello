import React from "react";
import { container } from "webpack";

export default class TrafficLights extends React.Component {

    render() {
        return<div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className="red light"></div>
                <div className="yellow light"></div>
                <div className="green light"></div>
            </div>
        </div>;


    }
}

