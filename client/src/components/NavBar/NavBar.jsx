import Filter from "../Filter/Filter";
import PropTypes from "prop-types";
import "./NavBar.css";

function NavBar ({setActiveFiltre, index, setIndex, setPage }) {

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

NavBar.propTypes = {
    setActiveFiltre: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    setIndex: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
  };


export default NavBar;