import React from 'react';
import { useRouter } from 'next/router';


export default function Homelayout() {
  const router = useRouter();
  const handleProductClick = () => {
    router.push(`/Allproduct`);

};
  return (
    <div style={containerStyle}>
      {/* Left Side: Images */}
      <div style={leftSideStyle}>
        <div style={imageWrapperStyle}>
          <img src="/freepic1.jpg" alt="Second Image" style={imageBackgroundStyle} />
          <img src="/freepic4.jpg" alt="First Image" style={imageStyle} />
        </div>
      </div>
      
      {/* Right Side: Text */}
      <div style={rightSideStyle}>
        <h2 style={headingStyle}>Welcome to Pretty Gal</h2>
        <p style={paragraphStyle}>
        We provide the perfect blend of professional and modern attire to keep you looking sharp and confident. Explore our curated selection of high-quality, stylish clothing, tailored for every occasion — from corporate meetings to casual outings.
        </p>
        <button style={buttonStyle} onClick={handleProductClick}>Shop Now</button>
      </div>
    </div>
  );
}

// Inline CSS styles


const leftSideStyle = {
  display: 'flex',
  justifyContent: 'center',  // Center images horizontally
  alignItems: 'center',  // Center images vertically
};

const imageWrapperStyle = {
  position: 'relative',
  width: '300px',  // Set a fixed width for the image wrapper
  height: '400px',  // Set a fixed height for the image wrapper
};

const imageBackgroundStyle = {
  position: 'absolute',
  top: '0',
  left: '3',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',  // Rounded corners
  zIndex: 1,
  opacity: 0.8,  // Slight transparency to mimic overlap
};

const imageStyle = {
  position: 'relative',
  zIndex: 2,  // Bring this image to the front
  width: '90%',
// height:"90%",
  marginLeft: '45%',  // Offset to create overlap effect
  borderRadius: '8px',
  top:"24%"
};

const rightSideStyle = {
  padding: '10px',
  textAlign: 'left',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#b22222',  // A dark red color for the heading
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '30px',
  color: '#555',
};

const buttonStyle = {
  padding: '12px 25px',
  backgroundColor: '#b22222',  // Button background matches the heading
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
  backgroundColor: '#a11111',  // Slightly darker shade on hover
};

const containerStyle = {
    display: 'grid',
    marginTop:"8%",
    gridTemplateColumns: '1fr 1fr',  // Two columns for large screens
    gap: '20px',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f7f3e9',
    height: '100vh',
  

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',  // Stack on top of each other for smaller screens
      textAlign: 'center',
    }
  };
  