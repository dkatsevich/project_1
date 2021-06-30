const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data,
    });

    if (!res.ok) {
        throw new Error(`Response not posting, status - ${res.status}`);
    }

    return res;
};

export {postData};