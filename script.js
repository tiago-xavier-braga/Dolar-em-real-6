fetch("https://economia.awesomeapi.com.br/json/USD-BRL")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data[0])
    })