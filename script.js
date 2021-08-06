// //Load Events
    $("#9 .description").val(localStorage.getItem("\n        9:00am\n    "));
    $("#10 .description").val(localStorage.getItem("\n        10:00am\n    "));
    $("#11 .description").val(localStorage.getItem("\n        11:00am\n    "));
    $("#12 .description").val(localStorage.getItem("\n        12:00pm\n    "));
    $("#13 .description").val(localStorage.getItem("\n        1:00pm\n    "));
    $("#14 .description").val(localStorage.getItem("\n        2:00pm\n    "));
    $("#15 .description").val(localStorage.getItem("\n        3:00pm\n    "));
    $("#16 .description").val(localStorage.getItem("\n        4:00pm\n    "));
    $("#17 .description").val(localStorage.getItem("\n        5:00pm\n    "));

//Displays the current date on the top of the page
var currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
$("#current-day").text(currentTime);
console.log(currentTime);

var currentHour = moment().hour();
var hourCompare = moment().format('H')

var saveBtn = $(".saveBtn")

//determines if the time has past, updates block to past, present, future
$(".time-block").each(function() {
    var blockCalc = parseInt($(this).attr("id"));

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