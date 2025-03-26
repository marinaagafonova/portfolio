import React from 'react';
import { hardSkills } from '../../data';
import './hard-skills.css';

export const HardSkills: React.FC = () => {
	return (
		<section className='hard-skills section' id='hard-skills'>
			<h2 className='section__title text-cs'>Professional Skills</h2>
			<p className='section__subtitle'>
				My <span>Experience</span>
			</p>

			<div className='hard-skills__container container grid'>
				{hardSkills.map(({ name, percentage, description }, index) => {
					return (
						<div className='hard-skills__item' key={index}>
							<div className='hard-skills__titles'>
								<h3 className='hard-skills__name'>{name}</h3>
								<span className='hard-skills__number'>
									{percentage} <span>%</span>
								</span>
							</div>

							<p className='hard-skills__description'>{description}</p>

							<div className='hard-skills__bar'>
								<span
									className='hard-skills__percentage'
									style={{ width: `${percentage}%` }}
								>
									<span></span>
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
