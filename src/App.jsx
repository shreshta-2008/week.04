import { useState, useEffect, useRef } from 'react';
import styles from './MagicCard.module.css';

// Composition: Wrapper Component
const MagicCircle = ({ children, isDark }) => (
  <div className={isDark ? 'dark-theme' : 'light-theme'}>
    {children}
  </div>
);

function App() {
  const [isDark, setIsDark] = useState(true);
  const [spell, setSpell] = useState(""); // Controlled input
  const scrollRef = useRef();             // Uncontrolled input

  // Theme Toggle Logic
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <MagicCircle isDark={isDark}>
      <nav style={{ textAlign: 'right', padding: '1rem' }}>
        <button className={styles.button} onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>

      <div className={styles.card}>
        <h1 className={styles.title}>CSS Alchemy</h1>
        
        {/* Controlled Input */}
        <div className={styles.inputGroup}>
          <label>Controlled Incantation:</label>
          <input 
            className={styles.magicInput}
            value={spell} 
            onChange={(e) => setSpell(e.target.value)} 
          />
          <small>Power Level: {spell.length}</small>
        </div>

        {/* Uncontrolled Input */}
        <div className={styles.inputGroup}>
          <label>Uncontrolled Artifact:</label>
          <input className={styles.magicInput} ref={scrollRef} />
          <button 
            className={styles.button} 
            style={{ marginTop: '10px' }}
            onClick={() => alert(scrollRef.current.value)}
          >
            Read Scroll
          </button>
        </div>
      </div>
    </MagicCircle>
  );
}

export default App;