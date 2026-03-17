# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- Overview
  - The challenge
  Users should be able to:

  Complete the form with their details (Name, Email, GitHub).

  Upload an avatar with real-time preview and validation (Max 500KB).

  Receive form validation messages for empty fields or incorrect email formats.

  View a generated conference ticket that dynamically displays their unique info.

  See a responsive design that adapts to mobile and desktop screens.
  - Screenshot
  
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: (https://github.com/mohamedaminebouhachem300-cpu/generator)
- Live Site URL: (https://mohamedaminebouhachem300-cpu.github.io/generator/)

## My process

### Built with

- Built with
    Semantic HTML5 - For accessible and clean structure.

    CSS Custom Properties - For easy management of the design system (colors and fonts).

    Flexbox & CSS Grid - Used for the layout and positioning background decorations.

    Vanilla JavaScript - Used for form validation, the FileReader API, and DOM manipulation.

    Google Fonts - Featuring 'Inconsolata' and 'Righteous'.

### What I learned

One of the coolest things I learned was how to create Gradient Text using CSS. It requires "clipping" the background to the text and making the text fill transparent:

.hero-text h1 {
  background: linear-gradient(to right, var(--orange-500), var(--neutral-0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

I also deepened my understanding of the FileReader API to handle local image uploads without a server:
const reader = new FileReader();

reader.onload = function(e) {
    displayAvatar.src = e.target.result; 
};
reader.readAsDataURL(file);

### AI Collaboration

I worked with Gemini as an AI pair-programmer to build this project.

Debugging: Helped identify pathing issues when my images weren't showing.

Logic: We broke the JavaScript down into three "Missions" (Upload, Validation, and the Ticket Swap).

Formatting: Used AI to ensure the CSS matched the high-fidelity design requirements of the challenge.

## Author

frontend mentor @lhechmilhamdi
