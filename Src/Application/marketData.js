/**
 * @memberOf MarketDataService.Src.Application.marketData
 * @summary get market data
 * @description Get market data from external service
 * @return {Promise<Object>} Return market data object
 */
export async function getMarketData() {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-lg317mbtdz5bz-io");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            return result.price;
        })
        .catch(error => console.log('error', error));
}
