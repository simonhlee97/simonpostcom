export function CodersList(props) {
  console.log(props);
  return (
    <h2>Hello Stay</h2>
    // <>
    //   <h1>List of Celeb-level YouTubers</h1>
    //   {coders.map(coder => {
    //     return (
    //       <div key={coder.name}>
    //         <h2>
    //           {coder}
    //         </h2>
    //         <hr />
    //       </div>
    //     )
    //   })}
    // </>
  )
}

var key = process.env.NEXT_PUBLIC_YOUTUBE_KEY

export async function getStaticProps() {
  const channels = [
    'UCsBjURrPoezykLs9EqgamOA',
    'UCW5YeuERMmlnqo4oq8vwUpg',
    'UCtxCXg-UvSnTKPOzLH4wJaQ'
  ]
  let id = 'UCsBjURrPoezykLs9EqgamOA'

  const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${key}`)
  const data = await res.json()

  // await Promise.all(
  //   channels.map(async (id) => {
  //     const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${key}`)
  //     const data = await res.json()
  //     console.log(data);
  //   })
  // )

  // let data = channels.map((item) => {
  //   console.log(item.length)
  // });

  // for (const id of channels) {
  //   const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${key}`)
  //   const data = await res.json()
  //   console.log(data);
  // }

  return {
    props: {
      data
    },
    // revalidate: 172800,
  }
}