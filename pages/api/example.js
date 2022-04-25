const Innertube = require('youtubei.js');

async function handler(req, res) {
  const youtube = await new Innertube();
  const search = await youtube.search('espn first take');
  console.log(search);
  res.status(200).json()
}
export default handler