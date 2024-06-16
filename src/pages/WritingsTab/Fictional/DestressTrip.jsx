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
import seattle from '../../../assets/writings/seattle.jpg';

export default function DestressTrip() {
    return (
        <Grid container justifyContent={'center'} sx={{bgcolor: 'background.main'}}>
            <Grid item xs={12} sm={8}>
                <Paper elevation={3}>
                    <Box sx={{ p: {xs: 2, sm: 4} }}>
                        <Typography variant={'subtitle2'}>03.04.2024</Typography>
                        <Divider sx={{mt: 2}}/>
                        <Typography variant={'h1'}>The Stressful De-stress Trip</Typography>
                        <Divider sx={{mb: 2}}/>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Avatar alt={'Sparsh Trivedy'} src={peep} sx={{marginRight: 2}} />
                            <Typography variant={'subtitle2'}>Sparsh Trivedy</Typography>
                        </Box>
                        <Divider />
                        <img src={seattle} alt={'Callback hell loop'} style={{marginTop: '20px', width: '100%'}} />
                        <div style={{margin: '40px 0'}}>
                            <Typography variant={'body1'} mb={2}>
                                After enduring a grueling semester packed with academic challenges and demands of her role as a research assistant, Ria was looking forward to kicking off 
                                her summer with a trip to Seattle where she would reunite with her aunt and cousins. Ria, known for her meticulous planning skills and attention to detail, 
                                spent the entire semester planning for this trip. Hoping that a change of scenery would provide a much-needed dose of sanity, Ria packed her bags and left for Seattle.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Before she could embark on this much anticipated trip, Ria had to make a stop at the car rental in Vancouver. Well versed in the scientific method, she meticulously 
                                sampled each car in the lot, looking for any scratches or dents that could potentially make her liable for damages. Unsurprisingly, every vehicle fell short of her standards, 
                                leaving this Goldilocks still searching for her perfect porridge. Exhausted with this inspection, the car rental owner unwillingly led her to a pristine untouched Volvo. Ria’s 
                                eyes lit up as the cover was pulled from over the car – a shining beacon amidst a sea of disappointments. Ria approved with an enthusiastic nod, but not before completing one final check.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Pleased with her choice, Ria approached the rental desk. The employee flashed the widest salesman grin, with a twinkle in his eye, he asked if she would like to purchase insurance for $150. 
                                Ria, a penny-pincher had done her research and hypothesized that no one ever really faced any issues with their rentals and the insurance was simply a money-making scheme for these rental companies. 
                                She scoffed internally thinking “What could possibly go wrong with a brand-new Volvo and her impeccable driving skills?”. She waved away the offer, flourishing her keys in the air, she rode 
                                away feeling invincible in her Volvo chariot.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Having snagged a brand-new Volvo, Ria couldn’t help but bask in the glory of her own cleverness. Music blasting from the speakers, the cool early summer wind blowing through her hair, a wide grin on her face, 
                                she passed by the beautiful parks and lakes of Vancouver. Even the sun, a rare sight in “Rain-couver” was shining just for her on this perfect day. As she neared the border, she decided to stop at a gas station 
                                to fill-up her tank since the next station was quite far away. She wasn’t going to let something trivial like an empty gas tank ruin her trip.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                At the gas station, Ria was faced with two choices – petrol or diesel. With a sinking feeling in her stomach, she realized she had forgotten to ask the rental company which fuel the car required. However, 
                                Ria was no stranger to solving unanswered questions. She began her investigation with the gas tank lid, but having found no answer there, she turned to the car manual. Flipping frantically through the pages, 
                                Ria finally found her answer – the car ran on diesel. Pleased with her problem-solving skills, Ria went to insert the diesel nozzle into the car tank but discovered that the nozzle didn’t fit. Thinking it must 
                                be a model compatibility issue, she decided to wait for the next gas station where she was able to find a nozzle that fit. With a triumphant grin, Ria pumped diesel into the tank, feeling a sense of satisfaction 
                                at overcoming yet another obstacle with ease.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Later that evening, Ria finally reached her aunt’s place where she was warmly welcomed by her aunt and cousins. Ria entertained them with tales from her road trip and how she masterfully maneuvered all the hurdles. 
                                Just as Ria was beginning to feel the weariness of the journey, her aunt realized she had lent the extra mattress on which Ria was to sleep, to a friend. So, they quickly drove the Volvo to the friend’s place, 
                                thinking it would be a quick errand. Spoiler alert, it wasn’t. As they approached the street on which the friend lived, they found themselves on a very narrow road, flanked by cars on both sides, so they decided to 
                                park the car in the middle of the road and quickly grab the mattress. When they returned to the car and tried to re-start it, they found the check-engine light glaring at them. Just then the car grunted, groaned, and 
                                shut down. Panic surged through Ria as frustrated drivers started stacking up behind them. The night had taken an unexpected turn.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Ria and her aunt struggled to move the car off the road, but their efforts were in vain in this literal uphill battle. Just then, Ria spotted two burly guys in a pick-up truck behind them. Fueled by desperation, 
                                she unleashed her secret weapon – her charm.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                “Hey there, you guys have some serious muscle on you. I am really struggling with my car here. Think you guys could lend a hand? I would really appreciate it,” said Ria, twirling a lock of her hair between her fingers 
                                and flashing her winning smile.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                The guys immediately leaped into action. Eager to help a damsel in distress, the guys pulled the car to the side, linked it to their truck, and drove it into a proper parking spot with great efficiency and speed. 
                                Meanwhile, Ria fueled their efforts with constant cheering and encouragement. As they bid farewell to their new heroes, Ria couldn’t help but be pleased with her well-executed flirtation. However, this moment of triumph 
                                was short-lived when she noticed the guys slipping their numbers to her aunt before driving away.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                From there, they got the car towed and returned home. Ria flooded the rental company’s inbox with complaints for renting out a faulty car to her. Ria’s aunt asked her if she had used the right fuel. Ria was confident 
                                that she did and pulled up the page in the manual to show to her aunt. Her confidence shattered like glass when she discovered the truth – pages stuck together, revealing the specs for different engines. The page she was 
                                looking at was for a different engine. Their car used petrol. Ria was paralyzed with fear as she contemplated the consequences of her mistake. She didn’t sleep the entire night knowing she would have to pay a huge sum in 
                                damages to the rental company. She tossed and turned in bed all night, trying to come up with arguments in her head, hoping to avoid the inevitable financial blow. She spent her whole trip stressed, having nightmares of 
                                being in a courtroom, facing a mountain of bills and accusations. Regret gnawed at her, wishing she had listened to the rental company and purchased the insurance.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                On returning to Vancouver, Ria received an unexpected email from the rental company apologizing for their error and promptly refunded the rental cost to her. Out of all the scenarios she had imagined, this wasn’t one of them. 
                                Despite the temptation to inquire further about the issue, Ria chose to stay silent in fear that probing questions might reveal the truth and land her in hot water. She took the win with gratitude and moved on with her life. 
                                To this day, Ria remains blissfully unaware of what the rental company thought the issue was or how she got away with it.
                            </Typography>
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
