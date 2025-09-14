
const entriesGlobalURL 	= 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
const localGlobalURL	= 'src/';

let entriesSkill = [
	// Unity Engine
	{
		image: entriesGlobalURL + 'unity/unity-original-wordmark.svg', ratio: 1, width:'100', height:'100', 
		url: 'abcdef',target: '_top',
    },
];

let gameDevSkill = [
	// Unity Engine
	{
		image: entriesGlobalURL + 'unity/unity-original-wordmark.svg', ratio: 1.5, width:'150', height:'150', 
		url: 'abcdef',target: '_top',
    },

	// Unreal Engine
	{
		image: entriesGlobalURL + 'unrealengine/unrealengine-original-wordmark.svg', ratio: 1, width:'100', height:'100', 
		url: 'abcdef',target: '_top',
    },

	// Blender
	{
		image: entriesGlobalURL + 'blender/blender-original.svg', ratio: 0.5, width:'50', height:'50', 
		url: 'abcdef',target: '_top',
    },

	// .Mirror
	{
		image: localGlobalURL + 'img/skills/mirror.png', ratio: 0.5, width:'7505', height:'50', 
		url: 'abcdef',target: '_top',
    },
]

let fullStackSkill = [
	// C# Programming Language
	{
		image: entriesGlobalURL + 'csharp/csharp-original.svg', ratio: 1.5, width:'150', height:'150', 
		url: 'abcdef',target: '_top',
    },

	// .NET Programming Language
	{
		image: entriesGlobalURL + 'dot-net/dot-net-original-wordmark.svg', ratio: 1, width:'100', height:'100', 
		url: 'abcdef',target: '_top',
    },

	// .Java Programming Language
	{
		image: entriesGlobalURL + 'java/java-original.svg', ratio: 0.5, width:'50', height:'50', 
		url: 'abcdef',target: '_top',
    }
];

let webDevSkill = [
	// .PHP Programming Language
	{
		image: entriesGlobalURL + 'php/php-original.svg', ratio: 1.5, width:'150', height:'150', 
		url: 'abcdef',target: '_top',
    },

	// .JavaScript Programming Language
	{
		image: entriesGlobalURL + 'javascript/javascript-original.svg', ratio: 1.25, width:'125', height:'125', 
		url: 'abcdef',target: '_top',
    },

	// .TypeScript Programming Language
	{
		image: entriesGlobalURL + 'typescript/typescript-original.svg', ratio: 1, width:'100', height:'100', 
		url: 'abcdef',target: '_top',
    },

	// .NodeJS Programming Language
	{
		image: entriesGlobalURL + 'nodejs/nodejs-plain-wordmark.svg', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .Bootstrap
	{
		image: entriesGlobalURL + 'bootstrap/bootstrap-original.svg', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .Laravel
	{
		image: localGlobalURL + 'img/skills/laravel.svg', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .HTML5
	{
		image: entriesGlobalURL + 'html5/html5-original.svg', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .Socket
	{
		image: localGlobalURL + 'img/skills/socket-io.svg', ratio: 0.5, width:'7505', height:'50', 
		url: 'abcdef',target: '_top',
    },

	// .CSS
	{
		image: entriesGlobalURL + 'css3/css3-original.svg', ratio: 0.5, width:'50', height:'50', 
		url: 'abcdef',target: '_top',
    },

	{
		image: entriesGlobalURL + 'sass/sass-original.svg', ratio: 0.5, width:'50', height:'50', 
		url: 'abcdef',target: '_top',
    },
];

let geoSkill = [
	// .Leaflet
	{
		image: localGlobalURL + 'img/skills/leaflet.png', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .ArcGIS
	{
		image: localGlobalURL + 'img/skills/arcgis.png', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .MapBox
	{
		image: entriesGlobalURL + 'mapbox/mapbox-original.svg', ratio: 1.25, width:'125', height:'125', 
		url: 'abcdef',target: '_top',
    },
];

let databaseSkill = [
	// .Postgresql
	{
		image: entriesGlobalURL + 'postgresql/postgresql-original.svg', ratio: 1, width:'100', height:'100', 
		url: 'abcdef',target: '_top',
    },

	// .MongoDB
	{
		image: entriesGlobalURL + 'mongodb/mongodb-original-wordmark.svg', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .Mysql
	{
		image: entriesGlobalURL + 'mysql/mysql-original-wordmark.svg', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .Firebase
	{
		image: entriesGlobalURL + 'firebase/firebase-original.svg', ratio: 0.5, width:'50', height:'50', 
		url: 'abcdef',target: '_top',
    }
]

let devopsSkill = [
	// .NPM
	{
		image: entriesGlobalURL + 'npm/npm-original-wordmark.svg', ratio: 1, width:'100', height:'100', 
		url: 'abcdef',target: '_top',
    },

	// .Git
	{
		image: entriesGlobalURL + 'git/git-original.svg', ratio: 1, width:'100', height:'100', 
		url: 'abcdef',target: '_top',
    },

	// .Gitlab
	{
		image: entriesGlobalURL + 'gitlab/gitlab-original.svg', ratio: 0.75, width:'75', height:'75', 
		url: 'abcdef',target: '_top',
    },

	// .Github
	{
		image: entriesGlobalURL + 'github/github-original.svg', ratio: 0.5, width:'50', height:'50', 
		url: 'abcdef',target: '_top',
    },
]

let svgTagCloudSettings = {
	entries: entriesSkill,
    width: 750,
    height: 650,
    radius: '75%',
    radiusMin: 100,
    bgDraw: false,
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.05,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#fff',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    animatingSpeed: 0.001,
    animatingRadiusLimit: 1.5
}