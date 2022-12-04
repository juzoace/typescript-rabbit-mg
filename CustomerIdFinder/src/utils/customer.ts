import { readFileSync } from "fs";
import { resolve } from 'path';

class CustomerUtility {
    customerData: any;
    distanceInKm: number;
    constructor() {
        this.customerData;
        this.distanceInKm = 100;
    }

getDataFromFile() {

        try {
            // Get data from txt file
            var allFileContents: any;
                
            allFileContents = readFileSync(resolve(__dirname, '../../customers.txt'), 'utf-8');
            
            const arrayOfCloseCustomersId = [];
            
            allFileContents.split(/\r?\n/).forEach((line: string) =>  {
            
            const splitTextToArray = line.split(",");
            
            if (line.length < 70 ) {
                //  Error with particular line // log to winston
                // console.log('inconsistent line')
                
            } else {
                const customerId = splitTextToArray[0].replace(/\s/g, "").slice(3);
                const customerLatitude = parseFloat(splitTextToArray[1].replace(/\s/g, "").slice(4));
                const customerLongitude = parseFloat(splitTextToArray[2].replace(/\s/g, "").slice(5));
                const distanceFromFintech = this.distance( 52.493256, 13.446082, customerLatitude, customerLongitude, "KM");
        
                if (distanceFromFintech <= 100 ) {
                    arrayOfCloseCustomersId.push(customerId)
                }
            }

            });
            
            return arrayOfCloseCustomersId.sort((a, b) => b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }))
        
        } catch(err) {

            if (err.code === "ENOENT") {
                // log to winston
                console.log("file not found")
            }

        }

}

distance(lat1: number, lon1: number, lat2: number, lon2: number, unit: string) {
    if ( unit === undefined ) unit = 'KM';
    var r = this.validateRadius(unit); 
    lat1 *= Math.PI / 180;
    lon1 *= Math.PI / 180;
    lat2 *= Math.PI / 180;
    lon2 *= Math.PI / 180;
    var lonDelta = lon2 - lon1;
    var a = Math.pow(Math.cos(lat2) * Math.sin(lonDelta) , 2) + Math.pow(Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lonDelta) , 2);
    var b = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lonDelta);
    var angle = Math.atan2(Math.sqrt(a) , b);
    
    return angle * r;
}

validateRadius(unit: string) {
    var r = {'M': 6371009, 'KM': 6371.009, 'MI': 3958.761, 'NM': 3440.070, 'YD': 6967420, 'FT': 20902260};
    if ( unit in r ) return r[unit];
    else return unit;
}

}

export default new CustomerUtility;