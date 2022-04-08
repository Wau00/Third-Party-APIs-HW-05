var currentHour = moment().hours();
var timer = $('.time-block');


// Add  today's date using Moment.js //
$("#currentDay").text(moment().format("dddd, MMMM Do "));

// Relationship of the row color with respect to current time //

function colorChange() { 
    var currentHour = moment().hours();
    


timer.each(function() { 
    var guessHour = parseInt($(this).attr('id'))
    
    if (currentHour === guessHour){
    $(this).children(".col-sm-10").addClass("present")
}
else if (currentHour > guessHour){
    $(this).children(".col-sm-10").addClass("past")
}
    else {
        $(this).children(".col-sm-10").addClass("future")
}
})
}

colorChange();

