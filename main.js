
fetch('https://api.tvmaze.com/shows')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    console.log(json)
  })