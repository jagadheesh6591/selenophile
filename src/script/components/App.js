import React from "react";
import ReactDOM from "react-dom";
import "../vendor/bootstrap/js/bootstrap.min.js";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/style.css";
import "../vendor/jquery/jquery.min.js";

import Hobby from "./hobby.js";
import Element from "./menu/element.js";

export default class AppComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			name: 'jaga',
			hobbies: [
				{
					id: '001',
					description: 'playing chess'
				},
				{
					id: '002',
					description: 'listening music'
				}
			]
		}
	}
	render() {
		return (
			<div>
				<nav class="navbar navbar-inverse">
					<div class="container-fluid">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse"
								data-target="#myNavbar">
								<span class="icon-bar"></span> <span class="icon-bar"></span> <span
									class="icon-bar"></span>
							</button>
							<a class="navbar-brand" href="#">Logo</a>
						</div>
						<div class="collapse navbar-collapse" id="myNavbar">
							<ul class="nav navbar-nav">
								<li class="active"><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Projects</a></li>
								<li><a href="#">Contact</a></li>
								
							</ul>
							<ul class="nav navbar-nav navbar-right">
								<li><a href="#"><span class="glyphicon glyphicon-log-in"></span>
									Login</a></li>
							</ul>
						</div>
					</div>
				</nav>
				<div class="container-fluid text-center">
					<div class="row content">
						<div class="col-sm-2 sidenav">
							/*<p><a href="#">Create New Album</a></p>
							<p><a href="#">Edit the Album</a></p>
							<p><a href="#">Album history</a></p>*/
							<div>
							<Element menuDesc="Create New Album" />
							</div>
							<div>
							<Element menuDesc="Edit the Album" />
							</div>
							<div>
							<Element menuDesc="Album history" />
							</div>
						</div>
					<div class="col-sm-8 text-left">
							<h1>Welcome</h1>
							<p>Album history available here...</p>
							<p>Just getting started...</p>
							<Hobby name={this.state.name} hob={this.state.hobbies} />
						</div>
						<div class="col-sm-2 sidenav">
							<div class="well">
								<p>ADS</p>
							</div>
							<div class="well">
								<p>ADS</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}