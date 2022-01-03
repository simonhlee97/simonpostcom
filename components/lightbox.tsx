import React, { useState } from 'react'

type BoxProps = {
	src: string
	alt: string
	Wrapper: any
	zIndex: number
	children: any
}

const LightBox = ({ children, src, alt = 'gallery', Wrapper, zIndex }: BoxProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleIsOpen = () => {
		setIsOpen(!isOpen)
	}
	return (
		<Wrapper onClick={toggleIsOpen}>
			{children}
			{isOpen ? (
				<div
					onClick={toggleIsOpen}
					style={{
						position: 'fixed',
						top: '0',
						left: '0',
						height: '100vh',
						width: '100vw',
						backgroundColor: 'rgba(0,0,0,0.7)',
						cursor: 'pointer',
						zIndex,
					}}>
					<img
						src={src}
						alt={alt}
						style={{
							height: 'auto',
							width: '100%',
						}}
					/>
				</div>
			) : null}
		</Wrapper>
	)
}

export default LightBox
