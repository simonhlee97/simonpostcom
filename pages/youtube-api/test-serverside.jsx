import React, { useState } from 'react'
import styles from '../../styles/tabstyles.module.css'
import { fetchData } from '../../lib/utils'
import Container from '../../components/container'
import AmericaList from '../../components/YoutubeApiPage/AmericaList'
import KoreaList from '../../components/YoutubeApiPage/KoreaList'

export default function TopFive({ stats, koreaStats }) {
	const [activeTab, setActiveTab] = useState('tab1')
	const handleTab1 = () => {
		setActiveTab('tab1')
	}
	const handleTab2 = () => {
		setActiveTab('tab2')
	}
	
	return (
		<Container>
			<div className={styles.Tabs}>
				<h2 className="page-header">Top 5 Most Views During Last 24 Hours (Korea and USA)</h2>
				<p className="text-sm text-center">updated every 24 hours</p>
				<ul className={styles.nav}>
					<li className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}>
						Korea 🇰🇷
					</li>
					<li className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}>
						USA 🇺🇸
					</li>
				</ul>
				<div className={styles.outlet}>
					{activeTab === 'tab1' ? (
						<KoreaList koreaStats={koreaStats} />
					) : (
						<AmericaList stats={stats} />
					)}
				</div>
			</div>
		</Container>
	)
}

// getServerSideProps gets called on every request
export async function getServerSideProps() {

	var KEY = process.env.NEXT_PUBLIC_YOUTUBE_KEY
	const usaUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=5&key=${KEY}`
	const koreaUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&maxResults=5&key=${KEY}`

	async function getData() {
		const usaData = fetchData(usaUrl)
		const koreaData = fetchData(koreaUrl)

		return {
			stats: await usaData,
			koreaStats: await koreaData,
		}
	}
	const { stats, koreaStats } = await getData()
	return {
		props: {
			stats: stats.items,
			koreaStats: koreaStats.items,
		},
	}

  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  // return { props: { data } }
}
