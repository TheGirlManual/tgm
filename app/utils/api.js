const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://us-central1-interactive-coolture.cloudfunctions.net'
    : 'http://localhost:5000/interactive-coolture/us-central1';

export default function api(cloudFunction, body = {}, method = 'GET') {
  fetch(`${apiUrl}/${cloudFunction}`, {
    body: JSON.stringify(body),
    method,
  });
}
