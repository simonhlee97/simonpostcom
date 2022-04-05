import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import styles from './Navbar.module.css';

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
          <Link href="/" className='nav-link' onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/about" className='nav-link' onClick={closeMenu}>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default TailNavbar;