import React from "react";

export default class MyHobby extends React.Component{
    render() {
        return (
        <div>
            <h2>{this.props.id}</h2>
            {this.props.desc}
        </div>
        )
    }

}