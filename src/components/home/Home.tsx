import React from 'react';
import * as Assets from '../../assets';
import cv from '../../assets/cv.pdf';
import { Icons, Link } from '../../libs';
import './home.css';

const { GitHub, Telegram } = Icons;
const { profileImg, shape1, shape2 } = Assets.images;

export const Home: React.FC = () => {
	return (
		<section className='home' id='home'>
			<div className='home__wrapper'>
				<div className='home__container container'>
					<p className='home__subtitle text-cs'>
						Hello, <span>my name is</span>
					</p>

					<h1 className='home__title text-cs'>
						<span>MARINA</span> <br /> AGAFONOVA
					</h1>

					<p className='home__job'>
						<span className='text-cs'>I am</span> <b>Front-end Developer</b>
					</p>

					<div className='home__img-wrapper'>
						<div className='home__banner'>
							<img src={profileImg} alt='' className='home__profile' />
						</div>

						<p className='home__data home__data-one'>
							<span className='text-lg'>
								4 <b>+</b>
							</span>

							<span className='text-sm text-cs'>
								Years of <span>Experience</span>
							</span>
						</p>

						<p className='home__data home__data-two'>
							<span className='text-lg'>2</span>

							<span className='text-sm text-cs'>
								Public <span>Speeches</span>
							</span>
						</p>

						<img src={shape1} alt='' className='shape shape__1' />
						<img src={shape2} alt='' className='shape shape__2' />
						<img src={shape2} alt='' className='shape shape__3' />
					</div>

					<p className='home__text'>Разрабатываю на ReactJS фреймворке, хорошо владею RTK Query, являюсь одним из ревьюеров-mainterner в своей команде.</p>

					<div className='home__socials'>
						<a href='https://github.com/marinaagafonova' className='home__social-link'>
							<GitHub />
						</a>

						<a href='https://t.me/divracha' className='home__social-link'>
							<Telegram />
						</a>
					</div>

					<div className='home__btns'>
						<a href={cv} className='btn text-cs' rel="noreferrer" download="cv.pdf">
							Download CV
						</a>
						<nav className='nav'>
							<Link to='hard-skills' className='skills text-cs'>
								My skills
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};
