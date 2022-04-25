export default async (req, res) => { 
  const channels = [
    'UCsBjURrPoezykLs9EqgamOA',
    'UCW5YeuERMmlnqo4oq8vwUpg',
    'UCtxCXg-UvSnTKPOzLH4wJaQ'
  ]

  async function fetchAll() {
    var key = process.env.NEXT_PUBLIC_YOUTUBE_KEY
    const results = await Promise.all(
      channels.map((id) => fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${key}`)
        .then((r) => r.json())
      )
    );
    // console.log(JSON.stringify(results, null, 2));
    // console.log(results)

    let tubers = results.map((result) => { 
      // const { subscriberCount, viewCount, videoCount } = result.items[0].statistics
      return result.items[0].statistics
      // return res.status(200).json({
      //   subscriberCount, videoCount, viewCount
      // })
    })


    console.log(tubers);

    // const { subscriberCount, viewCount, videoCount } = results.items[0].statistics

    // return res.status(200).json({
    //   subscriberCount, videoCount, viewCount
    // })

  }
  fetchAll();  
}

