import React from "react";
import ReactDOM from "react-dom";

export default class Element extends React.Component {
    
	render() {
		return (
            <div>
                <button type="button" class="btn btn-primary btn-lg btn-block">{this.props.menuDesc}</button>
            </div>
        )
	}
}