import React,{useEffect,useState} from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WebFont from "webfontloader";
import Mainview from "./components/Sidebar/Mainview"

function App() {
  
  React.useEffect(() => {
  WebFont.load({
  google:{families: ["Roboto", "Droid Sans", "Chilanka"],

  },
});


}, []);


  return (
    
    
    <Router>
      
      <Mainview></Mainview>

    {/* <Header></Header> */}

    
   
    <main>
    
    <Switch>
        
   
    </Switch>

    </main>
    {/* <Footer></Footer> */}
    </Router>

        

  );
}

export default App;
   