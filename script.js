// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist


// //Load Events
    $("#9 .description").val(localStorage.getItem("9:00am"));
    $("#10 .description").val(localStorage.getItem("10:00am"));
    $("#11 .description").val(localStorage.getItem("11:00am"));
    $("#12 .description").val(localStorage.getItem("12:00pm"));
    $("#13 .description").val(localStorage.getItem("1:00pm"));
    $("#14 .description").val(localStorage.getItem("2:00pm"));
    $("#15 .description").val(localStorage.getItem("3:00pm"));
    $("#16 .description").val(localStorage.getItem("4:00pm"));
    $("#17 .description").val(localStorage.getItem("5:00pm"));


//Displays the current date on the top of the page

var currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
$("#current-day").text(currentTime);
console.log(currentTime);


var currentHour = moment().hour();
var hourCompare = moment().format('H')

var saveBtn = $(".saveBtn")

//determines if the time has past, updates block to past, present, future

// $('.time-block').each (function(){
//     if( $('.time-block').attr('id') > currentHour){
//     $(".description").addClass("future")

//     } else if ($('.time-block').attr('id') < currentHour){   
//          $(".description").addClass("past")

//     } else {
//         $(".description").addClass("now")
//     }
// }));

///different loop
$(".time-block").each(function() {
    var blockCalc = parseInt($(this).attr("id"));
    console.log(blockCalc)
    console.log(blockCalc > currentHour)

    if(blockCalc > currentHour){
        $(this).find("textarea").addClass("future")
        $(this).find("textarea").removeClass("past")
        $(this).find("textarea").removeClass("now")
    }
    else if (blockCalc < currentHour){
        $(this).find("textarea").addClass("past")
        $(this).find("textarea").removeClass("future")
        $(this).find("textarea").removeClass("now")

    } else {
       $(this).find("textarea").addClass("now")
       $(this).find("textarea").removeClass("future")
       $(this).find("textarea").removeClass("past")
    };
})





////Save button functionality

saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();

localStorage.setItem(time,task);
alert("Your task has been saved!");
})