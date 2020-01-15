import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../redux/dashboard/dashboardActions';

const useDashboard = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.dashboard.data);
  const isLoading = useSelector(state => state.dashboard.isLoading);
  const hasError = useSelector(state => state.dashboard.hasError);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return { data, hasError, isLoading };
};

export default useDashboard;
