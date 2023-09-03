const proxyURL = "http://localhost:9000";

export const fetcher = async ([uri, token, host = proxyURL]: string[]) => {
    if(token === "") {
        throw new Error('Empty token')
    }

    const unparsed_resp = await fetch(host + uri, {
        headers: {
            'Authorization': `OAuth ${token}`
        },
    })

    if(!unparsed_resp.ok) {
        throw new Error('An error occurred while fetching the data.')
    }

    const resp = await unparsed_resp.json()

    if(resp.error !== undefined){
        throw new Error(resp.message)
    }

    return resp.result || resp;
}