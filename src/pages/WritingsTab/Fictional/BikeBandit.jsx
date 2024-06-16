import React from "react";
import {
    Avatar,
    Divider,
    Grid,
    Paper,
    Typography,
    Box,
} from "@mui/material";
import peep from '../../../assets/images/peep.jpeg';
import cycle from '../../../assets/writings/cycle.jpg';

export default function BikeBandit() {
    return (
        <Grid container justifyContent={'center'} sx={{bgcolor: 'background.main'}}>
            <Grid item xs={12} sm={8}>
                <Paper elevation={3}>
                    <Box sx={{ p: {xs: 2, sm: 4} }}>
                        <Typography variant={'subtitle2'}>28.02.2024</Typography>
                        <Divider sx={{mt: 2}}/>
                        <Typography variant={'h1'}>The Bike Bandit</Typography>
                        <Divider sx={{mb: 2}}/>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Avatar alt={'Sparsh Trivedy'} src={peep} sx={{marginRight: 2}} />
                            <Typography variant={'subtitle2'}>Sparsh Trivedy</Typography>
                        </Box>
                        <Divider />
                        <img src={cycle} alt={'Callback hell loop'} style={{marginTop: '20px', width: '100%'}} />
                        <div style={{margin: '40px 0'}}>
                            <Typography variant={'body1'} mb={2}>
                                Tapping my feet in anticipation, I eagerly awaited the stroke of 4 o’clock. As the clock struct 4, I dashed to the door, looking 
                                through the peephole, at my neighbor’s house. Like clockwork, the whole family departed for their daily prayer meeting at the community center, 
                                leaving my 10-year-old self with the golden opportunity to indulge in my newfound love for bike riding.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                With the coast clear, I grabbed my neighbor’s sleek new Firefox bike. Equipped with 7 gears, it was the envy of every 10-year-old in our complex. 
                                There was something exhilarating about pedaling that shiny new bike through dimply lit streets, with the cool evening wind in my hair. 
                                I felt like the king of the streets.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Some might wonder why I didn’t just ask my parents for a new bike. Well, I did, and they simply handed down my sister’s pink Hello Kitty bike to me. 
                                Now picture me, a budding criminal mastermind, riding around in a bike with a giant basket and cartoon stickers. I wasn’t keen on rocking the Hello 
                                Kitty aesthetic, so I had to find creative solutions. If anything, I would blame my parents for nudging me down the path of crime with their questionable hand-me-down choices.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                I even tried diplomatic solutions like politely requesting my neighbor to let me take her bike for a spin, only to be met with a rude “no!”. 
                                I then resorted to bribing her with my Hello Kitty bike, but that bike had very few redeeming qualities and my attempts to sweeten the deal fell flat. 
                                A true villain origin story if you ask me.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                As days turned into weeks, my bike “borrowing” escapades became a well-oiled routine. I meticulously timed my neighbors’ departures and returns, made sure it was dark enough, 
                                so no one recognized me and parked the bike back in its spot just in time for their return. One fateful evening, disaster struck. As I zipped around a corner, lost in the thrill 
                                of the ride, I didn’t notice that my neighbors had returned early and were walking in my direction. Even though the dim light obscured my identity, my neighbor recognized her 
                                beloved bike and wasted no time in alerting her family. Adrenaline surged through my veins as I watched her and her father storming towards me. I slammed the brakes, 
                                leaving skid marks on the road. In a move worthy of a Hollywood stuntman, I turned the bike in the opposite direction and pedaled furiously, leaving them in my dust.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Having escaped, I abandoned the bike and sprinted home. From that day, my neighbors took extra precautions, locking her bike securely. My neighbors even came around asking if 
                                I knew anything about this, but I played dumb. After all, every mastermind knows how to cover their tracks.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                            Undeterred by this setback, I simply switched my allegiance to another unsuspecting neighbor’s bike, riding under the cover of darkness. Ah the lengths I would go to for the thrill of a ride. 
                            Though I must confess, as an adult, I have retired from my life as a bike thief, opting for a more law-abiding existence.
                            </Typography>
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
