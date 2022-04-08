
// Setting Global Variables // 

var currentHour = moment().hours();
var timer = $('.time-block');
var saveBtn = $('.saveBtn');

// Setting each id (children) to a parent (textarea) // 
$('#9').children("textarea").val(localStorage.getItem('9'));

$('#10').children("textarea").val(localStorage.getItem('10'));

$('#11').children("textarea").val(localStorage.getItem('11'));

$('#12').children("textarea").val(localStorage.getItem('12'));

$('#13').children("textarea").val(localStorage.getItem('13'))

$('#14').children("textarea").val(localStorage.getItem('14'));

$('#15').children("textarea").val(localStorage.getItem('15'));

$('#16').children("textarea").val(localStorage.getItem('16'));

$('#17').children("textarea").val(localStorage.getItem('17'));

$('#18').children("textarea").val(localStorage.getItem('18'));


// Add  today's date using Moment.js //
$("#currentDay").text(moment().format("dddd, MMMM Do "));

// Local Storage //

saveBtn.on('click', function() {
var explanation = $("textarea").val().trim();
var schedule = $(this).parent().attr("id");
localStorage.setItem(schedule, explanation);
});

// Conditions of row color with respect to current time //

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

