function searchByCode() {

    const key1 = "5f3543aee772bfa2c1ff769efdd5c991";
    var barcode = document.getElementById("barcodeQuery").value;
    let api1 = "https://www.foodrepo.org/api/v3/products?barcodes";
    let api2 = "https://restcountries.com/v2/alpha"
    let key = "AIzaSyAcwnlNMP3dwZ8ANsdUMM24QQ98nKAnWYs"
    let locationOrigin = ""
    var latlongStart;
    let lat
    let lon
    let api3 = "https://klimaat.app/api/v1/calculate";

    fetch(`${api1}=${barcode}`, {
        headers: {
            Accept: "application/json",
            Authorization: `Token token=${key1}`
        }
    })
        //.then(response => response.text())
        .then(p => {
            if (p.status == 200) {
                $("#numberSearch").addClass("hidden");
                $("#successMsg").removeClass("hidden")
                $("#infoCard").removeClass("hidden")
                $("#infoCard .name").removeClass("hidden")
                $("#infoCard .location").removeClass("hidden")
                $("#infoCard .co2").removeClass("hidden")
                $("#infoCard .kmTravelled").removeClass("hidden")
                $("#infoCard .ecoScore").removeClass("hidden")
                //TODO Map!
            }
            p.json().then(resp => {
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude;
                    lon = position.coords.longitude;
                    console.log("Latitude " + lat + " ,Longitude " + lon);


                    $("#mapFrame").html(`<iframe allowfullscreen frameborder="0" 
                    src="https://www.google.com/maps/embed/v1/place?key=${key}&amp;q=${locationOrigin}&amp;zoom=6" 
                    loading="lazy" width="100%" height="300"></iframe>`);
                }


                )
                $(".name .value").text(resp.data[0].display_name_translations.en)
                fetch(`${api2}/` + resp.data[0].country)
                    .then(responseCountry => {
                        responseCountry.json().then(responseCountry => {
                            $(".location .value").text(responseCountry.name)
                            locationOrigin = responseCountry.name;
                            latlongStart = responseCountry.latlng
                        })
                            .catch(error => console.error(error))

                        const key1 = "live_zFDt2xaxdYwkx5vbAGJKLdEXHbTW0TAbLcmUQzMGtkWyaF-unNbqrBzaOghvTjgiWgnihxYp8Ka7zxX6bFuJYQ==";



                        let request = `${api1}?start=${latEnd},${longEnd}
                                &end=${latlongStart}
                                &transport_mode=driving
                                &key=live_cV9kXlrPsU2HobP-lkutFWPngfeBhSdOQ4ewsYM-ViUHRM_GlM6U-RFOwa1OqI-5YIdDOVlUGVnTcmOodAG9eg==`


                        var latEnd = lat;
                        var longEnd = lon;

                        fetch(request)
                            .then(reqResp => {
                                console.log(reqResp)
                                console.log(reqResp.json())
                                reqResp.json().then(reqResp => {
                                    $(".co2 .value").text(reqResp.data.carbon_footprint.total)
                                    $(".kmTravelled .value").text(reqResp.data.distance.kms)

                                })
                            })

                        $(".co2 .value").text("1.82291")
                        $(".kmTravelled .value").text("8912.19")
                        $(".ecoScore .value").text("11.3") //TODO FOrmula @TPalleau
                        $(".result-img").attr("src", resp.data[0].images[1].medium);

                    })
            })
                .catch(error => console.error(error));
        })
}


function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService
        .route({
            origin: {
                query: locationOrigin
            },
            destination: {
                query: `${lat}%2C${lon}`,
            },
            travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}

function searchByBarCode() {

    $("#barcodeSearch").addClass("hidden");
    $("#loading").removeClass("hidden");
    //TODO Code Scan
    setTimeout(() => {
        $(".goSearchCode").removeClass("hidden");
        $(".retryCode").removeClass("hidden");
        $("#dataFailed").removeClass("hidden");
        $("#loading .spinner-border").addClass("hidden");
        $("#dataFailed").html("No Data Found.");
    }, 3000);
}

$(".retryCode").click(function (e) {
    e.preventDefault();
    $(".goSearchCode").addClass("hidden");
    $(".retryCode").addClass("hidden");
    $("#dataFailed").addClass("hidden");
    $("#loading .spinner-border").removeClass("hidden");

    $("#loading").addClass("hidden");
    $("#barcodeSearch").removeClass("hidden");


});

$(".goSearchCode").click(function (e) {
    e.preventDefault();
    $("#loading").addClass("hidden");
    $("#numberSearch").removeClass("hidden")

});