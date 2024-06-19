const BASE_URL = 'https://peta-bhinneka.wiremockapi.cloud/';


async function getData() {
    const response = await fetch(`${BASE_URL}/data`, {
        method: 'GET',
    })

    const responseJSON = await response.json();
    
}