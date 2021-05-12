import React from 'react';
import About from './components/About';
import Topics from './components/Topics';
import Main from './components/Main';
import Hdd_vs_Sdd from './components/pages/Hdd_vs_Sdd';
import Website from './components/pages/Website';
import Ram from './components/pages/Ram';
import Search from './components/Search';
import Errorpage from './components/Errorpage';

import {Route ,Switch} from 'react-router-dom';


function App(){
    return(
        <>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/topics' component={Topics}/>
            <Route path='/pages/website' component={Website}/>
            <Route path='/pages/ram' component={Ram}/>
            <Route path='/search' component={Search}/>
            <Route path='/pages/hdd_vs_sdd' component={Hdd_vs_Sdd}/>
            <Route  component={Errorpage}/>
        </Switch>
        </>
    );
    
}

export default App;