import { Avatar } from '@mui/material';
import ubc from '../assets/images/ubc.jpeg';
import fof from '../assets/images/fof.jpeg';
import bgc from '../assets/images/bgc.jpeg';
import browns from '../assets/images/browns.png';
import as from '../assets/images/alphasense_logo.jpeg';

const experiencestimeline = [
    {
      id: 'as-swe',
      duration: 'May 2024 - Dec 2024',
      title: 'SWE Co-op',
      location: 'AlphaSense',
      icon: <Avatar alt='alphasense logo' src={as} sx={{ width: '3em', height: '3em' }} />,
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
      title: 'Learning Tech Rover',
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
  