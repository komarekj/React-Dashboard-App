import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useResourceContext from './useResourceContext';
import { resourceSearch } from '../../../redux/resources/resourcesActions';

const useResourceSearch = () => {
  const dispatch = useDispatch();
  const { searchField, resource } = useResourceContext();
  const { searchValue } = useParams();

  const results = useSelector(state => state.resources[resource].searchResults);
  const isLoading = useSelector(state => state.resources[resource].isLoading);
  const hasError = useSelector(state => state.resources[resource].hasError);

  useEffect(() => {
    dispatch(resourceSearch(searchValue, searchField, resource));
  }, [dispatch, searchValue, searchField, resource]);

  return {
    results,
    isLoading,
    hasError,
  };
};

export default useResourceSearch;
