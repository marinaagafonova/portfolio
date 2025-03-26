import * as Assets from '../assets';

const { article1, article2, cSharp, diploma, itconf3, itmoMaster, petProject1, petProject2, piterJsOrg, piterJsSpeech, proIT_Fest, vsu } = Assets.images;

type TProject = {
	id: number;
	code: string;
	img: string;
	category: string;
	title: string;
	description?: string;
	github?: string;
	download?: string;
	youtube?: string;
}

export const projects: TProject[] = [
	{
		id: 0,
		code: 'petProject1',
		github: 'https://github.com/marinaagafonova/portfolio-app',
		img: petProject1,
		category: 'Front-end',
		title: 'Pet project on React and Vite',
	},
	{
		id: 1,
		code: 'petProject2',
		github: 'https://github.com/marinaagafonova/bubble-app',
		img: petProject2,
		category: 'Full-stack',
		title: 'Pet project on React and Flask',
	},
	{
		id: 2,
		code: 'petProject3',
		github: 'https://github.com/marinaagafonova/CV',
		img: cSharp,
		category: 'Back-end',
		title: 'Project on C#, .NET Core',
	},
	{
		id: 3,
		code: 'vkr',
		download: 'Agafonova_Mv_Vkr.pdf',
		img: diploma,
		category: 'Science',
		title: 'ВКР, магистратура ИТМО',
		description: 'Тема: "Исследование оптимизации рендеринга компонентов в ReactJS", май 2023',
	},
	{
		id: 4,
		code: 'article1',
		download: 'article_1.pdf',
		img: article1,
		category: 'Science',
		title: 'Первая научная статья',
		description: 'Тема: "Обзор методов оптимизации рендеринга приложения, разработанного с помощью клиентских фреймворков", февраль 2022',
	},
	{
		id: 5,
		code: 'article2',
		download: 'article_2.pdf',
		img: article2,
		category: 'Science',
		title: 'Вторая научная статья',
		description: 'Тема: "Обзор влияния различных библиотек и различной реализации компонента на производительность ReactJS приложения", май 2023'
	},
	{
		id: 6,
		code: 'speech1',
		img: piterJsSpeech,
		category: 'IT community',
		title: 'Выступление на PiterJS',
		youtube: 'https://youtu.be/uWJjVe4VOoM?si=31OUn2Sdivpo8MqG',
		description: 'Тема доклада: "Преимущества RTK Query и поучительный случай на enterprise проекте"',
	},
	{
		id: 7,
		code: 'speech2',
		img: itconf3,
		category: 'IT community',
		title: 'Выступление на IT_Conf 3.0',
		youtube: 'https://youtu.be/6zVEciomOaE?si=QT31q0JJ_es6UwX_&t=4445',
		description: 'Тема доклада: "Совершенный код в современных front-end приложениях"',
	},
	{
		id: 8,
		code: 'fest',
		img: proIT_Fest,
		category: 'IT community',
		title: 'Организация секции Frontend на ProIT Fest',
		description:
			'Консультирование по вопросам для круглого стола + организация игр от Nexign',
	},
	{
		id: 10,
		code: 'edu1',
		img: vsu,
		category: 'Education',
		title: 'Бакалавриат',
		description: 'Являюсь выпускницей направление "Программная инженерия" факультета компьютерных наук Воронежского государственного университета (2017-2021). Средний балл - 4.725',
	},
	{
		id: 11,
		code: 'edu2',
		img: itmoMaster,
		category: 'Education',
		title: 'Магистратура',
		description: 'Являюсь выпускницей программы "Веб-технологии" университета ИТМО (2021-2023). Средний балл - 4.93',
	},
	{
		id: 12,
		code: 'org',
		img: piterJsOrg,
		category: 'IT community',
		title: 'Участие в организации митапов PiterJS',
		description:
			'Монтаж видео, встреча гостей, видео-оператор, поиск спикеров',
	},
];
