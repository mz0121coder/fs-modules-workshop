# Workshop - Working with files

## 🎯 Workshop objectives

- ☑️ Read and write to files using the `fs` module
- ☑️ Use `uuid` (a third-party package) to generate unique ids
- ☑️ Serialize and deserialize data using the `JSON.parse` and `JSON.stringify` methods

<br>

## 💼 The brief

Chris wants to build an inspirational quotes app so his words of wisdom are never lost and easily accessible for future bootcampers. 😬

Your job isn't to build the entire app right now, but you will be coding the app's core functionality, ready to be imported and used/reused later.

The app will store a list of Chris's quotes in a JSON file. Each quote will have the following properties:

- id (String) - a unique id generated by the `uuid` package
- quoteText (String) - the quote contents/text

In this workshop, you'll build a total of five different helper functions which will enable the user to:

- Add/save a new quote
- Get a random quote
- Get all quotes
- Edit a quote
- Delete a quote

<br>

## 🎫 Ticket 1 - Getting familiar with the starter files

This project has already been initialized for you using the `npm init` command.

Open the `package.json` file, and you'll notice the following dependencies:

- uuid - the package you'll use to generate unique ids
- jest - a package/devDependency which allows us to check your solutions with automated tests

Now would be an excellent time to install these packages and their dependencies.

Run `npm install` in the terminal.

You'll notice the following files created for you at the root of your project:

- `quote.js` - where the helper functions will be located
- `quotes.json` - where the list of quotes will be stored
- `.gitignore` - tells git what files to ignore

We've initialized `quotes.json` with an empty array.

💡 In your `.gitignore` file, we've added "node_modules" as you don't want all those files being pushed up to GitHub.

🧪 Notice the `__tests__` folder in the root of your project - this can be left alone.

<br>

## 🎫 Ticket 2 - Creating functionality for quotes

<br>

### 🎫 Ticket 2a - Getting familiar with quotes.js

Open `quote.js`. In this file, a Native (core) module (`fs`) and a npm package (`uuid`) have already been imported. E.g.

```js
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
```

The following variable has been declared and initialized.

```js
const fileName = "quotes.json";
```

💡 As you may have already figured, `fileName` is the name of your JSON data file (where the quotes will be stored).

<br>

### 🎫 Ticket 2b - Add/save a new quote ✅

Inside `quote.js` find the `addQuote` function.

The function should:

- take in quoteText (String) 
- create a quote object
- assign a unique id to the quote object (using a v4 uuid)
- read/parse all quote objects from `quotes.json`
- save the quote object to the `quotes.json` file at the end of the array
- return the newly created quote object

💡 Here's an example of the quote object structure.

```js
{
  id: "949355ba-7916-441d-97b5-3ebd946da8c1",
  quoteText: "This is a quote"
}
```

🧪 This ticket has an automated test. Once you think your solution works run the following command:

```
npm run test-ticket-2b
```

If all tests pass, commit your work and move on to the next ticket. ✔️

<br>

### 🎫 Ticket 2c - Get all quotes ✅

Inside `quote.js` find the `getQuotes` function.

The function should:

- not take in any arguments ✅
- read/parse all quote objects from `quotes.json` ✅
- return an array of all existing quote objects ✅

🧪 This ticket has an automated test. Once you think your solution works run the following command:

```
npm run test-ticket-2c
```

If all tests pass, commit your work and move on to the next ticket. ✔️

<br>

### 🎫 Ticket 2d - Get a random quote

Inside `quote.js` find the `getRandomQuote` function.

The function should:

- not take in any arguments ✅
- read/parse all quote objects from `quotes.json` ✅
- return a single randomly selected quote object 

🧪 This ticket has an automated test. Once you think your solution works run the following command:

```
npm run test-ticket-2d
```

If all tests pass, commit your work and move on to the next ticket. ✔️

<br>

### 🎫 Ticket 2e - Edit a quote

Inside `quote.js` find the `editQuote` function.

The function should:

- take in an `id` (String) as the 1st argument and `quoteText` (String) as the 2nd
- read/parse all quote objects from `quotes.json`
- find the existing quote object with a matching id
- update and save the matching quote object so that it contains the new `quoteText`
- return null if there is no matching id
- return the edited quote object if a matching id is found

🧪 This ticket has an automated test. Once you think your solution works run the following command:

```
npm run test-ticket-2e
```

If all tests pass, commit your work and move on to the next ticket. ✔️

<br>

### 🎫 Ticket 2f - Delete a quote

Inside `quote.js` find the `deleteQuote` function.

The function should:

- take in a single argument `id` (String)
- read/parse all quote objects from `quotes.json`
- find the existing quote object with a matching id
- remove the matching quote object
- save the new list of quote objects to `quotes.json`
- return null if there is no matching id
- return the deleted quote object if a matching id is found

🧪 This ticket has an automated test. Once you think your solution works run the following command:

```
npm run test-ticket-2f
```

If all tests pass - congratulations, you've finished! Commit your work and push it up to GitHub. ✔️

<br>

## 🥇 You've finished!

🔍 Take another look at your code and see if you can refactor anything.

🧪 If you do make any changes while refactoring, you can run all tests at once using `npm t`.

🚁 Once you've done that, you could check to see if fellow bootcampers need help.
