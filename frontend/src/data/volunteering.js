import rover from '../assets/images/rover.jpeg';
import sus from '../assets/images/sus.jpeg';
import udl from '../assets/images/udl.png';

const volunteering = [
    {
        id: 'sus',
        title: 'Academic Experience Coordinator',
        img: sus,
        location: 'UBC Science Undergraduate Society',
        duration: 'Jul 2022 - Oct 2023',
        skills: 'Event Planning, Surveying',
        description: [
            'Organized and hosted events for students, providing them with opportunities to network with peers senior students, and faculty members.',
            'Conducted surveys to gather feedback from students and used the feedback to improve the events.'
        ]
    },
    {
        id: 'rover',
        title: 'Software Developer',
        img: rover,
        location: 'UBC Rover Engineering Design Team',
        duration: 'Sep 2022 - Feb 2023',
        skills: 'ROS Qt, C++',
        description: [
            'Developed GUI for our rover using ROS Qt to control the rover and display sensor data.'
        ]
    },
    {
        id: 'udl',
        title: 'Web Designer',
        img: udl,
        location: 'UBC Design League',
        duration: 'Sep 2022 - Feb 2023',
        skills: 'React, HTML, CSS',
        description: [
            'Designed and developed website for UBC Design League.'
        ]
    }
];

export default volunteering;
