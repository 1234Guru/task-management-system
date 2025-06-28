import axios from 'axios';

export async function getPosts(req, res) {
  const { q } = req.query; // optional search term
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // optional server‑side filter (keeps frontend payload small on large datasets)
    const items = q
      ? data.filter(p =>
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.body.toLowerCase().includes(q.toLowerCase())
        )
      : data;

    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upstream fetch failed' });
  }
}