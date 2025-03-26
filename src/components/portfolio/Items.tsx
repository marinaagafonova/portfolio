import React from 'react';
import { FramerMotion, Icons } from '../../libs';
import vkr from '../../assets/Agafonova_Mv_Vkr.pdf';
import article1 from '../../assets/article_1.pdf';
import article2 from '../../assets/article_2.pdf';

const { motion } = FramerMotion;

const { Download, GitHub, YouTube } = Icons;

type TPortfolioItem = {
	code: string;
	id: number;
	img: string;
	category: string;
	title: string;
	description?: string;
	github?: string;
	download?: string;
	youtube?: string;
};

type TProps = {
	portfolioItems: TPortfolioItem[];
};

export const Items: React.FC<TProps> = ({ portfolioItems }) => {
	const getFile = (code: string) => {
		switch(code) {
			case 'vkr':
				return vkr;
			case 'article1':
				return article1;
			case 'article2':
				return article2;
			default:
				return '';
		}
	}

	return (
		<>
			{portfolioItems.map(item => {
				const { code, github, id, img, category, title, description, download, youtube } = item;

				return (
					<motion.div
						layout
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0.8, scale: 0.6 }}
						exit={{ opacity: 0.8, scale: 0.6 }}
						transition={{ duration: 0.3 }}
						className='portfolio__item card card-two'
						key={id}
					>
						<div className='portfolio__img-wrapper'>
							<img src={img} alt='' className='portfolio__img' />
						</div>
						<span className='portfolio__category text-cs'>{category}</span>
						<h3 className='portfolio__title'>{title}</h3>
						{description && <p className='portfolio__description'>
							{description}
						</p>}
						<div className='links__container'>
						{github && <a className='footer__social-link' href={github}><div className='link-with-icon'>GitHub repo <GitHub /></div></a>}
						{youtube && <a className='footer__social-link' href={youtube}><div className='link-with-icon'>Запись <YouTube /></div></a>}
						{download && <a className='footer__social-link' rel="noreferrer" download={download} href={getFile(code)}><div className='link-with-icon'>Скачать <Download/></div></a>}
						</div>
					</motion.div>
				);
			})}
		</>
	);
};
