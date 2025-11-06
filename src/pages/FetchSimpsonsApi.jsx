import { CharacterInfo } from "../components/CharacterInfo.jsx";
import { Loading } from "../components/Loading.jsx";
import useCounter from "../hooks/useCounter.js";
import useFetch from "../hooks/useFetch.js";

export const FetchSimpsonsApi = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  
  const apiUrl = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, loading, hasError } = useFetch(apiUrl);

  return (
    <div className="simpsons-container">
      <h1>Personajes de Los Simpson</h1>
      
      {loading && <Loading loading={loading} />}

      {/* Manejo de error mejorado */}
      {hasError && (
        <div className="error-message">
          Error al cargar los personajes: {hasError.toString()}
        </div>
      )}
      
      {!loading && !hasError && data && <CharacterInfo data={data} />}

      <div className="controls">
        <button 
          onClick={() => handleDecrement(1)} 
          // disabled={count === 1 || loading}
          className="button-control"
        >
          Anterior
        </button>

        <button 
          onClick={() => handleIncrement(1)}
          disabled={loading}
          className="button-control"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

// Añadimos export default
export default FetchSimpsonsApi;