require("dotenv").config();

const {
    getAccessToken
} = require("./services/salesforceService");

(async () => {

    const token = await getAccessToken();

    console.log(token);

})();