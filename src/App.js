import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return <div className='App'></div>;
}

export default App;
