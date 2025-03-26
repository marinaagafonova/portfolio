enum CVCategories {
	Education = 'education',
	Experience = 'experience',
}
export type TCVItem = {
	id: number;
	title: string;
	subtitle: string;
	date: string;
	description: string;
	category: CVCategories;
};

export const cv: TCVItem[] = [
	{
		id: 0,
		title: 'Бакалариат',
		subtitle: 'ВГУ - факультет компьютерных наук',
		date: '2017-2021',
		description:
			`Обучение на специальности "Программная инженерия" факультета компьютерных наук.
			Средний балл - 4,725.
			Тема диплома - "Разработка надстройки для документа Word и приложения для ПК по управлению существующими шаблонами"`,
		category: CVCategories.Education,
	},
	{
		id: 1,
		title: 'Магистратура',
		subtitle: 'ИТМО - ФПИиКТ',
		date: '2021-2023',
		description:
			`Обучение на программе "Веб-технологии" факультета программной инженерии и компьютерной техники.
			Средний балл - 4,93.
			Тема диплома - "Исследование оптимизации рендеринга компонентов в ReactJS". 
			В течение обучения были написаны две научные статьи:
			1) Обзор методов оптимизации рендеринга приложения, разработанного с помощью клиентских фреймворков
			2) Обзор влияния различных библиотек и различной реализации компонента на производительность ReactJS приложения`,
		category: CVCategories.Education,
	},
	{
		id: 2,
		title: 'СorePartners',
		subtitle: 'junior .NET dev/full-stack',
		date: 'июнь 2020 - январь 2021',
		description: 'Разработка на .NET Framework, написание SQL запросов, хранимых процедур, связанных с отчётами Crystal Reports. Работа с React Native приложением. Ревью кода',
		category: CVCategories.Experience,
	},
	{
		id: 3,
		title: 'MediaNation',
		subtitle: '.NET dev',
		date: 'февраль 2021 - январь 2022',
		description: 'Занималась проектом по автоматизированным отчётам для SEO. Стэк технологий состоял из .NET Core, Django, Postgres. Из рабочих задач было: аналитика данных в БД, разработка новых требований, фикс существующих ошибок, настройка сервисов (cron, развертывание .NET Core, django, vue js приложений) на сервере Ubuntu.',
		category: CVCategories.Experience,
	},
	{
		id: 4,
		title: 'Arcadia',
		subtitle: 'full-stack dev',
		date: 'февраль 2022 - июль 2022',
		description: 'Работала как над back-end задачами (.NET), так и front-end. В большей степени задачи по front-end касались модулей, написанных на ReactJS, но были задачи и по Angular, в рамках которых для нового функционала писала unit-тесты.',
		category: CVCategories.Experience,
	},
	{
		id: 5,
		title: 'Nexign',
		subtitle: 'Front-end dev',
		date: 'август 2022 - н.в.',
		description: `Разрабатывала новый функционал, вошла в состав ревьюеров-maintainer'ов проекта, летом 2023 провела свои первые собеседования, которые были на позицию стажёра. После занималась менторством стажёра, попавшего в нашу команду. Зимой 2023 уже начала собеседовать кандидатов с уровнем middle в нашу команду.`,
		category: CVCategories.Experience,
	},
];
