function searchByCode() {

    const key1 = "5f3543aee772bfa2c1ff769efdd5c991";
    var barcode = document.getElementById("barcodeQuery").value;
    let api1 = "https://www.foodrepo.org/api/v3/products?barcodes";
    let api2 = "https://restcountries.com/v2/alpha"
    let key = "AIzaSyAcwnlNMP3dwZ8ANsdUMM24QQ98nKAnWYs"
    let locationOrigin = ""

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
                $(".name .value").text(resp.data[0].display_name_translations.en)
                fetch(`${api2}/` + resp.data[0].country)
                    .then(responseCountry => {
                        responseCountry.json().then(responseCountry => {
                            $(".location .value").text(responseCountry.name)
                            locationOrigin = responseCountry.name;
                        })
                            .catch(error => console.error(error))
                        $(".co2 .value").text(0) //TODO API Call @TPalleau
                        $(".kmTravelled .value").text(0) //TODO Calculate
                        $(".ecoScore .value").text(0) //TODO FOrmula @TPalleau
                        $(".result-img").attr("src", resp.data[0].images[1].medium);

                        navigator.geolocation.getCurrentPosition(function (position) {
                            lat = position.coords.latitude;
                            lon = position.coords.longitude;
                            console.log("Latitude " + lat + " ,Longitude " + lon);


                            $("#mapFrame").html(`<iframe allowfullscreen frameborder="0" 
                            src="https://www.google.com/maps/embed/v1/place?key=${key}&amp;q=${locationOrigin}&amp;zoom=6" 
                            loading="lazy" width="100%" height="300"></iframe>`);
                        }
                        

                        )
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