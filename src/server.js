function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

const request = (url, options) => {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            return error;
        })
}
export default request;