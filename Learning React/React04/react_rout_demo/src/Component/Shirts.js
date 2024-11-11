import React from 'react';

function Shirts() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome To Shirts Page</h1>
      <p style={styles.description}>
        Find the perfect shirt for every occasion, with a wide selection of styles, colors, and sizes to suit your needs.
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
    backgroundColor: '#fafafa',
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

export default Shirts;
