import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useResourceContext from './useResourceContext';
import { fetchResourcePage } from '../../../redux/resources/resourcesActions';

const DEFAULT_ROWS_PER_PAGE = 25;

const useResourceListing = () => {
  // Hooks
  const dispatch = useDispatch();
  const { resource } = useResourceContext();
  const { page } = useParams();
  const [items, setItems] = useState([]);

  // Resource specific redux state
  const allItems = useSelector(state => state.resources[resource].items);
  const pages = useSelector(state => state.resources[resource].pages);
  const itemCount = useSelector(state => state.resources[resource].count);
  const isLoading = useSelector(state => state.resources[resource].isLoading);
  const hasError = useSelector(state => state.resources[resource].hasError);

  // Update page items
  useEffect(() => {
    const currentPageIds = pages[page];

    // Regural listing
    if (!currentPageIds) {
      // Needs to fetch page items
      dispatch(fetchResourcePage(page, resource));
    } else {
      // Using cached listing
      const currentPageItems = currentPageIds.map(pageItem =>
        allItems.find(item => item._id === pageItem)
      );
      setItems(currentPageItems);
    }
  }, [page, pages, dispatch, allItems, resource]);

  return {
    items,
    isLoading,
    hasError,
    itemCount,
    currentPage: page,
    rowsPerPage: DEFAULT_ROWS_PER_PAGE,
  };
};

export default useResourceListing;
