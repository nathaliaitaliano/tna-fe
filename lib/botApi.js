const submmitMessage = message =>
  fetch('http://localhost:8080/message', {
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