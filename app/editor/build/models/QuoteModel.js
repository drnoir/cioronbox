import React, { Component } from 'react';

export default class QuoteModel{
	constructor( Quote, priority ){
		priority = priority || {};

		this.Quote =Quote;
		
		//set default values 
		this.priority= null;
		this.Quoteitems = null;
	}
}
//set values for arrays for populating interactive elements
export const QuotesArray = ['Bananas','Apples','Cereal','Bread','Tea','Milk','Curry Sauce','Cat Food'];