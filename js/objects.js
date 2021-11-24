// SLOType v0.6 alpha. 2021-11-24 See credits in main file

// define the database lists of content for your own app
// each sring array list contains an undefined number of choices for each category structure

// catl1 featl1 userl1 contxl1 constl1 somethingl1

// 2020-01-04 Upgrade for Type Design Workshop
//catl1 = Context of Application = Easy
//featal1 = Design Principle = Stroke Construction = Advanced
//featl1 = Design Principle = Stroke Contrast = Easy
//userl1 = Type Classification = Easy
//contxl1 = Weight = Medium
//constl1 = Width = Medium
//var1l1 = Slant ***** NEW ***** = Advanced
//somethingl1 = Serendipity = Advanced

// Product or service category
var catl1 = ["Editorial (Print)", "Website (Desktop)", "Mobile (App)"];

var catl2 = [
  "Fashion Magazine (Print)",
  "Poetry Book (Print)",
  "Music Portal (Desktop Website)",
  "Online Newspaper (Desktop Website)",
  "eBook (Mobile App)",
  "Weather (Mobile App)",
];

var catl3 = [
  "Riso Fanzine (Print)",
  "Fashion Magazine (Print)",
  "Poetry Book (Print)",
  "Encyclopedia (Print)",
  "Online Tech Report (Desktop Website)",
  "Music Portal (Desktop Website)",
  "Online Newspaper (Desktop Website)",
  "Sports Portal (Desktop Website)",
  "Retro Game (Mobile App)",
  "Thriller eBook (Mobile App)",
  "Gourmet Meals & Deals (Mobile App)",
  "Weather Forecast (Mobile App)",
];

//featal1 = Design Principle = Stroke Construction = Translation, Rotation, Tranlsation + Rotation, (+Expansion?)
// Unique feature or USP
var featal1 = ["Interrupted"];

var featal2 = ["Running"];

var featal3 = ["Interrupted", "Running", "Running + Interrupted"];

//featl1 = Design Principle = stroke Contrast = Translation, Rotation, Tranlsation + Rotation, (+Expansion?)
// Unique feature or USP
var featl1 = ["Translation"];

var featl2 = ["Rotation"];

var featl3 = ["Translation", "Rotation", "Translation + Rotation"];

// Target audience, Persona or end-users
//userl1 = Type Classification
var userl1 = ["Sans-serif", "Serif", "Cursive"];

var userl2 = [
  "Grotesque (Sans-serif)",
  "Modern (Serif)",
  "Old-Style (Serif)",
  "Cursive (Calligraphic)",
];

var userl3 = [
  "Old-Style (Serif)",
  "Neoclassic (Serif)",
  "Didone (Modern Serif)",
  "Slab Serif (Modern Serif)",
  "Grotesque (Sans-serif Lineal)",
  "Geometric (Sans-serif)",
  "Humanist (Sans-serif Lineal)",
  "Cursive (Calligraphic)",
  "Graphic (Calligraph… er… ish!)",
  "Blackletter (Calligraphic)",
];

// Context of use
//contxl1 = Weight
var contxl1 = ["Regular", "Bold"];

var contxl2 = ["Light", "Regular", "Bold", "Black"];

var contxl3 = [
  "Thin",
  "Light",
  "Regular",
  "Medium (Book)",
  "Bold",
  "Extra-bold",
  "Black",
];

// Challenges or constraints to the brief
//constl1 = Width
var constl1 = ["Condensed", "Medium (Normal)", "Expanded"];

var constl2 = ["Condensed", "Medium (Normal)", "Expanded"];

var constl3 = [
  "Ultra-Condensed",
  "Condensed",
  "Medium (Normal)",
  "Expanded",
  "Ultra-Expanded",
];

// NEW
//var1l1 = Slant ***** NEW *****
var varl1 = ["Roman (Upright)"];

var varl2 = ["Roman (Upright)", "Slanted"];

var varl3 = ["Backslant", "Roman (Upright)", "Italic", "Slant"];

// Emergence or Monty-pyton[esque] feature to promote creative outlets
var somethingl1 = ["Vanilla"];

var somethingl2 = ["Use two or more slant properties"];

// set a random number of parameters to ignore…
// redo the whole function!!!
let rn;
rn = Math.floor(Math.random() * 5) + 1;
// setInterval( function() {
//     rn = ( Math.floor( Math.random()*5 ) +1 );
//     console.log("rn", rn);
//     somethingl3[6] = "Ignore "+rn+" of the previous parameters";
// }, 5000);

var somethingl3 = [
  "Go back to the future",
  "Imagine the letters/strokes as disconnected shapes",
  "Explore error or accidents",
  "Draw as music",
  "Draw as your favourite colour",
  "Make positive(s) from negative(s)",
  "Ignore 6 of the previous parameters",
  "Do the opposite of what you’re told",
  "Redraw your previous drawing from memory",
  "Chevron" /* Disguised type property */,
  "Nothing to see here… move along…",
  "Cheat as much as you like",
  "Speed up",
  "Slow down",
  "Hack your drawing instrument" /* Clues for worskhop only */,
  "Glue something together",
  "Draw with the other hand… and then why stop there?",
  "Season your letters",
  "Steal from your left",
  "Be extravagant" /* >> be loud? */,
  "Be quiet",
  "Be loud",
  "Draw a love letter to someone",
  "Draw from the middle out" /* improve the english on this one */,
  "Take a pair of scissors and cut out what you don’t like",
  "Hello my name is Frankenstein",
];

//
