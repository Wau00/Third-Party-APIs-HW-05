var currentHour = moment().hours();
var timer = $('.time-block');
var saveBtn = $('.saveBtn');

// Add  today's date using Moment.js //
$("#currentDay").text(moment().format("dddd, MMMM Do "));


// Local Storage //

saveBtn.on('click', function() {
var explanation = $(this).siblings(".explanation").val();
var schedule = $(this).parent().attr("id");
localStorage.setItem(explanation, schedule);

})




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

