import jquery from '../../img/jquery-icon.svg';
import react from '../../img/react-brands.svg';
import css from '../../img/css3-brands.svg';
import html from '../../img/html5-brands.svg';
import bootstrap from '../../img/bootstrap-brands.svg';
import javascript from '../../img/js-brands.svg';
import php from '../../img/php-brands.svg';
import mysql from '../../img/database-solid.svg'


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
    {
        mainImg: 'kodak.png',
        title: 'Kodak',
        description: 'a boy with a wolf',
        category: illustration,
        subCategory: digital,
        tools: 'Photoshop',
    },
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

