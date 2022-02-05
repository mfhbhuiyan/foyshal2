import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components

import Home from '../MainMenu/Home/Home';
import About from '../MainMenu/About/About';
import Destinations from '../MainMenu/Destinations/Destinations';
import Country from '../MainMenu/Destinations/Country/Country'
import Blog from '../MainMenu/Blog/Blog';
import Services from '../MainMenu/Services/Services';
import Contacts from '../MainMenu/Contacts/Contacts';
import Project from '../MainMenu/Project/Project';
// import Prokolpa from '../MainMenu/Project/Prokolpa/Prokolpa';
import Aba from '../MainMenu/Project/Aba/Aba.js';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/destinations' component={Destinations} />
      <Route exact path='/destinations/:country' component={Country} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/project' component={Project} />
      {/* <Route exact path='/project/:prokolpa' component={Prokolpa} /> */}
      <Route exact path='/project/aba' component={Aba} />
      
    </Switch>
  )
}

export default Routes