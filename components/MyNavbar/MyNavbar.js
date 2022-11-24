import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export const MyNavbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
    <nav className='navbar'>
			<Link href="/">
				<a className='nav-logo'>Simon-Sandbox</a>
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
				<li className="nav-item">
					<Link href="/korea" onClick={closeMenu}>
						<a className="nav-link">Korea-Travel-Tips</a>
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/contact" onClick={closeMenu}>
						<a className="nav-link">Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
