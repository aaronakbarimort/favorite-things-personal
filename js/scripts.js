$(document).ready(function() {
  $("#favThingsForm").submit(function(event) {
    event.preventDefault();
    // debugger;
    var inputOne = $("#favThingOne").val();
    var inputTwo = $("#favThingTwo").val();
    var inputThree = $("#favThingThree").val();

    var inputArray = [inputOne, inputTwo, inputThree];
    // console.log(inputArray);
    var answerArray = [];
    answerArray.push(inputArray[0], inputArray[1], inputArray[2])
    // console.log(answerArray);

    $("#results").append("<li>" + inputArray[0] + "</li>" + "<li>" + inputArray[1] + "</li>" + "<li>" + inputArray[2] + "</li>");
  });
})
