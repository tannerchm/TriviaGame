$(document).ready(function() {
    // document.getElementById("#quiz").style.visibility = "hidden";
    
// <!-- Start Page (whatever that is) -->
// var startScreen = function() {
//     $("button-start").click(function() {
//         $("#start").toggle();
//     })
// }
// <!-- Initialize trivia game -->
var hidden = $("#quiz").toggle;


$("#btn-danger").click(function() {
    $("#quiz").show(1000);
    $("#start").on("click", stopwatch.start);
    var intervalId;

function decrement() {
     number--;
var clockRunning = false;
var stopwatch = {
  time: 0,
  reset: function() {
    stopwatch.time = 45;
    $("h2").text("00:45");
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
  },

  count: function() {
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
}
// function gameplay () {
    // $("#button-start").click(function() {
    // for (i = 0; i < triviaQuestions.length; i++) { 
    //     text += triviaQuestions[i] + "<br>";
    //     ("#question").html(triviaQuestions.question);
    //     ("#a").html(triviaQuestions.answers.a);
    //     ("#b").html(triviaQuestions.answers.b);
    //     ("#c").html(triviaQuestions.answers.c);
    //     ("#d").html(triviaQuestions.answers.d);
    //     console.log(gameplay);
    //     console.log(triviaQuestions.question)
    // }
//  ("#question").html(triviaQuestions.question);
//  ("#a").append(triviaQuestions.answers.a);
//  ("#b").append(triviaQuestions.answers.b);
//  ("#c").append(triviaQuestions.answers.c);
//  ("#d").append(triviaQuestions.answers.d);
//  console.log(this);

    
 })})
// <!-- Questions -->
// var qAnswer = triviaQuestions.correctAnswer;
// var questions = question;
// var answers = correctAnswer;
// var triviaQuestions = [
//     {
//         question: "Who wrote the book for which Jurassic Park was based on?",
//         answers: {
//             a: "Michael Crichton",
//             b: "Stephen King",
//             c: "Dean Koontz",
//             d: "George Orwell"
//         },
//         correctAnswer: "a",
//     },
//     {
//         question: "What is the name of the island on which Jurassic Park was built?",
//         answers: {
//             a: "Los Cincos Muertos",
//             b: "Costa Rica",
//             c: "Isla Nublar",
//             d: "Isla Sorna",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "What is the make and model of the tour vehicles on Jurassic Park?",
//         answers: {
//             a: "Jeep Wrangler",
//             b: "Jeep Liberty",
//             c: "Ford Explorer",
//             d: "Jeep Commander",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "John Hammond states that his new park makes his park in Kenya look like what?",
//         answers: {
//             a: "a petting zoo",
//             b: "a flea circus",
//             c: "spared no expense",
//             d: "an aquarium",
//         },
//         correctAnswer: "a",
//     },
//     {
//         question: "What is the name of the lawyer?",
//         answers: {
//             a: "Ian Malcolm",
//             b: "Donald Genarro",
//             c: "Alan Grant",
//             d: "Mr. Muldoon",
//         },
//         correctAnswer: "b",
//     },
//     {
//         question: "Why does the tour say the dinosaurs cannot reproduce?",
//         answers: {
//             a: "They are steralized once they reach sexual maturity",
//             b: "The animals have a lysene deficiency",
//             c: "The animals are all female",
//             d: "There was an error when they were cloned",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "Why is the Triceratops ill during the tour?",
//         answers: {
//             a: "The animal accidentally ate rocks",
//             b: "The animal accidentally ate west indian lilac",
//             c: "The animal accidentally ate american pokeweed",
//             d: "The animal accidentally ate juniper",
//         },
//         correctAnswer: "b",
//     },
//     {
//         question: "Ultimately, what flaw allows the dinosaurs to reproduce?",
//         answers: {
//             a: "They are spliced with frog DNA which allows them to change sex",
//             b: "They improperly steralized the animals once they reached sexual maturity",
//             c: "They received lysene by eating lysene rich beans",
//             d: "They are spliced with cuttlefish DNA which allows them to change sex",
//         },
//         correctAnswer: "a",
//     },
//     {
//         question: "How many humans are eaten over the course of the movie?",
//         answers: {
//             a: "12",
//             b: "7",
//             c: "6",
//             d: "5",
//         },
//         correctAnswer: "d",
//     },
//     {
//         question: "What is the name of the dinosaur that kills Dennis Nedry?",
//         answers: {
//             a: "Velociraptor",
//             b: "Tyrannosaurus Rex",
//             c: "Dilophosaurus",
//             d: "Carnotaurus",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "What does Lex call herself when Tim says she spends all day on her computer?",
//         answers: {
//             a: "a computer nerd",
//             b: "a hacker",
//             c: "an internet warrior",
//             d: "a UNIX system",
//         },
//         correctAnswer: "b",
//     },
//     {
//         question: "Dennis Nedry tries to play what with a dinosaur to get it to go away?",
//         answers: {
//             a: "fetch",
//             b: "catch",
//             c: "hide-and-seek",
//             d: "dead",
//         },
//         correctAnswer: "a",
//     },
//     {
//         question: "What brand of shaving cream is used as the cryo-can?",
//         answers: {
//             a: "Gilette",
//             b: "Noxzema",
//             c: "Barbasol",
//             d: "Edge",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "What color is the Jello that Lex eats before the kitchen scene?",
//         answers: {
//             a: "red",
//             b: "blue",
//             c: "green",
//             d: "yellow",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "What is the name of the company John Hammond is the CEO of?",
//         answers: {
//             a: "Ingen",
//             b: "Biosyn",
//             c: "Biosys",
//             d: "Cyberdine",
//         },
//         correctAnswer: "a",
//     },
//     {
//         question: "When it premiered, Jurassic Park was the top grossing film of all time; What film was the first to beat it?",
//         answers: {
//             a: "The Lion King",
//             b: "Titanic",
//             c: "The Phantom Menace",
//             d: "The Matrix",
//         },
//         correctAnswer: "b",
//     },
//     {
//         question: "How many combined minutes were dinosaurs shown onscreen?",
//         answers: {
//             a: "9 minutes",
//             b: "22 minutes",
//             c: "15 minutes",
//             d: "31",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "What animals' mating sounds were used to make the velociraptor roar?",
//         answers: {
//             a: "Penguin",
//             b: "Lion",
//             c: "Dolphin",
//             d: "Tortoise",
//         },
//         correctAnswer: "d",
//     },
//     {
//         question: "What event set back the production on Hawaii, forcing the crew to finish on soundstages?",
//         answers: {
//             a: "Hurricane Iniki",
//             b: "Hurricane Tafiti",
//             c: "Hurricane Katrina",
//             d: "Hurricane Irma",
//         },
//         correctAnswer: "a",
//     },
//     {
//         question: "Dr. Grant calls Tim what after he is shocked by the electrical fence?",
//         answers: {
//             a: "A human french fry",
//             b: "A human piece of toast",
//             c: "A human kabob",
//             d: "A human hotdog",
//         },
//         correctAnswer: "b",
//     },
//     {
//         question: "Lex is excited that the tour car comes with what?",
//         answers: {
//             a: "Seat warmers",
//             b: "Night vision goggles",
//             c: "A tv to watch movies",
//             d: "An interactive CD ROM",
//         },
//         correctAnswer: "d",
//     },
//     {
//         question: "What director took over in post production while Spielberg worked on another movie?",
//         answers: {
//             a: "James Cameron",
//             b: "Ridley Scott",
//             c: "George Lucas",
//             d: "Christopher Nolan",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "What film did Spielberg work simeltaneously on while in post production for Jurassic Park?",
//         answers: {
//             a: "Terminator 2",
//             b: "The Last Crusade",
//             c: "Schindler's List",
//             d: "Saving Private Ryan",
//         },
//         correctAnswer: "c",
//     },
//     {
//         question: "At the 1993 Oscars, Jurassic Park won in every category BUT",
//         answers: {
//             a: "Best Visual Effects",
//             b: "Best Picture",
//             c: "Best Sound Editing",
//             d: "Best Sound Mixing",
//         },
//         correctAnswer: "b",
//     },
// ]



// <!-- click events -->

// <!-- timer -->

// <!-- time remaining -->

// <!-- terminate game -->

// <!-- tally wins -->

// <!-- tally losses -->

// <!-- Final page with restart -->
