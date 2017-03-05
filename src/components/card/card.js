import React,{Component} from 'react';
import haversine from 'haversine';

//Card Component which displays user information
export default class Card extends Component{

	constructor(props){
		super(props);
	}

	handleCardClick = () => {
		this.nearestUsers=this.findClosestUsers(this.props,this.props.cards);
		this.props.handleCardClick(this.props.id);
	}

	calculateDistance(start,end){
		//haversine formulae to calcluate the distance between two points in KM
		return haversine(start,end);
	}

	//Method which finds the Nearest three Users of a user
	findClosestUsers(card,cards){
		const startGeo = card.address.geo;
		const start = {latitude : startGeo.lat,longitude : startGeo.lng};
		const distanceMap = new Map();
		const nearestUsers = [];

		cards.forEach((curCard,index)=>{
			const endGeo = curCard.address.geo;
			const end = {latitude : endGeo.lat,longitude : endGeo.lng};
			if(card.id !== curCard.id){
				distanceMap.set(curCard.name,parseInt(this.calculateDistance(start,end)));
			}

		});

		/*
		  distanceMap key is user name and value is haversinedistance between himself 
		  and one of other users .Sort map by value and return first three users
		*/
		var distanceMapAsc = new Map([...distanceMap.entries()].sort((a,b) => a[1] > b[1]));

		let count=0;
		for(let user of distanceMapAsc){
			nearestUsers.push(<li key={count}>{user[0]} : {user[1]} Km</li>);
			count++;
			if(count === 3){
				break;
			}
		}
		return nearestUsers;
	}

	render(){

		const {name,email,address,website}=this.props;
		const {suite,street,city,zipcode} = address;
		return (
			<div className="card" onClick={this.handleCardClick}>
				<div className="name">
					<label>User name : {name}</label>
				</div>
				<div className="email">
					<label>User email : {email}</label>
				</div>
				<div className="cardOpen" style={this.props.expand?{}:{display:'none'}}>
					<div className="website">
						<label>Website : <a href={website} target="_blank">{website}</a></label>
					</div>
					<div className="address">
						<label>Address : {`${suite},${street},${city},${zipcode}`}</label>
					</div>
					<div>
						<label>Nearest Users</label>
						<ul className="nearestUsers">
						 {this.nearestUsers}
						</ul>
					</div>
				</div>
			</div>	
		);
	}
}