let timeDisplay = $('#currentDay');


function runningTime() {
    let currentTimeDate = (moment().format('dddd, MMMM Do YYYY h:mm:ss a'));
    timeDisplay.text(currentTimeDate);
    setInterval(runningTime, 1000);
}


function renderTimeColor() {
    const currentHour = moment().hours();
    $('.time-block').each(function() {
        const rowHour = parseInt($(this).attr('id'));
        if (rowHour < currentHour) {
            $(this).addClass('past');
        } else if (rowHour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        };
    });
};

runningTime();