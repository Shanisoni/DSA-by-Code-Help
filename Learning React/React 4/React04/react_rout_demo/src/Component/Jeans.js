import React from 'react';

export default function Jeans() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome To Jeans Page</h1>
      <p style={styles.description}>
        Discover our diverse collection of jeans, crafted for comfort and style, perfect for any casual outing.
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
    backgroundColor: '#e3f2fd',
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

