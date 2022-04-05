import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const TailNavbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
    <nav className='navbar'>
			<Link href="/" className='nav-logo'>
				<a>SimonPost</a>
			</Link>
			<div onClick={handleClick} className='nav-icon'>
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
          <Link href="/" onClick={closeMenu}>
						<a className="nav-link">Home</a>
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/about" onClick={closeMenu}>
						<a className="nav-link">About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default TailNavbar;