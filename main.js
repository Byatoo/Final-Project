$(document).ready(function(){
  console.log('jq ready!');
  $('form').on('submit', function(event){
    event.preventDefault();
    var state = $('#state').val();
    var city = $('#city').val();

 console.log(event);
 console.log(state, city)
  $.ajax({
    method: 'GET',
    url: 'https://www.themuse.com/api/public/jobs?location='+city+''+state+'&page=5&descending=false',
    success: function(result) {
      console.log(result);
      // console.log("LOCATIONS", result.results.filter(i=> i.locations[0].name !== 'Flexible / Remote').map(i=>i.locations[o].name));

        for(var i=0;i<result.results.length;i++){
          
          
        //item.results.filter(function(location){
          if(result.results[i].locations[0].name !==  "Flexible / Remote"){
            $('#result').append($("<h2/>").text('Company Name:'+ " " + result.results[i].company.name))
            $('#result').append($("<h3/>").text('Job Title:'+ " " + result.results[i].name))
            $('#result').append($("<p/>").text('Location:'+ " " + result.results[i].locations[0].name))
          }
        
       // return location.locations[0].name !==  "Flexible / Remote";
      //})
    
    }
    
      // $('#result').append($("<p/>").text('Company Name:'+ " " + result.results[15].company.name))
      // $('#result').append($("<p/>").text('Job Title:'+ " " + result.results[15].name))
      // $('#result').append($("<p/>").text('Location:'+ " " + result.results[1].locations[0].name))
      // $('#result').append($("<p/>").text('Company Name:'+ " " + result.results[16].company.name))
      // $('#result').append($("<p/>").text('Job Title:'+ " " + result.results[16].name))
      // $('#result').append($("<p/>").text('Location:'+ " " + render(result)));
      // $('#result').append($("<p/>").text('Company Name:'+ " " + result.results[17].company.name))
      // $('#result').append($("<p/>").text('Job Title:'+ " " + result.results[17].name))
      // $('#result').append($("<p/>").text('Location:'+ " " + result.results[1].locations[0].name))
      // $('#result').append($("<p/>").text('Company Name:'+ " " + result.results[18].company.name))
      // $('#result').append($("<p/>").text('Job Title:'+ " " + result.results[18].name))
      // $('#result').append($("<p/>").text('Location:'+ " " + result.results[1].locations[0].name))
      // $('#result').append($("<p/>").text('Company Name:'+ " " + result.results[19].company.name))
      // $('#result').append($("<p/>").text('Job Title:'+ " " + result.results[19].name))
      // $('#result').append($("<p/>").text('Location:'+ " " + result.results[1].locations[0].name))
   
    },
     error: function(error) {
      console.log('error with quote', error);
    }
  })
})
})

// http://api.openweathermap.org/data/2.5/weather?q=90034,us?units=imperial&appid=3c98ae2e7408371942dfe453b3858052
// http://api.openweathermap.org/data/2.5/weather?q=[90034],us?units=imperial&appid=[3c98ae2e7408371942dfe453b3858052]
// 2ffa00a155fd164e23874d45d2b81a7b
// http://api.adzuna.com/v1/api/property/gb/search/1?app_id=6b847081&app_key=2ffa00a155fd164e23874d45d2b81a7b