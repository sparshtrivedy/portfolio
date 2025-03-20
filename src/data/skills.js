import { 
    BugReportOutlined, 
    DataObjectOutlined, 
    FolderOutlined, 
    HubOutlined, 
    LanOutlined, 
    PublishedWithChangesOutlined 
} from '@mui/icons-material';
import { SiCplusplus, SiCsharp, SiJavascript, SiPython, SiTypescript, SiC, SiExpress, SiNodedotjs, SiDotnet, SiDjango, SiHtml5, SiCss3, SiReact, SiMicrosoftsqlserver, SiPostgresql, SiSqlite, SiMongodb, SiAmazonaws, SiFirebase, SiScikitlearn, SiPandas, SiNumpy } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

const skills = {
    languages: [
        {
            name: 'JavaScript',
            img: <SiJavascript />,
            color: '#f0db4f',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/#/projects/#getittogether'
                },
                {
                    name: 'Vibing',
                    link: '/#/projects/#vibing'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/#/experience/#forestry-web-dev'
                }
            ]
        },
        {
            name: 'TypeScript',
            img: <SiTypescript />,
            color: '#007acc',
            demonstrated: [
                {
                    name: 'AlphaSense',
                    link: '/#/experience/#as-swe'
                },
                {
                    name: 'WoodWorks',
                    link: '/#/projects/#woodworks'
                },
                {
                    name: 'BGC Engineering',
                    link: '/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'Python',
            img: <SiPython />,
            color: '#306998',
            demonstrated: [
                {
                    name: 'AlphaSense',
                    link: '/#/experience/#as-swe'
                },
                {
                    name: 'UBC CS Department',
                    link: '/#/experience/#ubc-cs-ta'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/#/experience/#forestry-web-dev'
                }
            ]
        },
        {
            name: 'Java',
            img: <FaJava />,
            color: '#007396',
            demonstrated: [
                {
                    name: 'Cafe Kiosk',
                    link: '/#/projects/#cafe-kiosk'
                }
            ]
        },
        {
            name: 'C#',
            img: <SiCsharp />,
            color: '#9b4993',
            demonstrated: [
                {
                    name: 'AlphaSense',
                    link: '/#/experience/#as-swe'
                },
                {
                    name: 'WoodWorks',
                    link: '/#/projects/#woodworks'
                },
                {
                    name: 'BGC Engineering',
                    link: '/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'C++',
            img: <SiCplusplus />,
            color: '#00599c',
            demonstrated: [
                {
                    name: 'Image Partitioning Trees',
                    link: '/#/projects/#image-partitioning-trees'
                }
            ]
        },
        {
            name: 'C',
            img: <SiC />,
            color: '#a8b9cc',
            demonstrated: [
                {
                    name: 'UBC courses',
                    link: '/#/education'
                }
            ]
        }
    ],
    backend: [
        {
            name: 'Express.js',
            img: <SiExpress />,
            color: '#000000',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/#/projects/#getittogether'
                }
            ]
        },
        {
            name: 'Node.js',
            img: <SiNodedotjs />,
            color: '#68a063',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/#/projects/#getittogether'
                }
            ]
        },
        {
            name: '.NET',
            img: <SiDotnet />,
            color: '#512bd4',
            demonstrated: [
                {
                    name: 'AlphaSense',
                    link: '/#/experience/#as-swe'
                },
                {
                    name: 'WoodWorks',
                    link: '/#/projects/#woodworks'
                },
                {
                    name: 'BGC Engineering',
                    link: '/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'Django',
            img: <SiDjango />,
            color: '#092e20',
            demonstrated: [
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/#/experience/#forestry-web-dev'
                }
            ]
        }
    ],
    frontend: [
        {
            name: 'HTML',
            img: <SiHtml5 />,
            color: '#e34f26',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/#/projects/#getittogether'
                },
                {
                    name: 'WoodWorks',
                    link: '/#/projects/#woodworks'
                },
                {
                    name: 'Vibing',
                    link: '/#/projects/#vibing'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/#/experience/#forestry-web-dev'
                },
                {
                    name: 'BGC Engineering',
                    link: '/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'CSS',
            img: <SiCss3 />,
            color: '#1572b6',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/#/projects/#getittogether'
                },
                {
                    name: 'WoodWorks',
                    link: '/#/projects/#woodworks'
                },
                {
                    name: 'Vibing',
                    link: '/#/projects/#vibing'
                },
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/#/experience/#forestry-web-dev'
                },
                {
                    name: 'BGC Engineering',
                    link: '/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'React',
            img: <SiReact />,
            color: '#61dafb',
            demonstrated: [
                {
                    name: 'AlphaSense',
                    link: '/#/experience/#as-swe'
                },
                {
                    name: 'PlayBook',
                    link: '/#/projects/#playbook'
                },
                {
                    name: 'Get-it-together',
                    link: '/#/projects/#getittogether'
                },
                {
                    name: 'WoodWorks',
                    link: '/#/projects/#woodworks'
                },
                {
                    name: 'Vibing',
                    link: '/#/projects/#vibing'
                },
                {
                    name: 'BGC Engineering',
                    link: '/#/experience/#bgc-software-dev'
                }
            ]
        }
    ],
    database: [
        {
            name: 'MS SQL Server',
            img: <SiMicrosoftsqlserver />,
            color: '#cc2927',
            demonstrated: [
                {
                    name: 'BGC Engineering',
                    link: '/#/experience/#bgc-software-dev'
                }
            ]
        },
        {
            name: 'PostgreSQL',
            img: <SiPostgresql />,
            color: '#336791',
            demonstrated: [
                {
                    name: 'PlayBook',
                    link: '/#/projects/#playbook'
                },
                {
                    name: 'WoodWorks',
                    link: '/#/projects/#woodworks'
                }
            ]
        },
        {
            name: 'SQLite',
            img: <SiSqlite />,
            color: '#003b57',
            demonstrated: [
                {
                    name: 'UBC Faculty of Forestry',
                    link: '/#/experience/#forestry-web-dev'
                }
            ]
        },
        {
            name: 'MongoDB',
            img: <SiMongodb />,
            color: '#47a248',
            demonstrated: [
                {
                    name: 'Get-it-together',
                    link: '/#/projects/#getittogether'
                }
            ]
        }
    ],
    cloud: [
        {
            name: 'AWS',
            img: <SiAmazonaws />,
            color: '#232f3e',
            demonstrated: [
                {
                    name: 'AlphaSense',
                    link: '/#/experience/#as-swe'
                },
                {
                    name: 'Notes REST API',
                    link: '/#/projects/#notesapi'
                }
            ]
        },
        {
            name: 'Firebase',
            img: <SiFirebase />,
            color: '#ffca28',
            demonstrated: [
                {
                    name: 'FairFare',
                    link: 'https://fairfare-cbb02.web.app/'
                }
            ]
        }
    ],
    ml: [
        {
            name: 'Scikit Learn',
            img: <SiScikitlearn />,
            color: '#f7931e',
            demonstrated: [
                {
                    name: 'UBC CS Department',
                    link: '/#/experience/#ubc-cs-ta'
                }
            ]
        },
        {
            name: 'Pandas',
            img: <SiPandas />,
            color: '#150458',
            demonstrated: [
                {
                    name: 'UBC CS Department',
                    link: '/#/experience/#ubc-cs-ta'
                }
            ]
        },
        {
            name: 'NumPy',
            img: <SiNumpy />,
            color: '#013243',
            demonstrated: [
                {
                    name: 'UBC CS Department',
                    link: '/#/experience/#ubc-cs-ta'
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
