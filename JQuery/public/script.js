// $("#heading1").hide(); Hide a selected element
// $("#list li:first").css("color", "red"); Target a specific item in a list
// $("#list li:even").css("color", "red");
// $("#list li:nth-child(3n)").css("color", "red");
$(document).ready(() => {
  // Good practice to use document ready to ensure
  // page has loaded before any functions are used.
  // $(":button").click(() => {
  //   alert("What the hell are you doing!");
  // });
  // The "on" method takes two parameters: action and function to run.
  // $(":button").on("click", () => {
  //   $(".para1").toggle();
  // });
  // $(":button").hover(() => {
  //   $(".para1").toggle();
  // });
  // $(":button").on("mouseenter", () => {
  //   $(".para1").toggle();
  // });
  // $(":button").on("mouseleave", () => {
  //   $(".para1").toggle();
  // });
  // $(":button").on("mousedown", () => {
  //   $(".para1").toggle();
  // });
  // $(":button").on("mouseup", () => {
  //   $(".para1").toggle();
  // });

  // $("#heading1").on("mouseenter", () => {
  //   $("#heading1").css("font-size", "50px");
  // });

  // $("#heading1").on("mouseleave", () => {
  //   $("#heading1").css("font-size", "35px");
  // });

  $(document).on("mousemove", function(e) {
    $("#axis").html("Y-Axis: " + e.clientY + "  X-Axis: " + e.clientX); // Seconds since page was loaded.
  });

  //   $("input").focus(function() {
  //     $(this).css("background-color", "pink");
  //   });

  //   $("input").blur(function() {
  //     $(this).css("background-color", "white");
  //   });

  //   $("#form").submit(function(e) {
  //     e.preventDefault();
  //     console.log("Submitted");
  //   });

  //// Jquery Tricks //////////
  // Turn this into a simpler function

  //   function addSpanIds(textElement) {
  //     let textArray = textElement.split(" ");

  //     let newArray = [];

  //     // Create a hashing function for generating random ids
  //     for (let i = 0; i < textArray.length; i++) {
  //       let newTextElement = `<span id="poop${i}"> ${textArray[i]} </span`;

  //       newArray.push(newTextElement);
  //     }

  //     return newArray;
  //   }

  //   function idLoop() {
  //     let id = [];

  //     for (let i = 0; i < 160; i++) {
  //       id.push(`#poop${i}`);
  //     }

  //     return id.join(",");
  //   }

  //   let ids = idLoop();

  //   let paraOneText = $("#para1").text();

  //   $(".para1").html(addSpanIds(paraOneText));

  //   $(`${ids}`).on("mouseenter", function() {
  //     $(this).css("font-size", "40px");
  //   });

  //   $(`${ids}`).on("mouseleave", function() {
  //     $(this).css("font-size", "20px");
  //   });

  // Looping through arrays

  //   let array = ["steven", "dave", "miya", "poop"];

  //   $.each(array, function(i, val) {
  //     $("#list").append(`<li>${val}</li>`);
  //   });

  ///////// Effects and Animation //////////////

  $("#btnFadeOut").click(function() {
    $("#box").fadeOut(2000, function() {
      // set milliseconds
      // fadeOut also takes an optional callback function
      // that executes on completion

      $("#btnFadeOut").text("Its gone");
    });
  });

  $("#btnFadeIn").click(function() {
    $("#box").fadeIn(2000);
  });

  $("#btnFadeTog").click(function() {
    $("#box").fadeToggle(2000);
  });

  // $.getJSON("names.json", function(data) {
  //   $.each(data, function(i, user) {
  //     $("ul#list").append(`<li>${user.email}</li>`);
  //   });
  // });

  ////// Make a GET request ///////////

  // $.ajax({
  //   method: "GET",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   dataType: "json"
  // }).done(function(data) {
  //   $.map(data, function(post, i) {
  //     $("#list").append(`<li>${post.title}</li>`);
  //   });
  // });

  ///////// Make a POST request //////////////

  $("form").submit(function(e) {
    e.preventDefault();

    let message = {
      name: $("#name").val(),
      email: $("#email").val()
    };
  });
});
