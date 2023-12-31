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
import strategy from '../../../assets/writings/strategy.png';
import structureStrategy from '../../../assets/writings/structureStrategy.png';

export default function Strategy() {
    return (
        <Grid container justifyContent={'center'} sx={{bgcolor: '#f8fafd'}}>
            <Grid item xs={8}>
                <Paper elevation={3} sx={{padding: 4}}>
                    <Typography variant={'subtitle2'}>26.12.2023</Typography>
                    <Divider sx={{mt: 2}}/>
                    <Typography variant={'h1'}>Strategy Design Pattern</Typography>
                    <Typography variant={'subtitle1'} mb={2}>Encapsulating different algorithms for accomplishing the same task</Typography>
                    <Divider sx={{mb: 2}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Avatar alt={'Sparsh Trivedy'} src={sparsh} sx={{marginRight: 2}} />
                        <Typography variant={'subtitle2'}>Sparsh Trivedy</Typography>
                    </Box>
                    <Divider />
                    <img src={strategy} alt={'Singleton Design Pattern'} style={{marginTop: '20px'}} />
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>When to use the strategy design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            If the following criteria are met, then the strategy design pattern is a good choice:
                        </Typography>
                        <Typography variant={'body1'} ml={2}>
                            <ul>
                                <li>
                                    We have a class which has a behaviour that can be implemented in multiple ways.
                                </li>
                                <li>
                                    We want to be able to switch between these implementations at runtime.
                                </li>
                                <li>
                                    We want to be able to add new implementations without modifying the class.
                                </li>
                            </ul>
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>What is the need for the strategy design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            The strategy design pattern is a behavioural design pattern that is used when we have a class which has a behaviour that can be implemented in multiple ways, and we want to be able to switch between these implementations at runtime.
                            If we find ourselves needing to use conditional statements to implement different algorithms for accomplishing the same task, then we should consider using the strategy design pattern.
                        </Typography>
                        <Typography variant={'h5'} mb={2}>
                            Why not just use conditional statements?
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            If we use conditional statements, then we will have to modify the class every time we want to add a new implementation.
                            This is a clear violation of the open-closed principle that states that classes should be open for extension, but closed for modification.
                            The strategy design pattern solves this problem by encapsulating the different algorithms for accomplishing the same task in separate classes, and making these classes interchangeable by using polymorphism.
                            When different algorithms are grouped into the same class, it is difficult to avoid conditional statements.
                            Encapsulating the algorithms into separate classes makes it easier to avoid conditional statements and add new implementations without modifying the class.
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>How to implement the strategy design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            The structure of the strategy design pattern is as follows:
                        </Typography>
                        <Typography variant={'body1'} ml={2} mb={2}>
                            <ul>
                                <li>
                                    We create a strategy interface (<code style={{color: 'GrayText'}}>Strategy</code>) which declares the operations that all concrete strategies must implement.
                                </li>
                                <li>
                                    We create concrete strategy classes (<code style={{color: 'GrayText'}}>ConcreteStrategyA</code>, <code style={{color: 'GrayText'}}>ConcreteStrategyB</code>, <code style={{color: 'GrayText'}}>ConcreteStrategyC</code>) which implement the strategy interface.
                                    The implementation of each method in the concrete strategy classes is different, and represents a different algorithm for accomplishing the same task.
                                </li>
                                <li>
                                    We create a context class (<code style={{color: 'GrayText'}}>Context</code>) which has a reference to the strategy interface.
                                    The context class delegates the work to the strategy object. The context just forwards the request from the client to the strategy object and doesn't know the concrete strategy that is being used.
                                </li>
                                <li>
                                    The client (<code style={{color: 'GrayText'}}>Client</code>) creates a concrete strategy object and passes it to the context. The client can also change the strategy at runtime by passing a different concrete strategy object to the context.
                                    Beyond creating the strategy object and passing it to the context, the client does not interact with the strategy object directly.
                                </li>
                            </ul>
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            The following diagram shows the structure of the strategy design pattern:
                        </Typography>
                        <img src={structureStrategy} alt={'Structure of the strategy design pattern'} />
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>What are the disadvantages of the strategy design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            The strategy design pattern has the following disadvantages:
                        </Typography>
                        <Typography variant={'body1'} ml={2}>
                            <ul>
                                <li>
                                    The client must be aware of the different concrete strategies.
                                    This can be avoided by using the factory method design pattern to create the concrete strategies.
                                </li>
                                <li>
                                    If we only have a few concrete strategies, then the strategy design pattern is overkill.
                                    Adding abstractions to a design for the sake of it is a bad practice and adds unnecessary complexity to the design.
                                </li>
                                <li>
                                    It leads to an increased number of classes in the design. However, this is not a big problem because the classes are generally small and simple.
                                </li>
                            </ul>
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant="h4" mb={2}>References</Typography>
                        <Typography variant={'body1'} ml={2}>
                            <ul>
                                <li>
                                    Images from: <a href='https://refactoring.guru/design-patterns/strategy' target='_blank' rel="noreferrer">https://refactoring.guru/design-patterns/strategy</a>
                                </li>
                                <li>
                                    <a href="https://learning.oreilly.com/library/view/design-patterns-elements/0201633612" target='_blank' rel="noreferrer">https://learning.oreilly.com/library/view/design-patterns-elements/0201633612</a>
                                </li>
                                <li>
                                    <a href="https://github.students.cs.ubc.ca/CPSC310-2023W-T1/lectureSlides" target='_blank' rel="noreferrer">CPSC 310 lecture slides and readings</a>
                                </li>
                            </ul>
                        </Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}
