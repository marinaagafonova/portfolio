import React, { useEffect, useState } from 'react';
import { links } from '../../data';
import { Icons, Link, animateScroll } from '../../libs';
import './header.css';

const { GitHub, Linkedin, Telegram, Sun, Moon } = Icons;

const getStorageTheme = () => {
	const defaultTheme = 'dark-theme';
	const savedTheme = localStorage.getItem('theme')
	return savedTheme || defaultTheme;
}

export const Header: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [scrollNav, setScrollNav] = useState(false);
	const [theme, setTheme] = useState(getStorageTheme());

	const scrollTop = () => {
		animateScroll.scrollToTop();
	};

	const changeNav = () => {
		setScrollNav(window.scrollY >= 80);
	};

	const handleThemeChange = (themeName: string) => {
		setTheme(themeName);
		localStorage.setItem('theme', themeName);
		document.documentElement.className = themeName;
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, []);

	useEffect(() => {
		document.body.classList.toggle('no-scroll', showMenu);
	}, [showMenu]);

	const lightThemeToggler = (
		<div className='theme__toggler' onClick={() => handleThemeChange('light-theme')}>
			<Sun />
		</div>);

	const darkThemeToggler = (
		<div className='theme__toggler' onClick={() => handleThemeChange('dark-theme')}>
			<Moon />
		</div>);

	return (
		<header className={`${scrollNav ? 'scroll-header header': 'header'}`}>
			<nav className='nav'>
				<Link to='/' onClick={scrollTop} className='nav__logo text-cs'>
					divracha
				</Link>

				<div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
					<div className='nav__data'>
						<ul className='nav__list'>
							{links.map(({ name, path }, index) => (
								<li className='nav_item' key={index}>
									<Link
										className='nav__link text-cs'
										to={path}
										spy={true}
										hashSpy={true}
										smooth={true}
										offset={-150}
										duration={500}
										onClick={() => setShowMenu(!showMenu)}
									>
										{name}
									</Link>
								</li>
							))}
						</ul>

						<div className='header__socials'>
							<a href='' className='header__social-link'>
								<GitHub />
							</a>

							<a href='' className='header__social-link'>
								<Linkedin />
							</a>

							<a href='' className='header__social-link'>
								<Telegram />
							</a>
						</div>
					</div>
				</div>

				<div className='nav__btns'>
					{theme === 'dark-theme' ? lightThemeToggler : darkThemeToggler}

					<div
						className={`${
							showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'
						}`}
						onClick={() => setShowMenu(prevState => !prevState)}
					>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>
		</header>
	);
};
