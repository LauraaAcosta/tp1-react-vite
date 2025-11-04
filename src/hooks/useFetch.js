import { useEffect, useState } from "react";

const initialFetchState = {
  data: null,
  loading: true,
  hasError: null,
};

export const useFetch = (url) => {
  const [state, setState] = useState(initialFetchState);

  const getFetch = async () => {
    if (!url) return;
    
    setState(prev => ({ 
        ...initialFetchState, 
        loading: true 
    })); 

    try {
      const resp = await fetch(url);
      
      if (!resp.ok) {
        throw new Error(`Error al hacer el fetch: ${resp.statusText}`);
      }
      
      const data = await resp.json();
      
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      setState(prev => ({
        ...prev, 
        data: data,
        loading: false,
        hasError: null,
      }));

    } catch (error) {
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state,
    fetchState: state 
  };
};