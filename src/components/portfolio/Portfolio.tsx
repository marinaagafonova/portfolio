import React, { useState } from 'react';
import { projects } from '../../data';
import { FramerMotion } from '../../libs';
import { Items } from './Items';
import { List } from './List';
import './portfolio.css';

const { AnimatePresence } = FramerMotion;

const allNavList = [
	'all',
	...new Set(projects.map(project => project.category)),
];

export const Portfolio: React.FC = () => {
	const [portfolioItems, setPortfolioItems] = useState(projects);
	const [navList, setCategories] = useState(allNavList);

	const filterItems = (category: string) => {
		if (category === 'all') {
			setPortfolioItems(projects);
		} else {
			const newProjectItem = projects.filter(
				item => item.category === category
			);

			setPortfolioItems(newProjectItem);
		}
	};

	return (
		<section className='portfolio section' id='works'>
			<h2 className='section__title text-cs'>Portfolio</h2>
			<p className='section__subtitle'>
				My <span>Cases</span>
			</p>

			<List filterItems={filterItems} list={navList} />

			<div className='portfolio__container container grid'>
				<AnimatePresence initial={false}>
					<Items portfolioItems={portfolioItems} />
				</AnimatePresence>
			</div>
		</section>
	);
};
