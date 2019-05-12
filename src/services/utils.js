const makeRequest = async (url, config = {}) => {
  try {
    const response = await fetch(url, config)
    const json = await response.json()
    return json
  } catch (e) {
    return null
  }
}

export const makeGetRequest = url => makeRequest(url)

export const makePostRequest = (url, data) => {
  return makeRequest(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
