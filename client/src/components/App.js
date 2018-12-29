//will export an component so capital case file name
//lower case letter file name means will not export component or function


import React from 'react';
//import statement bc on front end we are using webpack and babel which get us easy access to es2015 modules
//node js - only good support for common js modules which uses require for import npm

const App = () => {
    return (
        <div>
            Hi There1
            </div>
    );
};

export default App;

