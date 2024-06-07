import style from "./Sidebar.module.css"
import icon0 from "../icons/icon0.svg"
import Ellipse from "../icons/Ellipse 5.png"
import icon1 from "../icons/icon1.svg"
import icon2 from "../icons/icon2.svg"
import icon3 from "../icons/icon3.svg"
import icon4 from "../icons/icon4.svg"
import icon5 from "../icons/icon5.svg"
import icon6 from "../icons/icon6.svg"
import icon7 from "../icons/icon7.svg"
import icon8 from "../icons/icon8.svg"
import icon9 from "../icons/icon9.svg"
import icon10 from "../icons/icon10.svg"




function Sidebar() {
  return (
    <div className={style.sidebarContainer}>
      <img src={icon0} alt="logo" />
      <img src={Ellipse} alt="Ellipse" />
      <img src={icon1} alt="icon1" />
      <img src={icon2} alt="icon2" />
      <img src={icon3} alt="icon3" />
      <img src={icon4} alt="icon4" />
      <img src={icon5} alt="icon5" />
      <img src={icon6} alt="icon6" />
      <img src={icon7} alt="icon7" />
      <img src={icon8} alt="icon8" />
      <img src={icon9} alt="icon9" />
      <img src={icon10} alt="icon10" />
    </div>
  );
}

export default Sidebar;
