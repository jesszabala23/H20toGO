var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "Name",
      message: "What is your name?"
    },
    {
        type: "input",
        name: "Password",
        message: "What is your password?"
      },
    {
      type: "input",
      message: "How many miles do you plan to walk?",
      name: "MilesWalked",
    },
    {
        type: "input",
        message: "How much are you going to pledge per mile?",
        name: "PledgeAmt",
    },
    {
        type: "input",
        message: "Which charity(s) would you like to donate to?",
        name: "Charity",
    },
    {
        type: "list",
        message: "Are you thirsty for change",
        name: "WantChange",
        choices: [
            "Yes",
            "No",
            "Maybe"]
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: [
        "email",
        "phone",
        "social media"]
    }
  ]).then(function(data) {
  
    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Complete!");
  
    });
  });