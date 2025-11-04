export const CharacterInfo = ({ data }) => {
 
  if (!data) return null; 
  

  const imageUrl = data.image || `https://cdn.thesimpsonsapi.com/200/character/${data.id}.webp`;
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ffc300', margin: '10px' }}>
      <h6>ID: {data?.id || 'N/A'}</h6>
      
      <img 
        src={imageUrl} 
        alt={data.name || 'Simpsons Character'} 
        style={{ width: '150px', borderRadius: '5px' }}
      />
      
      <h1>{data?.name || 'Nombre Desconocido'}</h1>
      <h2>Edad: {data?.age || 'Edad Desconocida'}</h2>
      <p>{data?.description || 'No hay descripción disponible.'}</p>
    </div>
  );
};