import React from 'react';
import { cv } from '../../data';
import { Card } from './Card';
import './resume.css';

export const Resume: React.FC = () => {
	return (
		<section className='resume section' id='resume'>
			<h2 className='section__title text-cs'>Resume</h2>
			<p className='section__subtitle'>
				My <span>Story</span>
			</p>

			<div className='resume__container container grid'>
				<div className='resume__group'>
					<h3 className='resume__heading'>Education</h3>

					<div className='resume__items'>
						{cv.map((item, index) => {
							if (item.category === 'education') {
								return <Card key={index} itemInfo={item} />;
							}
						})}
					</div>
				</div>

				<div className='resume__group'>
					<h3 className='resume__heading'>Experience</h3>

					<div className='resume__items'>
						{cv.map((item, index) => {
							if (item.category === 'experience') {
								return <Card key={index} itemInfo={item} />;
							}
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
