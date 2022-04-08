var currentHour = moment().hours();
console.log(currentHour);


// Add  today's date using Moment.js //
$("#currentDay").text(moment().format("dddd, MMMM Do "));

// Relationship of the row color with respect to current time //
function colorChange(){ 
    var guessHour = parseInt($(this).attr('id'))
    console.log(guessHour);

    if (currentHour === guessHour){
    $("col-sm-10").addClass("present");
}
else if (currentHour < guessHour){
    $("col-sm-10").addClass("future");
}
    else {
        $("col-sm-10").addClass("past");
    }

}