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
import singleton from '../../../assets/writings/singleton.png';
import structureSingleton from '../../../assets/writings/structureSingleton.png';

export default function Singleton() {
    return (
        <Grid container justifyContent={'center'} sx={{bgcolor: '#f8fafd'}}>
            <Grid item xs={8}>
                <Paper elevation={3} sx={{padding: 4}}>
                    <Typography variant={'subtitle2'}>26.12.2023</Typography>
                    <Divider sx={{mt: 2}}/>
                    <Typography variant={'h1'}>Singleton Design Pattern</Typography>
                    <Typography variant={'subtitle1'} mb={2}>Answering how, when, why and why not to use the singleton design pattern</Typography>
                    <Divider sx={{mb: 2}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Avatar alt={'Sparsh Trivedy'} src={sparsh} sx={{marginRight: 2}} />
                        <Typography variant={'subtitle2'}>Sparsh Trivedy</Typography>
                    </Box>
                    <Divider />
                    <img src={singleton} alt={'Singleton Design Pattern'} style={{marginTop: '20px'}} />
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>When to use the singleton design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            If the following criteria are met, then the singleton design pattern is a good choice:
                        </Typography>
                        <Typography variant={'body1'} ml={2}>
                            <ul>
                                <li>
                                    We want to limit the number of instances of a class to exactly one.
                                </li>
                                <li>
                                    We want our singular instance of the class to be globally accessible.
                                </li>
                            </ul>
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>What is the need for the singleton design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            There are several situations where we need to limit the number of instances of a class to exactly one. 
                            For example, we need to ensure that there is only one instance of a class which controls access to a hardware device, or that there is only one instance of a class which manages a shared resource such as a database or a file or for logging purposes.
                        </Typography>
                        <Typography variant={'h5'} mb={2}>
                            Why not just ask developers to not instantiate more than one object of the class?
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            We could achieve this by simply asking developers to not instantiate more than one object of the class, but this is not a foolproof solution.
                            There is no way to enforce this rule, and developers can easily instantiate more than one object of the class accidentally.
                            The singleton design pattern enforces this rule by making the constructor private, and providing a static method to access the single instance of the class.
                            The class itself is responsible for keeping track of its sole instance which it can create if it does not exist, and return as a reference to clients.
                        </Typography>
                        <Typography variant={'h5'} mb={2}>
                            Why not just use a global variable?
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            If we assign an object to a global variable, then it will be created when the program starts, and will remain in memory until the program ends.
                            This is true even if the object is never used during the execution of the program.
                            This is a waste of memory resources, and may adversely affect the performance of the program.
                            The singleton design pattern solves this problem by creating the object only when it is needed.
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>How to implement the singleton design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            The structure of the singleton design pattern is as follows:
                        </Typography>
                        <Typography variant={'body1'} ml={2} mb={2}>
                            <ul>
                                <li>
                                    We want to ensure we can only create one instance of the class. We know constructors are typically public methods and can be invoked from anywhere. So we make the constructor private so it can only be invoked from within the class.
                                </li>
                                <li>
                                    Now we cannot create an object of the class from outside the class, so let's create a method which creates an instance of the class if it does not exist, and returns it. Let's call this method <code style={{color: 'GrayText'}}>getInstance()</code>.
                                </li>
                                <li>
                                    Since our constructor is private, we cannot create an object of the class from outside the class. So we make our method <code style={{color: 'GrayText'}}>getInstance()</code> static so we can invoke it like this: <code style={{color: 'GrayText'}}>Singleton.getInstance()</code> from anywhere outside the class.
                                </li>
                                <li>
                                    The class itself keeps track of its single instance (<code style={{color: 'GrayText'}}>instance</code>), and creates it if it does not exist.
                                </li>
                            </ul>
                        </Typography>
                        <Typography variant={'body1'} mb={2}>
                            Therefore, this design pattern enforces that there is only one instance of the class, and provides a global point of access to it.
                        </Typography>
                        <img src={structureSingleton} alt={'Structure of the singleton design pattern'} />
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant={'h4'} mb={2}>What are the disadvantages of the singleton design pattern?</Typography>
                        <Typography variant={'body1'} mb={2}>
                            The singleton design pattern has the following disadvantages:
                        </Typography>
                        <Typography variant={'body1'} ml={2}>
                            <ul>
                                <li>
                                    Special accomodations must be made in a multi-threaded environment to ensure that only one instance of the class is created so that multiple threads do not create multiple instances of the class.
                                </li>
                                <li>
                                    It is not possible to subclass a singleton class. This is because the constructor is private, and we cannot invoke the constructor of the superclass from within the subclass.
                                </li>
                                <li>
                                    The use of singleton violates the single responsibility principle. The singleton class is responsible for creating the single instance of the class, and also for providing global access to it.
                                </li>
                                <li>
                                    The singleton design pattern is often used to provide global access to a resource in an application. This is not a good practice as it makes the application less modular and more tightly coupled.
                                </li>
                                <li>
                                    It is difficult to unit test classes which use singletons as it is not possible to mock the singleton class. This is because if we mock the singleton class, then we are not testing the singleton class, but the class which uses the singleton class.
                                </li>
                            </ul>
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant="h4" mb={2}>Conclusion</Typography>
                        <Typography variant={'body1'} mb={2}>
                            From the above discussion, it is clear that the singleton design pattern violates a lot of design principles and seems like a bad design choice.
                            However, it is very useful in the specific situations where we need to limit the number of instances of a class to exactly one, and we want our singular instance of the class to be globally accessible.
                            It is also a widely used and understood design pattern which makes it easy for developers to understand the code.
                            However, it should be used with caution, and only when it is absolutely necessary. It is a very easy design pattern, so it is often overused and misused which is clearly a bad practice.
                            If a system has too many singletons, then it is a sign of bad design that needs to be refactored.
                        </Typography>
                    </div>
                    <div style={{margin: '40px 0'}}>
                        <Typography variant="h4" mb={2}>References</Typography>
                        <Typography variant={'body1'} ml={2}>
                            <ul>
                                <li>
                                    Images from: <a href='https://refactoring.guru/design-patterns/singleton' target='_blank' rel="noreferrer">https://refactoring.guru/design-patterns/singleton</a>
                                </li>
                                <li>
                                    <a href="https://learning.oreilly.com/library/view/head-first-design/9781492077992/" target='_blank' rel="noreferrer">https://learning.oreilly.com/library/view/head-first-design/9781492077992/</a>
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
