

//all the buttons in the html saved in the saveBtn variable
var saveBtn = $(".saveBtn");

// Current time display in th header
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm a'));

// each time block will be color-coded depending if it's in the past, present, or future
function timeBlocks() {
    var hour = dayjs().hour();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//  save button for that time block when clicked
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var textInput = $(this).siblings(".description").val();

    //  text for that event is saved in local storage
    localStorage.setItem(time, textInput);
});

function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currtextInput = localStorage.getItem(currHour);


        if(currtextInput !== null) {
            $(this).siblings(".description").val(currtextInput);
        }
    });
}

// calling the functions
timeBlocks();
usePlanner();
