import SideNav, {  NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Sidebar.css'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'

export default function Sidebar() {
  return <SideNav
         onSelect={selected=>{
          console.log(selected)
         }}
         className='sidebar'
         >
          <SideNav.Toggle />
   
        <NavItem eventKey="none">
            <NavIcon>
            <img src={logo1} className ="logo1"  alt="group1"/>
            <img src={logo2} className ="logo2"  alt="group1"/>
            <img src={logo3} className ="logo3"  alt="group1"/>
            </NavIcon>
            
        
        
        </NavItem>
   
</SideNav>
}

