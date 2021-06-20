const submmitMessage = message =>
  fetch('https://tna-api-dev.herokuapp.com/message', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ content: message })
  })
    .then(response => response.json())
    .then(responseAsJson => responseAsJson.answer)
    .catch(data => console.error(data))

export default { submmitMessage }