import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from './ResultsContainer.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Results from '../../components/Results/Results';
import Spinner from '../../UI/Spinner/Spinner'; 
import Error from '../../components/Error/Error';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ResultsContainer = () => {  
  const queryParam = useQuery().get('q');

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(queryParam);
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scrollPosition, setScrollPosition] = useState([0, 0]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setQuery(queryParam);
    setPagesLoaded(1);
    setImages([]);
  }, [queryParam]);

  useEffect(() => onLoadImages(), [pagesLoaded, query]);
  const apiKey = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

  const onLoadImages = () => {
    setLoading(true);
    setError(false);
    axios.get('https://api.unsplash.com/search/photos', {
          params: { query: query, page: pagesLoaded, per_page: 12},
          headers: {
            Authorization: 'Client-ID '+apiKey
          }
      })
      .then(res => {
        setImages(images.concat(res.data.results));
        setLoading(false);
        setTotalPages(res.data.total_pages);
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);        
        setError(true);
      });
  };

  const onLoadMore = () => {
    if(pagesLoaded < totalPages){
      setScrollPosition([window.scrollX, window.scrollY]);
      setPagesLoaded(pagesLoaded + 1);
    }
  };

  let imageGrid = null;  
  if(images){
    imageGrid = <Results images={images} loadMore={onLoadMore} loading={loading} />;
  }
  if(error){
    imageGrid = <Error/>
  }
  return (
    <div className={styles.ResultsContainer}>
      <Navbar query={query} /> 
      {imageGrid}
    </div>
  );
};

export default ResultsContainer;
