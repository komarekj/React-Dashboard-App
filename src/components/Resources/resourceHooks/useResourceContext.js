import { useContext } from 'react';
import ResourceContenxt from '../context/ResourceContext';

const useResourceContext = () => useContext(ResourceContenxt);

export default useResourceContext;
