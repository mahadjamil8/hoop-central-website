$(document).ready(function () {
  $(".team-logo-box").click(function () {
    let team = $(this).data("team");

    if (team === "heat") {
      $("#teamName").text("Miami Heat");
      $("#teamInfo").text("The Miami Heat are known for toughness, defense, conditioning, and a strong team culture. They are one of the most respected teams because they play hard and compete with discipline.");
      $("#favoriteResponse").text("Good pick! The Miami Heat are a tough and disciplined team.");
    }

    if (team === "knicks") {
      $("#teamName").text("New York Knicks");
      $("#teamInfo").text("The Knicks are one of the most famous basketball teams because they play in New York City. They have a passionate fan base and a long history in the NBA.");
      $("#favoriteResponse").text("Nice choice! The Knicks have loyal fans and a lot of New York energy.");
    }

    if (team === "celtics") {
      $("#teamName").text("Boston Celtics");
      $("#teamInfo").text("The Celtics are known for tradition, teamwork, defense, and championship history. They are one of the most successful franchises in basketball.");
      $("#favoriteResponse").text("Great pick! The Celtics are a classic team with a championship history.");
    }

    if (team === "lakers") {
      $("#teamName").text("Los Angeles Lakers");
      $("#teamInfo").text("The Lakers are one of the most famous teams in basketball. They are known for superstar players, championships, and a strong winning tradition.");
      $("#favoriteResponse").text("Good pick! The Lakers are a legendary team with superstar history.");
    }

    if (team === "bulls") {
      $("#teamName").text("Chicago Bulls");
      $("#teamInfo").text("The Chicago Bulls became legendary because of Michael Jordan, Scottie Pippen, and their championship runs in the 1990s.");
      $("#favoriteResponse").text("Awesome pick! The Bulls are remembered for one of the greatest eras in basketball.");
    }

    if (team === "warriors") {
      $("#teamName").text("Golden State Warriors");
      $("#teamInfo").text("The Warriors changed modern basketball with three-point shooting, ball movement, and the style of play led by Stephen Curry.");
      $("#favoriteResponse").text("Great choice! The Warriors are exciting because of shooting, speed, and teamwork.");
    }

    $("#favoriteResponse").hide().fadeIn(500);
  });
});
let highlights = [
  {
    title: "Dunk",
    image: "images/highlight1.gif",
    description: "A dunk is one of the most exciting plays in basketball because it shows power, timing, and athleticism near the rim."
  },
  {
    title: "Crossover",
    image: "images/highlight2.gif",
    description: "A crossover is a dribbling move where a player quickly changes direction to get past a defender."
  },
  {
    title: "Dribble Move",
    image: "images/highlight3.gif",
    description: "A good dribble move helps a player create space, attack the basket, or set up a teammate."
  }
];

function showHighlight(index) {
  let selectedHighlight = highlights[index];

  $("#highlightImage").attr("src", selectedHighlight.image);
  $("#highlightImage").attr("alt", selectedHighlight.title);
  $("#highlightTitle").text(selectedHighlight.title);
  $("#highlightDescription").text(selectedHighlight.description);

  localStorage.setItem("lastHighlight", selectedHighlight.title);

  $("#savedHighlightMessage").text("Last highlight you clicked: " + selectedHighlight.title);
}

$(document).ready(function () {
  $(".highlight-btn").click(function () {
    let index = $(this).data("index");

    $(".highlight-btn").removeClass("active-highlight");
    $(this).addClass("active-highlight");

    showHighlight(index);
  });

  let savedHighlight = localStorage.getItem("lastHighlight");

  if (savedHighlight !== null) {
    $("#savedHighlightMessage").text("Last highlight you clicked: " + savedHighlight);
  }
});

function updateClock() {
  let now = new Date();

  let time = now.toLocaleTimeString();

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  $("#clockTime").text(time);
  $("#clockDay").text(day);
  $("#clockDate").text(month + " " + date + ", " + year);
}

$(document).ready(function () {
  updateClock();
  setInterval(updateClock, 1000);
});

$(document).ready(function () {
  $(".quiz-btn").click(function () {
    let answer = $(this).data("answer");
    let questionBox = $(this).closest(".quiz-question");
    let result = questionBox.find(".quiz-result");

    questionBox.find(".quiz-btn").removeClass("correct-choice wrong-choice");

    if (answer === "correct") {
      $(this).addClass("correct-choice");
      result.text("Correct! Good answer.");
    } else {
      $(this).addClass("wrong-choice");
      result.text("Not quite. Try again.");
    }

    result.hide().fadeIn(400);
  });
});