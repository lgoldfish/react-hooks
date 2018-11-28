import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

const UseContext = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>theme from context is : <span style={{ color: 'red' }}>{theme}</span></p>
    </div>
  );
};
export default UseContext;
