import { 
    BugReportOutlined, 
    DataObjectOutlined, 
    FolderOutlined, 
    HubOutlined, 
    LanOutlined, 
    PublishedWithChangesOutlined 
} from '@mui/icons-material';
import ssms from '../assets/ssms.svg';

const skills = {
    languages: [
        {
            name: 'JavaScript',
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/portfolio/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/portfolio/#/projects/#getittogether'
                },
                {
                    name: 'Vibing',
                    link: '/portfolio/#/projects/#vibing'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/portfolio/#/experience/#forestry-web-dev'
                }
            ]
        },
        {
            name: 'TypeScript',
            img: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
            demonstrated: [
                {
                    name: 'WoodWorks',
                    link: '/portfolio/#/projects/#woodworks'
                },
                {
                    name: 'BGC Engineering',
                    link: '/portfolio/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'Python',
            img: 'https://www.vectorlogo.zone/logos/python/python-ar21.svg',
            demonstrated: [
                {
                    name: 'UBC CS Department',
                    link: '/portfolio/#/experience/#ubc-cs-ta'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/portfolio/#/experience/#forestry-web-dev'
                }
            ]
        },
        {
            name: 'Java',
            img: 'https://www.vectorlogo.zone/logos/java/java-ar21.svg',
            demonstrated: [
                {
                    name: 'Cafe Kiosk',
                    link: '/portfolio/#/projects/#cafe-kiosk'
                }
            ]
        },
        {
            name: 'C#',
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
            demonstrated: [
                {
                    name: 'WoodWorks',
                    link: '/portfolio/#/projects/#woodworks'
                },
                {
                    name: 'BGC Engineering',
                    link: '/portfolio/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'C++',
            img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
            demonstrated: [
                {
                    name: 'Image Partitioning Trees',
                    link: '/portfolio/#/projects/#image-partitioning-trees'
                }
            ]
        },
        {
            name: 'C',
            img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
            demonstrated: [
                {
                    name: 'UBC courses',
                    link: '/portfolio/#/education'
                }
            ]
        }
    ],
    backend: [
        {
            name: 'Express.js',
            img: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/portfolio/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/portfolio/#/projects/#getittogether'
                }
            ]
        },
        {
            name: 'Node.js',
            img: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/portfolio/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/portfolio/#/projects/#getittogether'
                }
            ]
        },
        {
            name: '.NET',
            img: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-ar21.svg',
            demonstrated: [
                {
                    name: 'WoodWorks',
                    link: '/portfolio/#/projects/#woodworks'
                },
                {
                    name: 'BGC Engineering',
                    link: '/portfolio/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'Django',
            img: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg',
            demonstrated: [
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/portfolio/#/experience/#forestry-web-dev'
                }
            ]
        }
    ],
    frontend: [
        {
            name: 'HTML',
            img: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/portfolio/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/portfolio/#/projects/#getittogether'
                },
                {
                    name: 'WoodWorks',
                    link: '/portfolio/#/projects/#woodworks'
                },
                {
                    name: 'Vibing',
                    link: '/portfolio/#/projects/#vibing'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/portfolio/#/experience/#forestry-web-dev'
                },
                {
                    name: 'BGC Engineering',
                    link: '/portfolio/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'CSS',
            img: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/portfolio/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/portfolio/#/projects/#getittogether'
                },
                {
                    name: 'WoodWorks',
                    link: '/portfolio/#/projects/#woodworks'
                },
                {
                    name: 'Vibing',
                    link: '/portfolio/#/projects/#vibing'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/portfolio/#/experience/#forestry-web-dev'
                },
                {
                    name: 'BGC Engineering',
                    link: '/portfolio/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'React',
            img: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/portfolio/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/portfolio/#/projects/#getittogether'
                },
                {
                    name: 'WoodWorks',
                    link: '/portfolio/#/projects/#woodworks'
                },
                {
                    name: 'Vibing',
                    link: '/portfolio/#/projects/#vibing'
                },
                {
                    name: 'BGC Engineering',
                    link: '/portfolio/#/experience/#bgc-software-dev'
                }
            ]
        }
    ],
    database: [
        {
            name: 'MS SQL Server',
            img: ssms,
            demonstrated: [
                {
                    name: 'BGC Engineering',
                    link: '/portfolio/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'PostgreSQL',
            img: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/portfolio/#/projects/#playbook'
                },
                {
                    name: 'WoodWorks',
                    link: '/portfolio/#/projects/#woodworks'
                }
            ]
        },
        {
            name: 'SQLite',
            img: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg',
            demonstrated: [
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/portfolio/#/experience/#forestry-web-dev'
                }
            ]
        },
        {
            name: 'MongoDB',
            img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
            demonstrated: [
                {
                    name: 'Get-it-together',
                    link: '/portfolio/#/projects/#getittogether'
                }
            ]
        }
    ],
    cloud: [
        {
            name: 'AWS',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            demonstrated: [
                {
                    name: 'Notes REST API',
                    link: '/portfolio/#/projects/#notesapi'
                }
            ]
        }
    ],
    ml: [
        {
            name: 'Scikit Learn',
            img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
            demonstrated: [
                {
                    name: 'UBC CS Department',
                    link: '/portfolio/#/experience/#ubc-cs-ta'
                }
            ]
        },
        {
            name: 'Pandas',
            img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg',
            demonstrated: [
                {
                    name: 'UBC CS Department',
                    link: '/portfolio/#/experience/#ubc-cs-ta'
                }
            ]
        },
        {
            name: 'NumPy',
            img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg',
            demonstrated: [
                {
                    name: 'UBC CS Department',
                    link: '/portfolio/#/experience/#ubc-cs-ta'
                }
            ]
        }
    ],
    overarching: [
        {
            name: 'Object Oriented Programming',
            avatar: <DataObjectOutlined />,
            divider: true
        },
        {
            name: 'Relational Database Design',
            avatar: <FolderOutlined />,
            divider: true
        },
        {
            name: 'Software Design Patterns',
            avatar: <LanOutlined />,
            divider: true
        },
        {
            name: 'RESTful API Construction',
            avatar: <HubOutlined />,
            divider: true
        },
        {
            name: 'CI/CD',
            avatar: <PublishedWithChangesOutlined />,
            divider: true
        },
        {
            name: 'Test Driven Development',
            avatar: <BugReportOutlined />,
            divider: false
        }
    ]
}

export default skills;
