import jquery from '../../img/jquery-icon.svg';
import react from '../../img/react-brands.svg';
import css from '../../img/css3-brands.svg';
import html from '../../img/html5-brands.svg';
import bootstrap from '../../img/bootstrap-brands.svg';
import javascript from '../../img/js-brands.svg';
import php from '../../img/php-brands.svg';
import mysql from '../../img/database-solid.svg';
import node from '../../img/nodejs.svg';
import wordpress from '../../img/wordpress.svg';
import redux from '../../img/redux.svg';
import material from '../../img/material-ui.svg';
import express from '../../img/express.svg';

const web = "web"
const webDev = 'Web Development';
// const webDesign = 'Web Design'

const illustration = 'illustration';
const graphic = 'graphics';
const typography = "Typography";
const concept = "Concept";
const digital = 'Digital';
const paint = "Paint";

const works = [

    // WEBBBBBBBBB
    {
        mainImg: 'wildfireICS.png',
        title: 'JavaScript Full-Stack Web-Application',
        topic: 'Wildfire ICS',
        url: 'wildfire-ics',
        date: '2021 / Senior Project',
        objective: 'Creating a fullstack web-application that utilizes Javascript Libraries and Frameworks for my final capstone project',
        idea: 'To create a JavaScript Web Application for Wildfire Chiefs to manage and locate wildfires based on the ICS systems utilizing \'crowdsourced\' information',
        process: 'Before building the application, I had to conduct additional research on how wildfires are handled based on the ICS systems and other protocols that are involved when handling and reporting wildfires. I had to conduct interviews with people who had experience working with either structural and wildland wildfires to gain further insight and to further improve on the product. Additionally, I also researched more into the feasibility of crowdsourcing information to detect occurrences based on location from social media. ',
        design: 'The design process of the application was dependent on how Material UI design system’s stylized its components. I wanted to have this application to have a very simple style with enough information for the Wildfire Chief (also known as the Incident Commander), to evaluate the incidents. As a result, I ensured that the design of the application had simple design layouts, minimal color palette with a few highlighting colors, and providing short-copy for further explanation of the UI component.',
        development: 'The development process of the application used Redux for state management, Material UI for design systems, and Node.js with Express.js for API management. Utilizing Redux Toolkit for the first time was quite an interesting process, since I\'m more familiar with standard Redux. After understanding how Redux Toolkit works, it became easier to read and update state through the React UI components and Formik’s forms (a React-based library for form management). The most difficult part of the project was to ensure that DRY principles were implemented whenever possible and understanding how to efficiently use Redux Toolkit throughout the application. ',
        secondaryImg: 'wildfireICSincidents.png',
        ternaryImg: 'wildfireICScases.png',
        resultImg: 'wildfireICS.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [react, redux, node, express, material],
        supportImg: true,
        detailId: 1,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/Wildfire',
        website: 'https://wildfireics-app.herokuapp.com',
        wireframes: true,
        wireframesLink: 'https://xd.adobe.com/view/0ac8097b-060b-44e0-a19d-1da7acb8669a-5f9b/'
    },
    {
        mainImg: 'bineshomepage.jpg',
        title: 'WordPress Development',
        topic: 'Bines Portfolio Site',
        url: 'bines-portfolio',
        date: '2020 / Senior Project',
        objective: 'Creating a WordPress site utilizing ACF, custom templating, and PHP',
        idea: 'To create a portfolio site for an artist who needed a site to showcase their artworks',
        process: 'The requirements of the project was to utilize standard WordPress development practices that use common popular plugins, page template building, utilizing WordPress hooks, and writing functionalities in PHP. ',
        design: 'The design of the project is to focus on the artworks on the page rather than the website design itself. My friend who I built the site for wanted the website design to be very minimal with a huge emphasis on the artworks themselves. He provided examples of what websites components he liked and disliked and I utilized each aspect into this website design. ',
        development: 'The Development of the project was a learning process because I had to understand the WordPress files hierarchy. After understanding the hierarchy it made the development process a bit easier because I know which files belong to which section. Also understanding which functions goes into functions.php as well as knowing which WordPress hooks to use took some time to understand. However I eventually was able to understand which functions needed to be enqueued in functions.php as well as understanding some of the basic WordPress hooks.',
        secondaryImg: 'binesartwork.jpg',
        ternaryImg: 'binesartwork.jpg',
        resultImg: 'binesartworkpage.jpg',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [wordpress, bootstrap, php, css],
        supportImg: true,
        detailId: 1,
        githubRepo: false,
        githubLink: '',
        website: 'https://jeffersonjon.wpengine.com/',
        wireframes: false,
        wireframesLink: ''
    },
    {
        mainImg: 'JonHome.jpg',
        title: 'React Portfolio Site',
        topic: 'Jonathan Gene Photography',
        url: 'jonathan-gene-portfolio',
        date: '2020 / Client Project',
        objective: 'Creating a Portfolio site that emphasizes the photographer\'s images',
        idea: 'To create a portfolio site for an artist who needed a site to showcase their photography',
        process: 'The requirements of the project was simple, to create a portfolio site that has a fixed navigation on the left hand-side and a two column image section for both landscape and portrait photos.',
        design: 'The design of the project is to focus on the photography on the page. The client for the project wanted to have the design to be simple with a lot of negative white space in-between the images themselves. In addition, whenever a user clicks on the image, it will expand into a lightbox module that can view other images.s',
        development: 'The development of the project utilized create-react-app as well as utilizing bootstrap for layout styling. The hardest part of the project was trying to build a custom lightbox that can view other images. However it became relatively simple as I used the component’s state to keep track of the selected image’s id and to increase or decrease whenever the user clicks on the right or left arrow button to change the image.',
        secondaryImg: 'JonContact.jpg',
        ternaryImg: 'JonLightbox.jpg',
        resultImg: 'JonHome.jpg',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [react, bootstrap, css],
        supportImg: true,
        detailId: 1,
        githubRepo: false,
        githubLink: '',
        website: 'https://jonathangene.com/',
        wireframes: false,
        wireframesLink: ''
    },
    {
        mainImg: 'WeatherApp.png',
        title: 'React & Node Single Page Application',
        topic: 'Weather App',
        url: 'weather-app',
        date: '2020 / Personal Project',
        objective: 'Creating a single page web-app that utilizes React.js, Node.js, and API consumption',
        idea: 'To create a weather app that utilizes API information through React.js and Node.js',
        process: 'Understanding how to communicate from React’s client-side to Node’s server-side was relatively easy after understanding how fetch API works. I made sure when developing the app, I handle the API request and CORS within the server-side of the application.',
        design: 'The design of the project was to use a simple yet interesting color palette that I typically don’t use often. The web-app’s design layout and color palette was quite experimental compared to my usual color palettes of always utilizing standard color such as having a white background with a blue accent color. ',
        development: 'The development of the project utilized create-react-app with a node.js and express.js backend server. The most tricky part developing the application was to have a user’s input value to be sent back to the server-side to get the user’s desired API output. After understanding how the client-side interacts with the server-side and vice versa, it became clear that I have to store the values within the server-side’s API query string. ',
        secondaryImg: 'WeatherAppInitial.png',
        ternaryImg: 'WeatherAppSearch.png',
        resultImg: 'WeatherApp.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [react, node, express, bootstrap, css],
        supportImg: true,
        detailId: 1,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/WeatherApp',
        website: 'https://weather-app-jonbodoe.herokuapp.com/',
        wireframes: false,
        wireframesLink: ''
    },
    {
        mainImg: 'railpix.jpg',
        title: 'Content Management System',
        topic: 'RailPix',
        url: 'rail-pix',
        date: '2019 / Junior Project',
        objective: 'Created a content management system using PHP / MySQL with CRUD functionalities',
        idea: 'I wanted to create a freight train tracking website that uses Google APIs to "track" where people take photos of freights',
        process: 'The requirements were that it had to be written in PHP with MySQL as a backend database. It involved utilizing techniques by importing and exporting components, as well as being able to use CRUD functionalities through a front-end interface that connects to the MySQL database. It also required to use dynamic data by using "super-globals" to determine the output on specific pages. The database itself had to be created specifically to be relational to other databases, as well as being separated based on its use-case.',
        design: 'The hardest aspect of designing a website is knowing the website\'s capabilities when Bootstrap. Throughout the designing process, I kept in mind how Bootstrap v4 works as a grid-like system and to adapt my UI\'s and widgets to their style.',
        development: 'When it came to development, making the PHP code more concise and refactored was quite a difficult task. As an aspiring developer, I try my best to minimize redundancies unless it\'s necessary or I couldn\'t find a way out. I implemented cases of separating everything into components, making functions perform one task only, and minimize call results from the MySQL database when necessary.',
        secondaryImg: 'railpix2.jpg',
        ternaryImg: 'railpix4.jpg',
        resultImg: 'railpix.jpg',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [bootstrap, php, mysql, javascript],
        supportImg: true,
        detailId: 1,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/RailPix',
        website: 'http://132.148.130.34/~jonathan/railpix/index.php',
        wireframes: true,
        wireframesLink: 'https://projects.invisionapp.com/prototype/tracks-ck2qiytln006j02013mmzxwqb'
    },
    {
        mainImg: 'robotics.jpg',
        title: 'Website Development & Design',
        topic: 'Intuitive Robotics',
        url: 'robotics',
        date: '2019 / Junior Project',
        objective: 'Created a dynamic and responsive website with PHP and Javascript functionalities',
        process: 'The concept of this project was to collaborate on a website that best utilizes HTML, CSS, Bootstrap, and JavaScript. We had 3 members collaborating on this project with our seperate roles, myself, Lesley Stiefel, and Sam Andrews. We delegated one group leader, Sam Andrew and we worked together based on our strengths in web design and development. I primarily focused on Web development and assisted in creating visual assets.',
        design: 'With the wireframes, we collaborated on how to focus on the brand image. For the homepage, we took references from several start-up companies, brand websites, and even portfolio pages to understand how to make an appealing homepage. I created the logos of the website and app and the iPhone UI.',
        development: 'I focused on the Web Development of the project as well as assisting Lesley and Sam with the website and mobile designs. This project was focused on an idea, a mobile application that helps firefighters maintain forest fires using technologies such as google maps API and PWA development. Despite the time constraint, we were able to make a responsive website with blueprints of building an Application. ',
        secondaryImg: 'robotics3.png',
        ternaryImg: 'robotics1.png',
        resultImg: 'robotics2.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [html, css, bootstrap, javascript],
        supportImg: true,
        listImgs: ['robotics1.png, robotics2.png, robotics3.png'],
        detailId: 2,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/FIRST',
        website: 'https://jonbodoe.github.io/FIRST/src/index.html'
    },

    {
        mainImg: 'reactlayout.png',
        title: 'React UI Web Application',
        topic: 'React Layout',
        url: 'react-layout',
        date: '2019 / Personal Project',
        objective: 'Practiced to use React.JS to create a Web Application',
        idea: 'Created a customizable screen on a website through a user interface',
        process: 'TThe concept of this project is to implement what I have learned from React.JS into a personal project. Throughout my web development journey, I wanted to learn what does it mean to build UI components within a website or app. I use freeCodeCamp, Codecademy, and YouTube tutorials trying to understand how React.JS works. ',
        design: '',
        development: 'I created a layout customizer that allows users to change the color palettes, typefaces, and the content itself on the page. I had to understand how React Components work using JSX, state, and learned a brief introduction of how lifecycles work. Despite its conditional redundancies and mutating state, I learned how to use best practices moving forward by reading more into the documentation and implementing those changes in current projects.',
        secondaryImg: 'reactlayout1.png',
        ternaryImg: 'reactlayout2.png',
        resultImg: 'reactlayout.png',
        category: web,
        subCategory: webDev,
        primary: false,
        tools: [css, react],
        supportImg: true,
        detailId: null,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/ReactLayout',
        website: 'https://jonbodoe.github.io/ReactLayout/'
    },
    {
        mainImg: 'concept.jpg',
        title: 'UX Design and Web Development',
        topic: 'Writers Block',
        url: 'writers-block',
        date: '2019 / Sophmore Project',
        objective: 'Implemented UX practices with classmates and created a website w/ responsive design',
        idea: 'To create a photo gallery of photos I\'ve taken during 2016 divided by months',
        process: 'The concept of this project was to use UX practices and user testing for designing and developing a website. The project is a two-part assignment of creating two sites showing the process of UX practices and the finished product. ',
        design: 'When creating this site, I had to make sure the designed wireframes were not overly complicated. I had to make sure that the designs I created are doable with a reasonable amount of CSS written.',
        development: 'This class was an introduction to basic web design and development, using languages such as HTML, CSS, and JavaScript. We had to make sure our website utilizes responsive design responsive and is consistent.',
        secondaryImg: 'concept1.jpg',
        ternaryImg: 'concept5.png',
        resultImg: 'concept2.jpg',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [html, css, javascript],
        supportImg: true,
        detailId: 3,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/Process-Project',
        website: 'https://jonbodoe.github.io/Process-Project/indexprocess.html'
    },

    // Need to Redesign //

    {
        mainImg: 'adventure.png',
        title: 'Choose Your Adventure Project',
        topic: 'Day Dream',
        url: 'day-dream',
        date: '2018 / Sophmore Project',
        objective: 'Created a Interactive storyline using JavaScript',
        idea: 'To create a visual interactive narrative using pixel images I have created',
        process: 'For this project I wanted to use JavaScript to create an interactive story of Pixel images I’ve created. I wanted to experiment what JavaScript was capable of doing outside of just basic website interactivity. ',
        design: 'Creating each pixel image was quite difficult as developing the project in some cases. I wanted to maintain a retro gaming style so I had to make sure the styles of the images as well as the website itself matched the style',
        development: 'Previously I did a similar project of this in my introduction to JavaScript. However I wanted to use some of the practices I’ve learned over the years and recreate it more efficiently. I applied a MVC-like practice, reduce redundancies,  as well as trying to reuse components / functions more ',
        secondaryImg: 'pixel1.png',
        ternaryImg: 'pixel2.png',
        resultImg: 'adventure.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [javascript, jquery],
        supportImg: true,
        detailId: 4,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/Pixel-Adventure',
        website: false
    },


    // GRAPHICSSSSSSSs
    {
        mainImg: 'herbie.png',
        title: 'Landing Pages',
        topic: 'Personal Project',
        level: '2019',
        url: 'web-design',
        description: 'Practiced making landing pages for websites as a project',
        concept: 'When I first started learning web development and design, I wanted to get a better understanding of how to design visually appealing landing pages. I looked at several web design wireframes to understand that the visuals of the background can influence the overall feeling of the web design. I wanted to use photographs, my graphic illustrations and practiced different color palettes to create these landing web pages',
        listImg: ['city.png', 'herbie.png', 'artboard.png'],
        category: graphic,
        subCategory: typography,
        link:'',
        tools: 'Illustrator',
    },
    {
        mainImg: 'septathumb.png',
        title: 'Septa Branding Guidlines',
        topic: 'Student Project',
        level: 'Sophmore / 2018',
        url: 'septa',
        description: 'Created Branding Guildlines for Septa, logo redesigns and mobile / web UI designs',
        concept:'I wanted to design SEPTA’s Guidelines because it was an open canvas. Based on research SEPTA does not really follow or publicized a formal branding guiltiness for their company. Since I am a commuter to Thomas Jefferson University, primarily using SEPTA as a means to get to class, I thought it would cool to create a brand new guidelines for SEPTA. For this project there were 3 parts, creating logos, typography and color, and user interfaces for mobile and web.',
        logos: 'For the logos redesigns, I focused on using old railroad companies such as Chess Seaboard, Illinois Central, etc.. to help produce an appropriate transportation logo. In some of the logos I tried to represent the main railroad map of SEPTA, the cross like shape of BSL and MFL, and others represent the rail lines itself.',
        type: 'For typography I followed the concept of using railroad companies as a reference but also wanted to give it a more modern twist. I wanted to utilize both serif and san-serif when it comes to the typography of the brand while maintaining the regular color scheme of SEPTA. ',
        web: 'For SEPTA’s user interfaces for web, I wanted to create a more modern approach to their current website. Using more 2D elements, text over background images, fluid-sized designs, and etc..',
        objective: '',
        process: '',
        horizontalImgs: true,
        listImg: ['septa1.png', 'septa2.png', 'septa3.png', 'septa4.png', 'septa5.png', 'septa6.png'],
        category: graphic,
        subCategory: concept,
        tools: 'Illustrator',
    },
    {
        mainImg: 'trains.png',
        title: 'Concept Graphics',
        topic: 'Personal Project',
        level: '2019',
        url: 'concept-graphics',
        description: 'Created conceptual 2D graphics of environmental spaces utilizing compositions and colors',
        concept: 'In my free time, I like to experiment with conceptual environmental graphics, meaning creating graphics from no physical reference to an area. I used references from different areas to figure out lighting, composition, and colors to determine how I want to set up the digital graphic. I based these graphics on things you would encounter in a city.',
        objective: '',
        process: '',
        listImg: ['landing2.png', 'trains.png', 'newsBins.png'],
        secondaryImg: 'life.jpg',
        category: graphic,
        subCategory: concept,
        link:'conceptgraphics.pdf',
        tools: 'Illustrator',
    },
    {
        mainImg: 'fitcthumb.png',
        title: 'FITC 2018 Conference',
        topic: 'Student Project',
        url: 'fitc',
        level: 'Freshman / 2018',
        description: 'Designed posters for the web development conference FITC as a project',
        concept: 'The objective of this assignment was to utilize how typography can influence a poster design of an event. We had to organize important information that should be shown towards its users while maintaining typography principles. For this project, I wanted to use FITC’s 2018 web development conference. For each of these designs, I wanted to experiment with the designs in the background while using different color schemes, fonts, and compositions.',
        objective: '',
        process: '',
        horizontalImgs: true,
        listImg: ['fitc1.png', 'fitc2.png', 'fitc3.png'],
        category: graphic,
        subCategory: typography,
        primary: false,
        tools: 'Illustrator',
        supportImg: true,
    },


    // Illustrationssnnnsnsnnsnsns

    {
        mainImg: 'dice.jpg',
        title: 'Shootin\' Dice',
        description: 'Bad Dog and Big Bird doin\' bad things.',
        category: illustration,
        subCategory: paint,
        tools: 'Masonite Board, Paint',
    },
    {
        mainImg: 'dragon.jpg',
        title: 'Trains N Dragons',
        description: 'Trains and Dragons',
        category: illustration,
        subCategory: paint,
        tools: 'Hardstock paper, Paint, Ink',
    },
    // {
    //     mainImg: 'kodak.png',
    //     title: 'Kodak',
    //     description: 'a boy with a wolf',
    //     category: illustration,
    //     subCategory: digital,
    //     tools: 'Photoshop',
    // },
    {
        mainImg: 'chill.jpg',
        title: 'Stay Chill',
        description: 'A bird throwing up a peace sign',
        category: illustration,
        subCategory: paint,
        tools: 'Masonite Board, Paint',
    },
]

export default works;


// Figure out design solution for graphic design
// Wait til i get my pc back to re-do photos

// PHP project needs to add redirects

