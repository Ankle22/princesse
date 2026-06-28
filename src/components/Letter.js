function Letter({ content, message }) {
  // Séparer le message en paragraphes sur les retours à la ligne
  const paragraphs = message.message.split('\n');
  
  return (
    <section className="section letter">
      <h2>{message.id === 0 ? content.heading : `Voeux de ${message.name}`}</h2>
      <div className="letter-card">
        {paragraphs.map((paragraph, index) => {
          if (!paragraph) return null;
          
          // Vérifier si c'est une ligne de signature (commence par "—" ou "-")
          const trimmed = paragraph.trim();
          const isSignature = trimmed.startsWith('—') || trimmed.startsWith('-');
          
          if (isSignature) {
            return <p key={index} className="closing">{paragraph}</p>;
          }
          
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
}

export default Letter;
