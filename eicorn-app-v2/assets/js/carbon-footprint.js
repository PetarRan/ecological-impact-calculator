function getCarbonFootprint() {

    const key1 = "live_zFDt2xaxdYwkx5vbAGJKLdEXHbTW0TAbLcmUQzMGtkWyaF-unNbqrBzaOghvTjgiWgnihxYp8Ka7zxX6bFuJYQ==";
    var latStart;
    var longStart;
    var latEnd;
    var longEnd;
    let api1 = "https://klimaat.app/api/v1/calculate";

    let request = `${api1}?start=${latStart},${longStart}
        &end=${latEnd},${longEnd}
        &transport_mode=driving
        &key=live_zFDt2xaxdYwkx5vbAGJKLdEXHbTW0TAbLcmUQzMGtkWyaF-unNbqrBzaOghvTjgiWgnihxYp8Ka7zxX6bFuJYQ==`


    fetch(request)
        .then(responseFootPrint => {
            responseFootPrint.json().then(responseFootPrint => {
                $(".co2 .value").text(responseFootPrint.data.carbon_footprint.total)

            })
            responseFootPrint.json().then(responseFootPrint => {
                $(".kmTravelled .value").text(responseFootPrint.data.distance.kms)

            })
        
        })
}