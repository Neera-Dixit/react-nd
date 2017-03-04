import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import cardStore from '../../stores/cardStore';
import cardActions from '../../actions/cardActions';
import Card from './card';

//Card Stack container which displays the cards
export default class CardStack extends Component{

	constructor(props){
		super(props);
		this.state = {cards:[]};
		//this.getCards=this.getCards.bind(this);
	}

	componentWillMount(){
		cardStore.on('cardsFetched',this.getCards);
	}

	componentDidMount(){
		cardActions.fetchCards();
	}

	componentWillUnmount(){
		cardStore.removeListener('cardsFetched',this.getCards);
	}

	getCards = () => {
		this.setState({cards:cardStore.getCards()});
	}

	render(){
		const cards = this.state.cards.map((card,index)=>{
			return <Card key={index} {...card} cards={this.state.cards}/>;
		});

		return (
			<div>
				{cards}
			</div>	
		);
	}
}