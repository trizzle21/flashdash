const makeGetRequest = (url) => {
    return fetch(
        url,
        {
          method: 'GET',
          headers: new Headers({
            Accept: "application/json"
          }),
        }
      ).then(res => res.json())
      .catch(error => console.log(error));
}

const makeUpdateOrCreateRequest = (url, verb, body) => {
    return fetch(
        url,
        {
          method: verb,
          headers: new Headers(
            {
              Accept: "application/json"
            }),
          body: body
        }
      ).then(res => res.json())
      .catch(error => console.log(error));
}

export {
  makeGetRequest, makeUpdateOrCreateRequest
}
