fetch("https://economia.awesomeapi.com.br/json/USD-BRL")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.getElementById("valor_dolar").innerHTML= "R$: "+ data[0].ask
        document.getElementById("data").innerHTML= "Data: "+ data[0].create_date
        console.log(data[0])
    })