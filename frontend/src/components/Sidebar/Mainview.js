import React from 'react'
import * as s from './Mainview.styles'
import * as Palette from './colors'
import SideMenu from "./SideMenu/SideMenu.js"
import MainMenu from "./MainMenu/MainMenu.js"

const Mainview = () =>{
    const backgroundImage = 'images/mountain.jpg';
    const sidebarHeader = {
      fullName: 'Rupshi Online',
      shortName: 'Rupshi'
    };
    const menuItems = [
      {name: 'Home', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
      {name: 'About', to: '/about', icon: '/icons/about.svg', subMenuItems: [] },
      {name: 'Destinations', to: '/destinations', icon: '/icons/destinations.svg', 
        subMenuItems: [
          { name: 'Canada', to: '/canada'},        
          { name: 'Brazil', to: '/brazil'},
          { name: 'India', to: '/india'},
          { name: 'Australia', to: '/australia'},
          { name: 'Kenya', to: '/kenya'},
          { name: 'Moldova', to: '/moldova'}
        ] },
      {name: 'Blog', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
      {name: 'Services', to: '/services', icon: '/icons/services.svg', subMenuItems: [] },
      {name: 'Contacts', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] },
      {name: 'Project', to: '/project', icon: '/icons/contacts.svg',
       subMenuItems: [
        { name: 'Aba', to: '/aba'},        
        { name: 'Akok', to: '/akok'},
        { name: 'IBT', to: '/ibt'},
        { name: 'Ala', to: '/ala'},
        { name: 'Jba', to: '/jba'},
        { name: 'Ia', to: '/ia'}

      ] },
    ];
  
    const fonts = {
      header: 'ZCOOL KuaiLe',
      menu: 'Poppins'
    }
  
    return(
        <s.MainviewContainer>
            
           <SideMenu
            backgroundImage={backgroundImage}
            sidebarHeader={sidebarHeader}
            menuItems={menuItems}
            fonts={fonts}
            colorPalette={Palette.brown}
           >

           </SideMenu>
           <MainMenu></MainMenu>
            
            
            </s.MainviewContainer>
    )
}

export default Mainview;