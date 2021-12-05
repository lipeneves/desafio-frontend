import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

import Card from '../../components/Card';

const Home = () => {

  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('pokemon?limit=151').then(
      response => {
        setPokes(response.data.results);
      }
    )
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    });
  }, []);

  if (loading) {
    return(
      <p>Loading...</p>
    )
  }

  return (
    <>
      <div className="container">
        <div className="cards">
          {pokes?.map((item, index) => (
            <Card key={index} title={item?.name}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;