import playbook from '../assets/videos/playbook.mov';
import notesapi from '../assets/images/notes-api.png';
import getittogether from '../assets/videos/getittogether.mov';
import woodworks from '../assets/videos/woodworks.mp4';
import vibing from '../assets/videos/vibing.mp4';
import pruned from '../assets/images/pruned.png';
import cafekiosk from '../assets/images/cafe-kiosk.jpg'

const projects = [
    {
        id: 'playbook',
        duration: 'Jul 2023 - Aug 2023',
        title: 'PlayBook',
        description: [
            'Created cloud-hosted sports management platform, deployed on AWS EC2, utilizing RDS for PostgreSQL database and Nginx for reverse proxy.',
            'Promoted data integrity through role-based access control for managers and administrators, ensuring users could only perform CRUD operations on data relevant to their role.',
            'Optimized DB structure by implementing weak entity relationships and ISA hierarchies, minimizing redundancy by normalizing to BCNF.',
            'Ensured data security through JWT web token-based authentication and authorization.'
        ],
        skills: 'Express.js, React.js, PostgreSQL, AWS, Nginx',
        media: {
            label: 'PlayBook',
            item: playbook,
            type: 'video'
        },
        view: 'http://playbookmanager.xyz/landing',
        github: 'https://github.com/sparshtrivedy/PlayBook',
    },
    {
        id: 'notesapi',
        duration: 'Jul 2023 - Jul 2023',
        title: 'Notes REST API',
        description: [
            'Developed REST API for note-taking application using AWS Cognito for authentication, DynamoDB for data storage, and CodePipeline for CI/CD.',
            'Implemented WAF to protect API from malicious attacks and unauthorized access.',
            'Ensured avialability by adding unit tests for all API endpoints.',
            'Utilized CloudFormation for infrastructure as code and serverless framework for deployment.'
        ],
        skills: 'AWS',
        media: {
            label: 'Notes API Diagram',
            item: notesapi,
            type: 'img'
        },
        view: '',
        github: 'https://github.com/sparshtrivedy/notes-rest-api',
    },
    {
        id: 'getittogether',
        duration: 'Apr 2023 - Apr 2023',
        title: 'Get-it-together',
        description: [
            'Created task-tracking application, enabling users to create, update, and delete tasks.',
            'Ensured data security through password hashing and salting and JWT web token-based authentication and authorization.',
            'Personalized user experience by implementing a dashboard allowing users to track of the status of their tasks and their progress over time.',
            'Improved user experience by implementing a search feature allowing users to search for tasks by name, status, and type.'
        ],
        skills: 'Express.js, Node.js, React.js, MongoDB (NoSQL)',
        media: {
            label: 'Get-it-together',
            item: getittogether,
            type: 'video'
        },
        view: 'https://get-it-together-wlk9.onrender.com/landing',
        github: 'https://github.com/sparshtrivedy/get-it-together',
        
    },
    {
        id: 'woodworks',
        duration: 'Jan 2023 - Jan 2023',
        title: 'WoodWorks',
        description: [
            'Developed an e-commerce platform called WoodWorks with detailed product catalog, cart functionality, and user authentication.',
            'Created REST API with CRUD operations, sorting, filtering, and search features.',
            'Established database schema using Entity Framework\'s code-first approach and performed data seeding.',
            'Enabled exclusive catalog access through user login and registration.',     
        ],
        skills: 'TypeScript, C#, React, .NET, Redux',
        media: {
            label: 'WoodWorks',
            item: woodworks,
            type: 'video'
        },
        view: '',
        github: 'https://github.com/sparshtrivedy/WoodWorks',
    },
    {
        id: 'vibing',
        duration: 'Mar 2022 - Mar 2022',
        title: 'Vibing',
        description: [
            'Developed a front-end Spotify playlist maker application using React.js and integrating with the Spotify API.',
            'Implemented functionality for users to browse songs by song name, artist, and album.',
            'Integrated the ability for users to add selected songs to a playlist and customize the playlist name.'
        ],
        skills: 'HTML, CSS, JavaScript, React.js',
        media: {
            label: 'Vibing',
            item: vibing,
            type: 'video'
        },
        view: 'http://vibing.surge.sh/',
        github: 'https://github.com/sparshtrivedy/vibing',
    },
    {
        id: 'image-partitioning-trees',
        duration: 'Jul 2022 - Jul 2022',
        title: 'Image Partitioning Trees',
        description: [
            'Developed a C++ application utilizing a binary tree (PTree) to symbolize image data, with tree nodes corresponding to image regions.',
            'Implemented operations such as Prune to pixelate images by removing leaf node descendants based on color tolerance criteria.',
            'Enabled image flipping both horizontally and vertically, offering versatile manipulation options.',
            'Utilized the render function to visualize the effects of operations on images, using the tree\'s root node as input.'
        ],
        skills: 'C++, Data Structures and Algorithms',
        media: {
            label: 'Pruned Tree',
            item: pruned,
            type: 'img'
        },
        view: '',
        github: 'https://github.com/sparshtrivedy/Image-Partitioning-Trees',
    },
    {
        id: 'cafe-kiosk',
        duration: 'Sep 2021 - Dec 2021',
        title: 'Cafe Kiosk',
        description: [
            'Created an interactive coffee ordering app using Java, enabling users to manage their cart, view order summaries, generate bills, and place orders.',
            'Incorporated functionality for saving and loading orders, along with a log for drink additions and removals.',
            'Enhanced user experience by integrating Java Swing library for a user-friendly GUI.',
            'Developed the application adhering to software design principles and verified its functionality through JUnit testing.'
        ],
        skills: 'Java, Swing, JUnit, Object Oriented Programming, Test Driven Development',
        media: {
            label: 'Cafe Kiosk GUI',
            item: cafekiosk,
            type: 'img'
        },
        view: '',
        github: 'https://github.com/sparshtrivedy/Cafe-Kiosk',
    }
]

export default projects;
