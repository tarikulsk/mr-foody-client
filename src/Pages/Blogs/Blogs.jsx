import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-2 mt-20'>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        1. Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        2. How to validate React props using PropTypes
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        3. Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        4. What is a custom hook, and why will you create a custom hook?
                        <div className="collapse-content">

                            <h6>
                                <span className='font-bold'>Custom Hook</span>:
                                A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
                            </h6>
                            <br />
                            <h6>
                                Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell
                            </h6>
                        </div>
                    </div>


                </div>
            </div>

            <div >
                <img src="https://raw.githubusercontent.com/rajpratyush/rajpratyush/master/me_1.gif" alt="" />
            </div>
        </div>
    )
};

export default Blogs;