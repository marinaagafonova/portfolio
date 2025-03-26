import React from 'react';
import { Icons } from '../../libs';
import './footer.css';

const { GitHub, Telegram } = Icons;

export const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container grid'>
				<div className='footer__socials'>
					<a href='https://github.com/marinaagafonova' className='footer__social-link'>
						<GitHub />
					</a>

					<a href='https://t.me/divracha' className='footer__social-link'>
						<Telegram />
					</a>
				</div>
			</div>
		</footer>
	);
};
