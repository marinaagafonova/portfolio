import React, { useState } from 'react';

type TProps = {
	filterItems: (category: string) => void;
	list: string[];
};

export const List: React.FC<TProps> = ({ filterItems, list }) => {
	const [active, setActive] = useState(0);

	const handleCategorySelect = (category: string, index: number) => {
		setActive(index);
		filterItems(category);
	};

	return (
		<div className='portfolio__list'>
			{list.map((category, index) => {
				return (
					<button
						className={`${
							active === index ? 'active-work' : ''
						} portfolio__list-item text-cs`}
						key={index}
						onClick={() => handleCategorySelect(category, index)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};
