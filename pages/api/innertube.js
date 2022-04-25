const Innertube = require('youtubei.js');

export default async (req, res) => { 
  async function example() { 
    const youtube = await new Innertube();
    const search = await youtube.search('Looking for life on Mars - Documentary');
    console.log(search)

    const music = await youtube.search('Interstellar Main Theme', { client: 'YTMUSIC' });
    console.log(music);
  }
  example()
  
}


