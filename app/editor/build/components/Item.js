import React, { Component } from 'react';
import styles from './App.css';
import QuoteModel, {QuotesArray} from '../models/QuoteModel';


export default class Quote extends Component {
	constructor( props ){
		super( props );

	this.state={
		Quote : QuotesArray,
		Quote : props.Quote
	}
}

onAddQuoteClick( event)
	{
		//
		console.log('add items clicked')
	}

render() {
	var Quote = this.state.Quote;
	var Quoteitems = this.QuotesArray;

	return (
		<div>
		<div className={styles.header}><h1 className={styles.title}>To Do Quote Application</h1></div>	
			<div className={styles.Quotedisplay}>	
				<h2>Current Shopping Quote</h2>
				<hr />
				<ul><h4>Priority Quote</h4>
				{this.state.Quote.map( (Quote,index) => {
						return <li key={index} data-menu-item-index={index}>{Quote}
							<button>Remove</button></li>;
					})}
				</ul>
				<button onClick={this.onAddQuoteClick}>Add Quote to shopping Quote</button>
				<h1>Completed Quotes from Quote</h1>
				<hr />
				<ul>
				<li></li>
				</ul>
			</div>
		</div>	
		);
	}
}
