import * as marketData from '../Application/marketData.js';
export class MarketDataController {
    constructor(cache, eventQueue, adminEventQueue) {
        this.cache = cache;
        this.eventQueue = eventQueue;
        this.adminEventQueue = adminEventQueue;
    }

    /**
     * @memberOf NotifierService.Src.Controller.marketDataController
     * @summary Update price in cache
     * @description Keep price sync with global api
     * @param {Number} rateLimit max request per second
     * @return {Promise} Promise 
     */
    async updatePrice() {
        const price = await marketData.getMarketData();
        this.cache.setPrice(price);
    }
}