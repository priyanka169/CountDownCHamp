import React, { Component } from 'react';
class Clock extends Component {
	constructor(props) {
		super(props);
		this.state= {
			days: 0,
			hours: 0,
			minutes: 0,
			sec:0
		}
	}
	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}
	leading0(num) {
		return num < 10? '0'+num : num;
	}
	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		const sec = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor(time/(1000*60*60)%24);
		const days = Math.floor(time/(1000*60*60*24));
		this.setState({days, hours, minutes, sec })
	}
	render(){
		return(
			<div>
				<div  className="clock-days">{this.leading0(this.state.days)} days</div>
				<div className="clock-hour">{this.leading0(this.state.hours)} hours</div>	
				<div className="clock-minute">{this.leading0(this.state.minutes)} minutes</div>	
				<div className="clock-sec">{this.leading0(this.state.sec)} seconds</div>					
			</div>
		);
	}
}
export default Clock;
