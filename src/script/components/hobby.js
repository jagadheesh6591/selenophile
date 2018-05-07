import React from "react";
import MyHobby from "./myhobby.js"

export default class Hobby extends React.Component { 
    render() {
        var hobbies = this.props.hob.map(function(myhobby){
            return(
                <MyHobby id={myhobby.id} desc={myhobby.description}>{myhobby.description}</MyHobby>
            )
        });
        return (
            <div>
              <h1>{this.props.name}s hobbys</h1>
              {hobbies}
            </div>
        )
    }

}