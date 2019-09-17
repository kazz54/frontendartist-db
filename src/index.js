import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



// COMPONENTS
import Home from './components/home';
import Artist from './components/artist';
import Default from './components/default';

const App = () =>{
    return (
        <BrowserRouter>
            <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/artist/:artistid" component={Artist}></Route>
                <Route component={Default} />
             </Switch>   
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
