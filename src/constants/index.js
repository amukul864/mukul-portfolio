import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	cpp,
	java,
	reactjs1,
	leetcode,
	competitive,
	bank,
	portfolio,
	gpt,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Frontend Developer",
		icon: backend,
	},
	{
		title: "Competitive Programmer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "c++",
		icon: cpp,
	},
	{
		name: "java",
		icon: java,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		link: "/",
		company_name: "Projects",
		icon: reactjs1,
		iconBg: "#383E56",
		date: "April 2020 - Present",
		points: [
			"Developed three main projects and some minor projects using reactjs and related technologies.",
			"Used tailwindcss and advanced animations.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
	{
		title: "Competitive Programmer",
		link: "https://www.codechef.com/users/mukularora_007",
		company_name: "Codechef",
		icon: competitive,
		iconBg: "#E6DEDD",
		date: "Aug 2022 - Present",
		points: [
			"Competed in 14 contests and solved 60 questions.",
			"Current codechef rating- 1494 with higest rating- 1549.",
		],
	},
	{
		title: "Problem Solver",
		link: "https://leetcode.com/amukul864/",
		company_name: "Leetcode",
		icon: leetcode,
		iconBg: "#383E56",
		date: "Aug 2022 - Present",
		points: [
			"Passionate about solving problems.",
			"Solved 100 questions.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Bank App",
		description:
			"Web-based platform that allows users to do the bank/cash transactions online and handle the money.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "green-text-gradient",
			},
			{
				name: "vite",
				color: "pink-text-gradient",
			},
		],
		image: bank,
		project_link: "https://bank-app-fe4ce.web.app/",
		source_code_link: "https://github.com/amukul864/bank_app",
	},
	{
		name: "Personal Portfolio",
		description:
			"I have created a web application to showcase my work and skills as a web developer in my personal portfolio.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		project_link: "/",
		source_code_link: "https://github.com/amukul864/mukul-portfolio",
	},
	{
		name: "GPT-3 JSM",
		description:
			"A comprehensive platform which gives the knowledge about GPT-3 and tells about the future possibilities.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "gradients",
				color: "pink-text-gradient",
			},
		],
		image: gpt,
		project_link: "https://gpt3-jsm-b1647.web.app/",
		source_code_link: "https://github.com/amukul864/gpt3_jsm",
	},
];

export { services, technologies, experiences, testimonials, projects };
