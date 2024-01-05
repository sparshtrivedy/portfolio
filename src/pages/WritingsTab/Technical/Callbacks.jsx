import React from "react";
import {
    Avatar,
    Divider,
    Grid,
    Paper,
    Typography,
    Box,
} from "@mui/material";
import sparsh from '../../../assets/images/sparsh.jpg';
import callbacks from '../../../assets/writings/callbacks.jpg';

export default function Callbacks() {
    return (
        <Grid container justifyContent={'center'} sx={{bgcolor: 'background.main'}}>
            <Grid item xs={12} sm={8}>
                <Paper elevation={3}>
                    <Box sx={{ p: {xs: 2, sm: 4} }}>
                        <Typography variant={'subtitle2'}>01.01.2024</Typography>
                        <Divider sx={{mt: 2}}/>
                        <Typography variant={'h1'}>Callbacks and Async</Typography>
                        <Typography variant={'subtitle1'} mb={2}>
                            Exploring callbacks, promises, async/await, and the event loop in JavaScript
                        </Typography>
                        <Divider sx={{mb: 2}}/>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Avatar alt={'Sparsh Trivedy'} src={sparsh} sx={{marginRight: 2}} />
                            <Typography variant={'subtitle2'}>Sparsh Trivedy</Typography>
                        </Box>
                        <Divider />
                        <img src={callbacks} alt={'Callback hell loop'} style={{marginTop: '20px', width: '100%'}} />
                        <div style={{margin: '40px 0'}}>
                            <Typography variant="h4" mb={2}>
                                The JavaScript event loop
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                JavaScript is a single-threaded language which means it can only execute one operation at a time and this another operation can only be executed once the previous operation has finished executing.
                                Since only one operation can be executed at a time, it is important that these operations don't take too long to execute since this will block the main thread and make the application unresponsive.
                                The issue though is that a lot of operations can take a lot longer than the threshold of 16ms that is required to keep the application responsive.
                                For example, fetching data from a database or making an API call can take a long time.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Since JavaScript needs to be able to handle these blocking operations, it has a concurrency model based on an event loop.
                                Once a blocking operation is encountered, it is offloaded to the web APIs where it is executed asynchronously.
                                Once the blocking operation has finished executing, it is added to the callback queue.
                                Meanwhile, the operations in the call stack continue to execute.
                                The event loop then checks if the call stack is empty. If it is empty, it takes the first operation from the callback queue and adds it to the call stack.
                                This is how JavaScript handles blocking operations without blocking the main thread.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                <a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D" target='_blank' rel="noreferrer">
                                    A cool event loop visualization tool.
                                </a>
                            </Typography>
                        </div>
                        <div style={{margin: '40px 0'}}>
                            <Typography variant={'h4'} mb={2}>
                                What is a callback function and why do we need it?
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Just like we can pass a primitive or an object as an argument to a function, we can also pass a function as an argument to a function.
                                A function that is passed as an argument to another function is called a callback function.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                All operations can either be synchronous or asynchronous.
                                Most of the operations we perform day-to-day are synchronous which means they are performed sequentially one after the other.
                                For example, if we have two lines of code, the second line of code will not be executed until the first line of code has finished executing.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                However, some operations are asynchronous which means they are performed in parallel.
                                The issue with asynchronous operations is that we do not know when a certain operation will finish executing.
                                Operations such as fetching data from a database or making an API call are  asynchronous operations.
                                Even though these are asynchronous operations, we often need to make sure that a certain operation is performed only after the asynchronous operation has finished executing.
                                For example, we might need to fetch data from a database and then display it on the screen.
                                This is where callback functions come in handy.
                            </Typography>
                        </div>
                        <div style={{margin: '40px 0'}}>
                            <Typography variant={'h4'} mb={2}>
                                How to use callback functions?
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Let's say we want to read a file and then display its contents on the screen.
                                We can use the <code style={{color: 'GrayText'}}>readFile()</code> method from the <code style={{color: 'GrayText'}}>fs</code> module in Node.js to read the file.
                                This is an asynchronous operation which means we need to use a callback function.
                                The <code style={{color: 'GrayText'}}>readFile()</code> method takes two arguments: the path to the file, and a callback function.
                                The callback function is invoked only after the file has been read.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                The callback function responsible for displaying the contents of the file on the screen, takes two arguments: an error object, and the contents of the file.
                                It is only by convention that the first argument of the callback function is an error object. This is called the error-first idiom.
                                Handling errors with callbacks is not easy because callbacks are invoked but they don't return anything. This is why we need to pass an error object as the first argument of the callback function.
                                If there is an error, the error object will be passed to the callback function, and if there is no error, the error object will be <code style={{color: 'GrayText'}}>null</code>.
                            </Typography>
                        </div>
                        <div style={{margin: '40px 0'}}>
                            <Typography variant={'h4'} mb={2}>
                                What is the problem with callback functions?
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Let's say that once we have read the file and displayed its contents on the screen, we want to write to the file.
                                We can use the <code style={{color: 'GrayText'}}>writeFile()</code> method from the <code style={{color: 'GrayText'}}>fs</code> module in Node.js to write to the file.
                                This is also an asynchronous operation which means we need to use a callback function.
                                Therefore, we need to nest the <code style={{color: 'GrayText'}}>writeFile()</code> method inside the callback function of the <code style={{color: 'GrayText'}}>readFile()</code> method.
                                We can see that this can quickly become a problem as we need to nest more and more callback functions inside each other. This is called callback hell.
                                This makes the code difficult to read and maintain. Therefore, we need a better solution.
                            </Typography>
                        </div>
                        <div style={{margin: '40px 0'}}>
                            <Typography variant={'h4'} mb={2}>
                                Promises to the rescue!
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Promises do the exact same thing as callback functions, but they are much easier to read and maintain.
                                They are basically syntactic sugar for callback functions that aim to flatten the nested callback structure.
                                They are also a lot more powerful than callback functions when it comes to handling errors by enabling us to use the <code style={{color: 'GrayText'}}>try-catch</code> block.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                A promise is an object that represents the eventual completion or failure of an asynchronous operation.
                                It is a placeholder for a future value.
                                A promise can be in one of three states: pending, fulfilled, or rejected.
                                When a promise is created, it is in the pending state. It can then transition to the fulfilled state if the asynchronous operation is successful, or to the rejected state if the asynchronous operation fails.
                                Once a promise is fulfilled or rejected, it cannot transition to any other state.
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Another nice feature of promises is that they can be composed which is especially useful when we have multiple asynchronous operations that need to be executed in parallel.
                                We can use the <code style={{color: 'GrayText'}}>Promise.all()</code> method to execute multiple asynchronous operations in parallel. 
                                This method takes an array of promises as an argument and returns a promise that is fulfilled when all the promises in the array are fulfilled, or rejected if any of the promises in the array are rejected.
                                We can also use the <code style={{color: 'GrayText'}}>Promise.race()</code> method to execute multiple asynchronous operations in parallel.
                                This method takes an array of promises as an argument and returns a promise that is fulfilled when the first promise in the array is fulfilled, or rejected if the first promise in the array is rejected.
                            </Typography>
                        </div>
                        <div style={{margin: '40px 0'}}>
                            <Typography variant="h4" mb={2}>
                                Async/await
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Async/await is syntactic sugar for promises that aims to make asynchronous code look and behave more like synchronous code.
                                It is a way to write asynchronous code that looks like synchronous code.
                                Async/await is built on top of promises and is easier to read and maintain than promises.
                            </Typography>
                        </div>
                        <div style={{margin: '40px 0'}}>
                            <Typography variant={'h4'} mb={2}>
                                Conclusion
                            </Typography>
                            <Typography variant={'body1'} mb={2}>
                                Callback functions are useful for handling asynchronous operations in JavaScript.
                                However, they can quickly become difficult to read and maintain when we have multiple nested callback functions.
                                This is where promises and async/await come in handy.
                                Promises are syntactic sugar for callback functions that aim to flatten the nested callback structure.
                                Async/await is syntactic sugar for promises that aims to make asynchronous code look and behave more like synchronous code.
                                It is a way to write asynchronous code that looks like synchronous code.
                                Async/await is built on top of promises and is easier to read and maintain than promises.
                            </Typography>
                        </div>
                        <div style={{margin: '40px 0'}}>
                            <Typography variant="h4" mb={2}>References</Typography>
                            <Typography variant={'body1'} ml={2}>
                                <ul>
                                    <li>
                                        Images from: <a href='https://unsplash.com/photos/spiral-concrete-staircase-u2d0BPZFXOY' target='_blank' rel="noreferrer">https://unsplash.com/photos/spiral-concrete-staircase-u2d0BPZFXOY</a>
                                    </li>
                                    <li>
                                        <a href="https://www.simplilearn.com/tutorials/javascript-tutorial/callback-function-in-javascript" target='_blank' rel="noreferrer">https://www.simplilearn.com/tutorials/javascript-tutorial/callback-function-in-javascript</a>
                                    </li>
                                    <li>
                                        <a href="https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/" target='_blank' rel="noreferrer">https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/ubccpsc/310/blob/main/resources/readings/Async.md" target='_blank' rel="noreferrer">https://github.com/ubccpsc/310/blob/main/resources/readings/Async.md</a>
                                    </li>
                                    <li>
                                        <a href="https://github.students.cs.ubc.ca/CPSC310-2023W-T1/lectureSlides" target='_blank' rel="noreferrer">CPSC 310 lecture slides and readings</a>
                                    </li>
                                    <li>
                                        <a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D" target='_blank' rel="noreferrer">event loop visualization</a>
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
