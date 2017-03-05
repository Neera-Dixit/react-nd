import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import cardStore from '../../stores/cardStore';
import cardActions from '../../actions/cardActions';
import Card from './card';

//Card Stack container which displays the cards
export default class CardStack extends Component{

	constructor(props){
		super(props);
		this.state = {cards:[],clickedCard:-1};
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

	handleCardClick = (cardId) => {
		this.setState({clickedCard:cardId});
	}

	getCards = () => {
		this.setState({cards:cardStore.getCards()});
	}

	render(){
		const cards = this.state.cards.map((card,index)=>{
			return <Card key={index} {...card} handleCardClick={this.handleCardClick} cards={this.state.cards} expand={this.state.clickedCard===card.id?true:false}/>;
		});

		return (
			<div>
				{cards}
			</div>	
		);
	}
}