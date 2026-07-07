const axios = require("axios");

async function getAccessToken() {

    const response = await axios.post(

        `${process.env.SF_LOGIN_URL}/services/oauth2/token`,

        new URLSearchParams({

            grant_type: "client_credentials",
            client_id: process.env.SF_CLIENT_ID,
            client_secret: process.env.SF_CLIENT_SECRET

        }),

        {

            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }

        }

    );

    return response.data;

}

async function querySalesforce(soql) {

    const auth = await getAccessToken();

    const response = await axios.get(

        `${auth.instance_url}/services/data/v63.0/query`,

        {

            headers: {
                Authorization: `Bearer ${auth.access_token}`
            },

            params: {
                q: soql
            }

        }

    );

    return response.data.records;

}

async function createRecord(objectName, data) {

    const auth = await getAccessToken();

    const response = await axios.post(

        `${auth.instance_url}/services/data/v63.0/sobjects/${objectName}`,

        data,

        {

            headers: {
                Authorization: `Bearer ${auth.access_token}`,
                "Content-Type": "application/json"
            }

        }

    );

    return response.data;

}

async function updateRecord(objectName, id, data) {

    const auth = await getAccessToken();

    await axios.patch(

        `${auth.instance_url}/services/data/v63.0/sobjects/${objectName}/${id}`,

        data,

        {

            headers: {
                Authorization: `Bearer ${auth.access_token}`,
                "Content-Type": "application/json"
            }

        }

    );

    return {
        success: true
    };

}

async function deleteRecord(objectName, id) {

    const auth = await getAccessToken();

    await axios.delete(

        `${auth.instance_url}/services/data/v63.0/sobjects/${objectName}/${id}`,

        {

            headers: {
                Authorization: `Bearer ${auth.access_token}`
            }

        }

    );

    return {
        success: true
    };

}

module.exports = {

    querySalesforce,
    createRecord,
    updateRecord,
    deleteRecord

};