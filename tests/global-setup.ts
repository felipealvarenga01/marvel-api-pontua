import type {FullConfig} from '@playwright/test'
require('dotenv').config()

async function globalSetup(config: FullConfig){}

export const setIntervalMock = (interval = 1) =>`
    let originalSetInterval;
    function mockSetInterval(callback, interval){
        let timeoutId;
        const newCallback = () =>{
            callback();
            clearInterval(timeoutId);
        }
        timeoutId = originalSetInterval(newCallback, ${interval});
        return timeoutId;
    }
    
    originalSetInterval = window.setInterval;
    window.setInterval = mockSetInterval;
`;

export default globalSetup;