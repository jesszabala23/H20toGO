var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      message: "How many miles do you plan to walk?",
      name: "stack",
    },
    {
        type: "input",
        message: "How much are you going to pledge per mile?",
        name: "stack",
    },
    {
        type: "input",
        message: "Which charity(s) would you like to donate to?",
        name: "stack",
    },
    {
        type: "list",
        message: "Are you thirsty for change",
        name: "stack",
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
        "phone"
  
      ]
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