import React, { Component } from 'react';
import styles from './App.css';
//import Quote from './Quote';
import QuoteModel, {QuotesArray} from '../models/QuoteModel';
import _ from 'lodash';
import $ from 'jquery';



export default class App extends Component {
	constructor( props ){
		super( props );

		this.state = {
		Quote : QuotesArray,
		QuoteProps : props.Quote,
		ChosenQuote : [],
	
		};
	}

	onChange(){
		this.props.onChange( this.state );
		this.forceUpdate();
	}

	getAttrForDomElement( element, attrName ){
	var $element = $( element );
	var $elementQuoteId = $element.attr( attrName ) ? $element : $element.parent('['+attrName+']');
	
	return $elementQuoteId.attr( attrName );
}

	getQuoteIdForDomElement( element ){
	
	return getAttrForDomElement( element, 'data-item-id' );	
	}

	onAddQuoteClick( event)
	{
		var Quotes = _.clone(this.state.Quote);
		Quotes.push('New Quote'); //*TO DO create new instance of Quote Model

		this.setState({
			Quote: Quotes
		});
	}

	onQuoteClick( event){
		console.log('event fired for quote remove');
		var itemData = $(event.target).parent().attr('data-item-id');
		var ChosenQuote = _.clone(this.state.ChosenQuote);
		var Quotes = _.clone(this.state.Quote);
		
		
		ChosenQuote.push(itemData);

		this.setState({
			Quote : removeQuotes,
			ChosenQuote: ChosenQuote
		});

	}

	render() {


		return (
		<div className={styles.container}>
				<div>
		<div className={styles.header}><h1 className={styles.title}>E.M Cioran Box of Suffering</h1></div>	
			<div className={styles.itemdisplay}>	
				<h2>Mood</h2>
				<hr />
				<ul className={styles.item}><h4>Find Your Quote</h4>
				{this.state.Quote.map( (Quote,index) => {
						return <li key={index} onClick={this.onQuoteClick} value={index} data-item-id={Quote}>{Quote}<br/>
						</li>;
					})}
				</ul>
				<h1>Your Quotes</h1>
				<hr />
				<ul>
				{this.state.ChosenQuote.map( (ChosenQuote,index) => {
						return <li key={index} value={index} data-item-id={ChosenQuote}>{ChosenQuote}</li>;
					})}
				</ul>
			</div>
		</div>
			<div className={styles.itemeditor}>
				<h2>Edit Content</h2>	
				<hr />
			</div>
	</div>
		);
	}
}