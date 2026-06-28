import { useState, useRef } from "react";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Guestbook from "./components/Guestbook";
import Footer from "./components/Footer";
import {
  heroContent,
  letterContent,
  galleryContent,
  guestbookContent,
  footerContent,
  andersonMessage,
} from "./content";
import "./App.css";

function App() {
  const [currentLetterMessage, setCurrentLetterMessage] = useState(andersonMessage);
  const [envelopesMessages, setEnvelopesMessages] = useState(guestbookContent.messages);
  const letterSectionRef = useRef(null);

  const handleSelectMessage = (selectedEnvelope) => {
    // Mettre à jour les enveloppes : remplacer le message sélectionné par le message actuel de la lettre
    const newEnvelopes = envelopesMessages.map(msg => 
      msg.id === selectedEnvelope.id ? currentLetterMessage : msg
    );
    setEnvelopesMessages(newEnvelopes);
    
    // Mettre à jour la lettre avec le message sélectionné
    setCurrentLetterMessage(selectedEnvelope);
    
    // Scroll vers la section "Mon mot pour toi"
    setTimeout(() => {
      letterSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  return (
    <>
      <Hero content={heroContent} />
      <div ref={letterSectionRef}>
        <Letter 
          content={letterContent} 
          message={currentLetterMessage} 
        />
      </div>
      <Gallery content={galleryContent} />
      <Guestbook 
        content={{...guestbookContent, messages: envelopesMessages}} 
        onSelectMessage={handleSelectMessage}
      />
      <Footer content={footerContent} />
    </>
  );
}

export default App;
