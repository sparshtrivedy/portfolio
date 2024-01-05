import singleton from '../assets/writings/singleton.png'
import strategy from '../assets/writings/strategy.png'
import codecomments from '../assets/writings/codecomments.png'
import callbacks from '../assets/writings/callbacks.jpg'

const writings = [
    {
        image: singleton,
        title: 'Singleton Design Pattern', 
        description: 'The singleton design pattern is a creational design pattern that restricts the instantiation of a class to exactly one object. This is a very simple and easy to use design pattern; however, it is often overused and misused.',
        id: 'singleton'
    },
    {
        image: strategy,
        title: 'Strategy Design Pattern',
        description: 'The strategy design pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern lets the algorithm vary independently from the clients that use it.',
        id: 'strategy'
    },
    {
        image: codecomments,
        title: 'Do I need comments in my code?',
        description: 'Comments are a very important part of programming. However, comments can be misused quite frequenty. This article will discuss how I decide when to use comments and when not to use comments in my code.',
        id: 'comments'
    },
    {
        image: callbacks,
        title: 'Callbacks, Promises, and Async/Await',
        description: 'Callbacks are a way to make sure certain code doesn\'t execute until other code has already finished execution. However, callbacks can be a pain to work with. This article will explain how to use callbacks and how to avoid callback hell.',
        id: 'callbacks'
    }
];

export default writings;
