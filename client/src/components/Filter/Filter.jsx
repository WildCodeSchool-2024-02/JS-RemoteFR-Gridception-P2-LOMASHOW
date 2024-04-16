import axios from 'axios';
import { useEffect, useState } from "react";
import "./Filter.css";

function Filter ({setActiveFiltre}) {

  const [listFilter, setListFilter] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () =>{  // ouvre le filtre grâce au bouton
    setShowModal(!showModal);
  }
  const handleClickFilter = (id) =>{  // dans doc API, il faut mettre l'id en paramètres
    setActiveFiltre(id)
    setShowModal(false);
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
            })
            .catch(function (error) {
              console.error(error);
            });
          };
         
          getFilter();

    },[]);

    return (
        <div >
            {showModal && // condition d'affichage
              <div className='listFilter'>
                {listFilter.map(filtre => {                  
                    return <p value={filtre.id} onClick={() => handleClickFilter(filtre.id)}>{filtre.name}</p>
                    })
                  } 
              </div>
            }
            <button className="filtre_button" type="button" onClick={handleClick}>
            <img src="./src/assets/images/list.png"/>
            </button>
        </div>
    )
}


  export default Filter;