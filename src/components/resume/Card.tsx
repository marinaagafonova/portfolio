import React, { useState } from 'react';
import { TCVItem } from '../../data';

type TProps = {
	itemInfo: TCVItem;
};

export const Card: React.FC<TProps> = ({ itemInfo }) => {
	const {title, subtitle, date, description } = itemInfo;

	const [showInfo, setShowInfo] = useState(false);
	return (
		<div className='resume__item'>
			<div
				className='resume__header'
				onClick={() => setShowInfo(prevState => !prevState)}
			>
				<h3 className='resume__subtitle'>{title}</h3>
				<span className='resume__icon'>{showInfo ? '-' : '+'}</span>
			</div>

			<div className={showInfo ? 'show-content resume__content' : 'resume__content'}>
				<div className='resume__date-title'>
					<h3 className='resume__title'>{subtitle}</h3>
					<span className='resume__date text-cs'>{date}</span>
				</div>

				<p className='resume__description'>{description}</p>
			</div>
		</div>
	);
};
