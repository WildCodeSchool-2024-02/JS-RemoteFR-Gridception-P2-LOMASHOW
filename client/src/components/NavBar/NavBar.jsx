import Filter from "../Filter/Filter";
import "./NavBar.css";

const NavBar = ({setActiveFiltre, index, setIndex, setPage }) => {

    return (
        <nav className="navbar_container">
            <div className="nav">
                <div className="filter">
                    <Filter setActiveFiltre={setActiveFiltre} index={index} setIndex={setIndex} setPage={setPage}/>
                </div>  
            </div>         
        </nav>
    );
};

export default NavBar;