function searchByCode() {

    const key1 = "8000dd33-a8f4-45be-8cfb-2f25a51550a6";
    var barcode = document.getElementById("barcodeQuery");
    let api1 = "https://www.foodrepo.org/api/v3/products?barcodes=${barcode}";

    const data = await fetch(api1)
        .then(res => {
            return res.json()
        })
    return data
}
