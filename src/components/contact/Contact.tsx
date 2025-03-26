import React from 'react';
import { Button, Form, Input, notification } from "antd";

import { Icons } from '../../libs';
import './contact.css';

const { RegAddressBook, RegEnvelope, RegMap } = Icons;

type TFormValues = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export const Contact: React.FC = () => {
	const [api, contextHolder] = notification.useNotification();

	const showSuccessNotification = () => {
		api['success']({
			message: 'Успешно',
			description: 'Спасибо, ваше сообщение было отправлено',
			placement: 'bottomLeft'
		});
	}

	const showErrorNotification = (error: string) => {
		api['error']({
			message: 'Произошла ошибка',
			description: error,
			placement: 'bottomLeft'
		});
	}

	const handleFormFinish = (allFormvalues: TFormValues) => {
		const { name, email, subject, message} = allFormvalues;
		const url = 'https://script.google.com/macros/s/AKfycbzPRg1IXs8vYblc2VAEjgKPLqmvGORgC7SzyXoDSz6HJumwngrMFYnDuTrHL5-rVmx-yA/exec';
		
		fetch(url, {
			mode: 'no-cors',
			method: 'POST',
			headers: { 'Access-Control-Allow-Origin': "*", "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
          "Access-Control-Max-Age": "86400", "Content-Type": "application/x-www-form-urlencoded" },
			body: (`name=${name}&email=${email}&subject=${subject}&message=${message}`)
		}).then(res => res.text()).then(() => showSuccessNotification()).catch(error => showErrorNotification(error.message))
	}

	const myContactInfo = <div className='contact__content'>
		<div className='contact__card'>
			<span className='contact__card-icon'>
				<RegMap />
			</span>

			<h3 className='contact__card-title'>Address</h3>
			<p className='contact__card-data'>Saint-Petersburg, Russia</p>
		</div>

		<div className='contact__card'>
			<span className='contact__card-icon'>
				<RegEnvelope />
			</span>

			<h3 className='contact__card-title'>Email</h3>
			<p className='contact__card-data'>agafonova_marina@yahoo.com</p>
		</div>

		<div className='contact__card'>
			<span className='contact__card-icon'>
				<RegAddressBook />
			</span>

			<h3 className='contact__card-title'>Phone</h3>
			{/* make callable link */}
			<p className='contact__card-data'>+7 900 - 958 - 99 - 52</p>
		</div>
	</div>;

	const customizeRequiredMark  = (label: React.ReactNode, { required }: { required: boolean }) => <>{required ? <label className='contact__form-tag text-cs'><b>*</b></label> : ''}{label}</>

	return (
		<>
			{contextHolder}
			<section className='contact section' id='contact'>
				<h2 className='section__title text-cs'>Contact Me</h2>

				<div className='contact__container container grid'>
					{myContactInfo}
					<Form layout="vertical" name="contact-form" onFinish={handleFormFinish} requiredMark={customizeRequiredMark}>

						<Form.Item className='customized-label' label="Your full name" name="name" rules={[{ required: true, message: 'Your fullname is required' }]}>
							<Input autoComplete="off" className='contact__form-input' />
						</Form.Item>

						<Form.Item className='customized-label' label="Your email address" name="email" rules={[{ required: true, type: 'email' }]}>
							<Input autoComplete="off" className='contact__form-input' />
						</Form.Item>

						<Form.Item className='customized-label' label="Your Subject" name="subject" rules={[{ required: true, message: 'The subject is required' }]}>
							<Input autoComplete="off" className='contact__form-input' />
						</Form.Item>

						<Form.Item className='customized-label' label="Your Message" name="message" rules={[{ required: true, message: 'The message is required' }]}>
							<Input.TextArea className='contact__form-input' rows={5} />
						</Form.Item>

						<Button htmlType="submit" className='contact__submit btn text-cs'>Send message</Button>

					</Form>
				</div>
			</section>
		</>
	);
};
