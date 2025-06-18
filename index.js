import { Cache } from './Src/Infrastructure/cache.js';
import { createClient } from 'redis';
import { MarketDataController } from './Src/Controller/marketDataController.js';

const cron = require('node-cron');



// Load Dependencies
console.log("Initial dependencies");

// Load cache, queue object
const redis = createClient();
redis.on('error', err => console.log('Redis Client Error', err));
await redis.connect();

// Inject dependencies
const cache = new Cache(redis);
const marketDataController = new MarketDataController(cache, eventQueue, null);

cron.schedule('*/2 * * * *', () => { // Run every 2 minutes
    marketDataController.updatePrice();
    // Your request logic here
});
redis.quit();