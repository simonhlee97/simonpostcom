import React from 'react'

const coders = [
  'UCsBjURrPoezykLs9EqgamOA',
  'UCW5YeuERMmlnqo4oq8vwUpg',
  'UCtxCXg-UvSnTKPOzLH4wJaQ'
]


export async function getServerSideProps() { 
  const channel = 'UCsBjURrPoezykLs9EqgamOA'
  const key = process.env.NEXT_PUBLIC_YOUTUBE_KEY
  const statsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel}&key=${key}`
  
  const res = await fetch(`${statsUrl}`)
  const data = await res.json()
  return {
    props: {
      data
    },
    // revalidate: 172800,
  }
}


export function FamousCoders({ data }) {
  console.log('DATA', data)

  return (
    <div>FamousCoders</div>
  )
}
