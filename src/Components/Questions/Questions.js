import React from 'react';
import '../Questions/Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='questions'>
                <h3>1. How does react works?<br />
                    <p>ans: React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. </p>
                </h3>
            </div>
            <div className='questions'>
                <h3>2. What are the differences between props and state?<br />
                    <p>ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </h3>
            </div>
            <div className='questions'>
                <h3>3. what is the purpose of using useEffect?<br />
                    <p>ans: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
                </h3>
            </div>
        </div>
    );
};

export default Questions;