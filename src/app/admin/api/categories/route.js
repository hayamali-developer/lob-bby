

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(getItems());
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
