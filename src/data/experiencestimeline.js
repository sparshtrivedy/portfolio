import { Avatar } from '@mui/material';
import ubc from '../assets/images/ubc.jpeg';
import fof from '../assets/images/fof.jpeg';
import bgc from '../assets/images/bgc.jpeg';
import browns from '../assets/images/browns.png';
import tegus from '../assets/images/tegus.jpeg';

const experiencestimeline = [
    {
      id: 'tegus-swe',
      duration: 'May 2024 - Present',
      title: 'SWE Co-op',
      location: 'Tegus',
      icon: <Avatar alt='tegus logo' src={tegus} sx={{ width: '3em', height: '3em' }} />,
    },
    {
      id: 'ubc-cs-ta',
      duration: 'Sep 2023 - Apr 2024',
      title: 'Teaching Assistant',
      location: 'CS Department @ UBC',
      icon: <Avatar alt='ubc logo' src={ubc} sx={{ width: '3em', height: '3em' }} />,
    },
    {
      id: 'forestry-web-dev',
      duration: 'May 2023 - Aug 2023',
      title: 'Web Developer',
      location: 'Faculty of Forestry @ UBC',
      icon: <Avatar alt='fof logo' src={fof} sx={{ width: '3em', height: '3em' }} />,
    },
    {
      id: 'bgc-software-dev',
      duration: 'Sep 2022 - Apr 2023',
      title: 'SDE Co-op',
      location: 'BGC Engineering',
      icon: <Avatar alt='bgc logo' src={bgc} sx={{ width: '3em', height: '3em'}} />,
    },
    {
      id: 'browns-boh',
      duration: 'May 2022 - Jun 2022',
      title: 'Dishwasher and Prep Cook',
      location: 'Brown’s Crafthouse UBC',
      icon: <Avatar alt='browns logo' src={browns} sx={{ width: '3em', height: '3em' }} />,
    }
]

export default experiencestimeline;
  