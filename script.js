

$(document).ready(function() { 

    function getLocalStorage(key) {
        let value = localStorage.getItem(key);
        if (value) {
            $(`#text${key}`).text(value);
        }
    }
    // console.log(moment());
    
    
    // Calling moment variable
    var m = moment();
    
    // Dislplay current day at top of calendar
    // console.log(m.format("dddd, MMMM Do"));
    
    $("#currentDay").text(m.format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {
    
    // Create rows and columns
    // Create a row
    var row = $(`<div data-time=${i} id='${i}' class="row">`);
    
    // Column 1 display schedule time
    var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatTime(i) + '</p>');
    
    // Column 2 with placeholder attribute
    var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`); 
    
    // Column 3 save button
    var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="far fa-save"></i></button>`)
    
    // Append columns to row
        row.append(col1);
        row.append(col2);
        row.append(col3);
    
    // Add rows to container
        $(".container").append(row);
    
        // local storage for info
        getLocalStorage(i);
    
        }
    
        // Function for am and pm hours
        function formatTime(hours) {
            var time = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return hours + time;
        }
    formatTime();
    
    // add to local storage on save button
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function(){
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
});});