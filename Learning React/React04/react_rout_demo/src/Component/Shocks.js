import React from 'react';

function Shocks() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome To Socks Page</h1>
      <p style={styles.description}>
        Discover a variety of socks for every occasion, from casual to athletic, with comfortable materials and unique designs.
      </p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // backgroundColor: '#f5f5f5',
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

export default Shocks;
