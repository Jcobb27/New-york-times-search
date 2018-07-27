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


//The Data Teams code////
//////////////////////////////////////////////
////////////////////////////////////////////////

$(document).ready(function(){
    //this is where user dynamic input goes for specific querys

    

    //build out the query url and values
    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "c17bbdc346f446e38fefeef594c9e2c9",
    //q is the search term
    'q':"Trump", //getting variable from ui team
    //begin_date is the begin date
    'begin_date':"20150708",
    //end date    
    'end_date':"20180727"
    });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
    console.log(result);
    console.log(result.response.docs);
    
    //this is where we dynamically build elements and append to the ui side
    //this is looping through all of the returned articles
        for(var i = 0; i < result.response.docs.length; i++){
            //make an div to contain all the content
            var article = $("<div>");
            //in each article grab the thumbnail
            var imageURL = result.response.docs[i].multimedia[3].url;
        
            //now make an img tag and put the url on the src attribute
            var img = $("<img>").attr({src:imageURL});
            //now append to the 
            $(article).append(img);
            $("body").append(article);
            //do the title
            var title = $("<h1>").text(result.response.docs[i].headline.main);
            console.log("hello hello " + result.response.docs[i].headline.main);
            $(article).append(title);
        

        }

    }).fail(function(err) {
    throw err;
    });
});
});
