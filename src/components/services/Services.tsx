import React, { useState } from 'react';
import { services } from '../../data';
import { Icons } from '../../libs';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './services.css';

import { Pagination } from 'swiper/modules';
import { ServicesTypes } from '../../constants';
import { ServiceModal } from './details-cards';

const { ArrowRight } = Icons;

const { piterJsSpeech } = ServicesTypes; 

const servicesTypes = Object.values(ServicesTypes);

export const Services: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState(piterJsSpeech);
	
	const handleModalOpen = (code: ServicesTypes) => {
		setModalType(code);
		setIsModalOpen(true);
	}

	const handleModalClose = () => {
		setIsModalOpen(false);
	}

	return (
		<>
			<section className='services section' id='services'>
				<h2 className='section__title text-cs'>What I Do</h2>
				<p className='section__subtitle'>
					My <span>Services</span>
				</p>

				<Swiper
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						540: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
					modules={[Pagination]}
					className='services__container container mySwiper'
				>
					{services.map(({ code, name, title, description }, index) => (
						<SwiperSlide className='services__item card card-one' key={index}>
							<span className='services__subtitle text-cs'>{name}</span>

							<h3 className='services__title'>{title}</h3>
							<p className='services__description'>{description}</p>

							{servicesTypes.includes(code as ServicesTypes) && <button className='link' onClick={() => handleModalOpen(code as ServicesTypes)}>
								See more
								<ArrowRight className='link__icon'></ArrowRight>
							</button>}

							{/* <img src={shape2} alt='' className='shape c__shape' /> */}
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<ServiceModal isModalOpened={isModalOpen} modalType={modalType} onClose={handleModalClose}/>
		</>
	);
};
