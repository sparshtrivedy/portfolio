import React from "react";
import {
    Avatar,
    Divider,
    Grid,
    Paper,
    Typography,
    Box
} from "@mui/material";
import sparsh from '../../../assets/images/sparsh.jpg';
import codecomments from '../../../assets/writings/codecomments.png';

export default function Comments() {
    return (
        <Grid container justifyContent={'center'} sx={{bgcolor: '#f8fafd'}}>
            <Grid item xs={8}>
                <Paper elevation={3} sx={{padding: 4}}>
                    <Typography variant={'subtitle2'}>26.12.2023</Typography>
                    <Divider sx={{mt: 2}}/>
                    <Typography variant={'h1'}>Code Comments</Typography>
                    <Typography variant={'subtitle1'} mb={2}>My opinions on when comments are warranted and when they are not</Typography>
                    <Divider sx={{mb: 2}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Avatar alt={'Sparsh Trivedy'} src={sparsh} sx={{marginRight: 2}} />
                        <Typography variant={'subtitle2'}>Sparsh Trivedy</Typography>
                    </Box>
                    <Divider />
                    <img src={codecomments} alt={'Singleton Design Pattern'} style={{marginTop: '20px'}} />
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'body1'} mb={2}>
                            In every software engineering course I have taken at UBC, the professors have dedicated lectures on teaching us how to write good comments.
                            We even got points deducted for not writing comments in our assignements and assessments. As a result, I have always been very diligent about writing comments in my code.
                            I started to believe that comments were a necessary part of writing code. However, I feel I might have taken this too far.
                            I started to write comments for every single line of code I wrote. I would write comments for the sake of writing comments. 
                            It eventually became an excuse for writing bad code. I would write bad code and then justify it by saying that I would write comments to explain it, so no harm done.
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>
                            Why are comments bad?
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            It wasn't too long before I realised that this was a bad practice. I realized that comments explaining code are not helpful at all and simply add clutter to the code.
                            Such code comments that explain what the code is doing is considered a code smell and should be avoided.
                        </Typography>
                        <Typography variant={'body1'} ml={2} mb={2}>
                            <ul>
                                <li>
                                    Too many comments explaining code are a sign of bad code that is being compensated for by comments. Good code should be self-explanatory and a method name should be enough to explain what the method does.
                                    If that is not the case, the method might be doing too much and should be broken down into smaller methods.
                                </li>
                                <li>
                                    Code changes quite often in the sofwtare development process. If the code changes, the comments might not be updated to reflect the changes. This can lead to confusion and bugs.
                                </li>
                            </ul>
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>
                            When should we write comments?
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            In my opinion, comments should only be written when they are absolutely necessary:
                        </Typography>
                        <Typography variant={'body1'} ml={2} mb={2}>
                            <ul>
                                <li>
                                    The REQUIRES, MODIFIES, and EFFECTS clauses are useful for documenting preconditions, postconditions, and side effects, they are not necessary for every method and I prefer using them in interfaces and abstract classes where the implementation is not known.
                                    This way, a developer can look at the interface and know what the method does without having to look at the implementation. This is again not absolutely necessary, but it is a good practice. A developer can often get a good idea of what a method does by looking at the method signature.
                                </li>
                                <li>
                                    One place where comments are absolutely necessary is when we are using a hacky solution to a problem. In this case, we should write a comment explaining why we are using a hacky solution and what the hacky solution is doing. This can help other developers understand the code and avoid making changes that might break the hacky solution.
                                </li>
                                <li>
                                    TODO comments are also useful for documenting future work that needs to be done. This can help other developers understand the code and avoid making changes that might break the future work.
                                </li>
                            </ul>                        
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>
                            Conclusion
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            Comments can be useful in some cases, but they should be used sparingly. They should not be used to explain what the code is doing. If the code is not self-explanatory, it should be refactored to make it self-explanatory.
                            No amount of comments can compensate for bad code.
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant="h4" mb={2}>References</Typography>
                        <Typography variant={'body1'} ml={2}>
                            <ul>
                                <li>
                                    Images from: <a href='https://refactoring.guru/smells/comments' target='_blank' rel="noreferrer">https://refactoring.guru/smells/comments</a>
                                </li>
                            </ul>
                        </Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}
