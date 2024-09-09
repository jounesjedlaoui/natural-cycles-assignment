# Natural Cycles Frontend Challenge - Jounes Jedlaoui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Live Version

You can find a live version of the application [here](https://jounesjedlaoui.github.io/natural-cycles-assignment/)

## Installation

Clone the repository and run `npm install` to install all dependencies.

## Development server

Run `ng serve` for a local dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code formatting

Install *prettier* by running `npm install --save-dev --save-exact prettier`
Run `prettier . --write` to apply the formatting rules.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
To publish to GitHub Pages. Paste the contents of the `dist/` directory into the `assets/` directory and add `/natural-cycles-assignment/assets` to the source path of the script-tags.
Then publish by pushing to the GitHub Pages branch.


# Optional Goals

I believe I succeded in achieving the goal of the challenge, however there is always room for improvement. 

Before publishing this to a production environment, the implementation of __Unit-Tests__ and __User-Tests__ would be advisable such as experimenting with very high and low window dimensions to see if the countdown-title can break out of the window or become wholly unreadable.\
As well as ensuring that the Input Elements are accessible even on very unusual screens.

Testing the solution on a variety of __different devices and browsers__ is also important, since not only do screen resolutions vary, but different platform rules, like the sizing of input elements on iOS, and browser interpretations can have unexpected results.
( This was tested on iOS, Android, Chrome and Firefox on Windows 11 and Safari. )

One additional thing, that could be improved, but seemed a bit bloated for this simple solution, would be to handle the countdown with a state management module like RxJS instead of using the @Input and @Output directives. Especially if this were to be used in a larger app, where additional components would need access to the current state of the countdown.




