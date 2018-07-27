$( document ).ready(function() {
    console.log( "ready!" );

    var numRecords;
    var search;
    var startDate;
    var endDate;

//on click search...
$("#searchBtn").on("click", function(){
    console.log("button works");
    event.preventDefault();
    search = $("#searchTerm").val().trim();
    console.log (search);
    numRecords = $("#numberRecords").val()
    console.log(numRecords);
    startDate =  $("#startYear").val();
    console.log("Start date: " + startDate);
    endDate =  $("#endYear").val();
    console.log("End date: " + endDate);
})

//On click clear, empty the showResults div
$("#clearBtn").on("click",function(){
    $("#showResults").empty()
    })
});

