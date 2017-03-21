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
		finished : [],
	
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

	onQuoteRemove( event){	
		var itemData = $(event.target).parent().attr('data-item-id');
		var finished = _.clone(this.state.finished);
		var Quotes = _.clone(this.state.Quote);
		var removeQuotes = _.without(Quotes, itemData );
		finished.push(itemData);

		this.setState({
			Quote : removeQuotes,
			finished: finished
		});

	}

	onQuoteMoveUpClick( event){
		var item = $(event.target).parent().attr('data-item-id');
		var Quotes = _.clone(this.state.Quote);
		var MoveUpPos = Quotes;
		console.log('Quote value for moveup', item);
		Quotes.push(MoveUpPos)

		this.setState()
		{
		Quote : Quotes
		}

	}

	onQuoteMoveDown( event){
	//To do
	}



	render() {
	
		console.log('Quote array ref',Quote);

		return (
		<div className={styles.container}>
				<div>
		<div className={styles.header}><h1 className={styles.title}>Cioran Box of Suffering</h1></div>	
			<div className={styles.itemdisplay}>	
				<h2>Mood</h2>
				<hr />
				<ul className={styles.item}><h4>Priority Quote</h4>
				{this.state.Quote.map( (Quote,index) => {
						return <li key={index} value={index} data-item-id={Quote}>
						{index + 1} {Quote}<br/>
						<button onClick={this.onQuoteMoveUpClick}>Move Up</button><button>Move Down</button><button onClick={this.onQuoteRemove}>X</button>
						</li>;
					})}
				</ul>
				<button onClick={this.onAddQuoteClick}>Add Quote to shopping Quote</button>
				<h1>Completed Quotes from Quote</h1>
				<hr />
				<ul>
				{this.state.finished.map( (finished,index) => {
						return <li key={index} value={index} data-item-id={finished}>{finished}</li>;
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