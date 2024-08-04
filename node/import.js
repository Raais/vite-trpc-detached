require('dotenv').config({path: '.env.local'});
const fs = require('fs');
const axios = require('axios');

const baseUrl = process.env.VITE_TRPC_URL;

const main = async () => {
    try {
        const trpci = await axios.get(baseUrl + 'i');
        
        const dts = atob(trpci.data.dts);
        const mjs = atob(trpci.data.mjs);
        
        fs.writeFileSync('./src/api/import/index.d.ts', dts);
        fs.writeFileSync('./src/api/import/index.js', mjs);
    } catch (error) {
        console.error('Error importing types: Check if VITE_TRPC_URL is correct');
        throw error;
    }
}

main();