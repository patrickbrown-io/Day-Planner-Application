// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist


//Displays the current date on the top of the page

var currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
$("#current-day").text(currentTime);
console.log(currentTime);


var currentHour = moment().hour();
var hourCompare = moment().format('H')

var saveBtn = $(".saveBtn")

//determines if the time has past, updates block to past, present, future
console.log(

$('.time-block').each (function(){
    if(parseInt($('.time-block').attr('id') ) > hourCompare){
    $(".description").addClass("future")

    } else if (parseInt($('.time-block').attr('id')) < hourCompare){   
         $(".description").addClass("past")

    } else {
        $(".description").addClass("now")
    }
}));


console.log(parseInt("24"))
////Save button functionality

saveBtn.on("click", function(){
var time = $(this).siblings(".hour").text();
var task = $(this).siblings(".description").val();

localStorage.setItem(time,task);
alert("Your task has been saved!");
})

//on load?