# A portfolio command line programe

This is a command line program that operates from the command line or from a shell that primarily check the balance of token by adding deposits and substracting withdrawals.The program is written in javascript programming language (Node.js framework for server-side programming) and typeScript is a strongly typed programming language that builds on JavaScript.

# Content

- Installation
- Tools Used
- Comments

# Installation

- Visit the github respository [github respository link](https://github.com/Beloved1310/Portfolio_CLI)
- Clone the application programming interface to your Desktop from github.

  > navigate to the **_code_** button on the repository.

  > copy the link and clone using the command _git clone repository url_

  > or using github desktop

  > or download to your local desktop.

- Open the code using any code editor.
- **Include a csv file to the current directory, name "transaction.cv"**

- On terminal

```
$
```

This command install all dependencies to get the program running
```
$ npm install
```

This create a bin folder which contains javascript file from the typescript written code

```
$ npm run build
```

This creates a link between projects to facilitate development in a local environment

```
$ npm link
```


This start the portfolio command line program to change to crypto rate **USD**

```
$ cryptorates 
```

This is the output from the command **cryptorates**
```
$ cryptorates 

Usage: cryptorates-key [options] [command]

Options:
  -h, --help    output usage information

Commands:
  list|l        return the latest portfolio value for that token in USD
  token|t       return the token latest portfolio value  in USD
  date|d        return the token latest portfolio value  in USD
  datetoken|dt  return the token latest portfolio value  in USD
```




- The "l" command
```
$ cryptorates list
```
This return the latest portfolio value per token in USD, given no parameters

- The "t" command
```
$ cryptorates token
```
This return the latest portfolio value per token in USD, given a token 

- The "d" command
```
$ cryptorates date
```
This return the portfolio value per token in USD on that date, given a date

- The "dt" command
```
$ cryptorates datetoken
```
This return the portfolio value of that token in USD on that date, given a date and a token


# Tools Used

- Visual Studio Code Editor
- Node Package Manager packages:
  - axios: makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations
  - colors :  color conversion and manipulation with support for CSS color strings.
  - commander: write code to command line interface..
  - csvtojson: A tool concentrating on converting csv data to JSON with customised parser supporting.
  - inquirer: common interactive command line user interface.
  - typescript:  a language for application scale JavaScript development
 


# Comments

This command line interface can be intergrated to crypto conversion on a command line program.