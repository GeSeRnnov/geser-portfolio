const contentPersonalData = [];
contentPersonalData["First name"] = "George";
contentPersonalData["Last Name"] = "Rukomin";
contentPersonalData["Gender"] = "male";
contentPersonalData["Age"] = "33";
contentPersonalData["Country"] = "Russian Federation";
contentPersonalData["City"] = "Nizhny Novgorod";
contentPersonalData["E-mail"] = "gesernnov@gmail.com";

const contentObjective = [];
contentObjective["Front-end engineer"] = "-	React web-app developing;";
contentObjective["_hide2"] = "-	Maintaining existing projects;";

const contentKeySkills = [];
contentKeySkills["Front-end"] = "- ReactJS";
contentKeySkills["_hide2"] = "- JavaScript";
contentKeySkills["_hide3"] = "- JQuery";
contentKeySkills["_hide4"] = "- CSS(SASS)";
contentKeySkills["_hide15"] = "_hide";
contentKeySkills["Back-end"] = "- Node.js";
contentKeySkills["_hide8"] = "- PHP";
contentKeySkills["_hide9"] = "- MySQL";
contentKeySkills["_hide16"] = "_hide";
contentKeySkills["Other"] = "- Github";
contentKeySkills["_hide11"] = "- MS SQL Server";
contentKeySkills["_hide12"] = "- MS SSAS";
contentKeySkills["_hide13"] = "- MS SSRS";
contentKeySkills["_hide14"] = "- MS SSIS";

const contentEducation = [];
contentEducation["First education:"] = "_hide_underline";
contentEducation["University"] = "Lobachevsky University";
contentEducation["Site"] = "http://eng.unn.ru";
contentEducation["Faculty"] = "Radiophysical";
contentEducation["Graduation year"] = "2010";
contentEducation["_hide"] = "_hide";
contentEducation["Second education:"] = "_hide_underline";
contentEducation["University "] = "Lobachevsky University";
contentEducation["Site "] = "http://eng.unn.ru";
contentEducation["Faculty "] = "Finansial";
contentEducation["Graduation year "] = "2012";


export const cardsContent = [
	{
		icon: 'account_box',
		category: 'personalData',
		cardHeader: 'Personal details',
		cardContent: contentPersonalData,
	},
	{
		icon: 'gps_fixed',
		category: 'objective',
		cardHeader: 'Objective',
		cardContent: contentObjective,
	},
	{
		icon: 'thumb_up',
		category: 'keySkills',
		cardHeader: 'Key skills',
		cardContent: contentKeySkills,
	},
	{
		icon: 'assignment',
		category: 'education',
		cardHeader: 'Education',
		cardContent: contentEducation,
	},
];


