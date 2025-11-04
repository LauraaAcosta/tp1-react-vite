import React, { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter.js";

export default function MultipleCustomHooks() {
  const [character, setCharacter] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  const { count, handleIncrement } = useCounter(1);
  const url = `https://https://thesimpsonsquoteapi.glitch.me/quotes?count=1&id=${count}`; // Usaremos la API simple por seguridad

  const getFetch = async () => {
    setIsLoading(true);
    setHasError(null); 
    
    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error("Error al obtener datos");

      const dataArray = await resp.json();
      

      const characterData = dataArray[0]; 
      
      await new Promise((resolve) => setTimeout(resolve, 300));

      setCharacter(characterData);
      setIsLoading(false);

    } catch (error) {
      console.error("Error al hacer fetch:", error);
      setHasError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFetch();
  }, [count, url]); 

  return (
    <>
      <h1>Personajes simpsons</h1>
      <h3>Personaje: {count}</h3>
      
      {/* Carga */}
      {isLoading && <h1>Cargando...</h1>}
      
      {/* Error */}
      {hasError && <h2>Error: {hasError}</h2>}
      

      {!isLoading && character && (
        <div>

          <h5>{character.character}</h5> 
          <p>"{character.quote}"</p>
          
          <img
            src={character.image} 
            alt={character.character}
            style={{ maxWidth: '150px' }}
          />
        </div>
      )}

      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
    </>
  );
}