import Dispatcher from '../dispatcher/index';

let cardActions = {

	//Action to fetch cards
	fetchCards : ()=>{
		Dispatcher.dispatch({
			actionType : 'FETCHCARDS'
		});

	}
}

export default cardActions;