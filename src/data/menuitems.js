import { 
    HomeOutlined,
    AccountCircleOutlined,
    CodeOutlined,
    WorkOutlineOutlined,
    VolunteerActivismOutlined,
    SchoolOutlined,
    AutoAwesomeOutlined,
} from '@mui/icons-material';

const menuitems = [
    {
      id: 'home',
      icon: <HomeOutlined />,
      text: 'Home',
      link: '/',
    },
    {
      id: 'about',
      icon: <AccountCircleOutlined />,
      text: 'About me',
      link: '/about',
    },
    {
      id: 'skills',
      icon: <AutoAwesomeOutlined />,
      text: 'Skills',
      link: '/skills',
    },
    {
      id: 'experience',
      icon: <WorkOutlineOutlined />,
      text: 'Experience',
      link: '/experience',
    },
    {
      id: 'projects',
      icon: <CodeOutlined />,
      text: 'Projects',
      link: '/projects',
    },
    {
      id: 'volunteering',
      icon: <VolunteerActivismOutlined />,
      text: 'Volunteering',
      link: '/volunteering',
    },
    {
      id: 'education',
      icon: <SchoolOutlined />,
      text: 'Education',
      link: '/education',
    },
]

export default menuitems;
