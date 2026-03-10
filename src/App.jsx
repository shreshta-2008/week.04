import { useState, useRef } from 'react';
import styles from './App.module.css';

// Component Composition: A reusable Wrapper Component
function MarvelLayout({ children }) {
  return (
    <div className={styles.marvelContainer}>
      <div className={styles.heroCard}>
        <h1 className={styles.title}>Marvel</h1>
        {children}
      </div>
    </div>
  );
}

function App() {
  // Controlled Input using useState
  const [codename, setCodename] = useState("");

  // Uncontrolled Input using useRef
  const powerRef = useRef(null);

  const handleAssembly = () => {
    const powerValue = powerRef.current.value;
    alert(`ASSEMBLING: ${codename || "Unknown Hero"} with power: ${powerValue || "Unknown Power"}`);
  };

  return (
    <MarvelLayout>
      <h2>Hero Recruitment</h2>
      
      {/* Controlled Input Section */}
      <div className={styles.inputGroup}>
        <label>Hero Codename (Controlled):</label>
        <input 
          type="text" 
          className={styles.textInput}
          value={codename}
          onChange={(e) => setCodename(e.target.value)}
          placeholder="e.g. Spider-Man"
        />
      </div>

      {/* Uncontrolled Input Section */}
      <div className={styles.inputGroup}>
        <label>Primary Ability (Uncontrolled):</label>
        <input 
          type="text" 
          className={styles.textInput}
          ref={powerRef}
          placeholder="e.g. Web-swinging"
        />
      </div>

      <button className={styles.marvelButton} onClick={handleAssembly}>
        Assemble Team
      </button>
      
      <p style={{ marginTop: '20px', fontSize: '0.7rem', color: '#666' }}>
        *Controlled state: {codename}
      </p>
    </MarvelLayout>
  );
}

export default App;