import React from "react";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import { useDispatch,useSelector } from "react-redux";
import { disabledNav } from "../redux/activeNav";

function Header() {
    // const {disabledNav}=useSelector(state=>state.activeNav)
  const dispatch = useDispatch()
    return (  
        <header onClick={(e)=>{
            const shouldIDisabledNav=e.target.closest(".menu__popup")?false:true
           
            dispatch(disabledNav(shouldIDisabledNav))
        }}className="header">
            <div className="wrapper">
            <LogoSection/>
            </div>
            <MenuSection/>
        </header>
    );
}

export default Header
