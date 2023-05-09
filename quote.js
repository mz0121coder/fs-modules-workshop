import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

const fileName = 'quotes.json';
const quotes = [];

export async function addQuote(quoteText) {
	// generate random quote with unique id
	const quote = { id: uuidv4(), quoteText: quoteText };

	const data = JSON.parse(await fs.readFile(fileName, 'utf-8'));

	const newQuotes = [...data, quote];

	const quotesJSON = JSON.stringify(newQuotes);

	// write quotes data
	await fs.writeFile(fileName, quotesJSON, 'utf-8');
	console.log(quotesJSON);
	return quote;
}
addQuote('Five four three two one');
// addQuote('TEST2');

export async function getQuotes() {
	// read all quotes
	return JSON.parse(await fs.readFile(fileName, 'utf-8'));
}

export async function getRandomQuote() {}

export async function editQuote(id, quoteText) {}

export async function deleteQuote(id) {}
