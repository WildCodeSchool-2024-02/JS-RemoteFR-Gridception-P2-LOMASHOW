import "./ButtonChange.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";



function ButtonChange({ setIndex, index, page, setPage }) {
    const [hideBtn, setHideBtn] = useState(false);

    useEffect(() => { // verifie à chaque changement d'index
        if (page <= 1 && index <= 0)
            setHideBtn(true); //affiche le bouton précédent
        else
            setHideBtn(false) //sinon cache le bouton
    }, [index]); // tableau déclencheur

    const handleClickPrecedent = () => {
        if (index <= 1 && page > 1) {
            setPage(page - 1);
            setIndex(19);
        }
        else {
            setIndex(index - 1);
        }
    }

    const handleClickSuivant = () => {
        if (index >= 19) {
            setPage(page + 1);
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    return (
        <section className="buttonChange">
            <div>
                {!hideBtn ? <button className="button1" onClick={handleClickPrecedent}><img src="./src/assets/images/button1.png" /></button> : undefined}
            </div>
            <div>
                <button className="button2" onClick={handleClickSuivant}><img src="./src/assets/images/button2.png" /></button>
            </div>
        </section>
    )
}

export default ButtonChange;



ButtonChange.propTypes = {
    index: PropTypes.number.isRequired,
    setIndex: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    page: PropTypes.arrayOf(
        PropTypes.shape({
            overview: PropTypes.string.isRequired,
            img: PropTypes.string,
        })
    ).isRequired,

};