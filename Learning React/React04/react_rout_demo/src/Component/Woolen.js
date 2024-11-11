import React from 'react';

function Woolen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome To Woolen Page</h1>
      <p style={styles.description}>
        Explore our cozy collection of woolen wear, perfect for keeping warm and stylish through the cold seasons.
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#e0f7fa',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  description: {
    color: '#555',
    fontSize: '1.25rem',
    maxWidth: '600px',
    textAlign: 'center',
  },
};

export default Woolen;
