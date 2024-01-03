

//all the buttons in the html saved in the saveBtn variable
var saveBtn = $(".saveBtn");
$("#currentDay").text(dayjs().toDate());

// each time block is color-coded to indicate whether it is in the past, present, or future
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

        // console.log(this);
        // console.log(currHour);

        if(currtextInput !== null) {
            $(this).siblings(".description").val(currtextInput);
        }
    });
}

// calling the functions
timeBlocks();
usePlanner();
