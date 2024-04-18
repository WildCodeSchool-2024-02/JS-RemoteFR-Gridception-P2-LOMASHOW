import axios from 'axios';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Filter.css";

function Filter ({setActiveFiltre, setIndex, setPage}) {

  const [listFilter, setListFilter] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () =>{  
    setShowModal(!showModal);
  }
  const handleClickFilter = (id) =>{  
    setActiveFiltre(id) 
    setShowModal(false)
    setIndex(0)
    setPage(1)
  }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/genre/movie/list',
            params: {language: 'fr-FR'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          };
          
          const getFilter = () => {
            axios
            .request(options)
            .then(function (response) {
              setListFilter(response.data.genres)
              console.log(response.data)
            })
            .catch(function (error) {
              console.error(error);
            });
          };
          getFilter();
  
    },[]);

    return (
        <div >
            {showModal && 
              <div className='listFilter'>
                {listFilter.map(filtre => {                  
                    return <p className="filtre_description" key={filtre.id} onClick={() => handleClickFilter(filtre.id)}>{filtre.name}</p>
                    })
                  } 
              </div>
            }
            <button className="filtre_button" type="button" onClick={handleClick}>
            <img src="./src/assets/images/sliders.png"/>
            </button>
        </div>
    )
}

Filter.propTypes = {
  setActiveFiltre: PropTypes.func.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

  export default Filter;