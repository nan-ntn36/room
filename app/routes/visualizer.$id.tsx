import React from 'react';
import { useLocation } from 'react-router';

const Visualizer = () => {
  const location = useLocation();
  const { initialImage, name } = location.state || {};
  return (
    <section>
      <h1>{name || 'Untitled project'}</h1>

      <div className='visualizer'>
        {initialImage && (
          <div className='image-container'>
            <h2>Source Image</h2>
            <img src={initialImage} alt='source' className='initial-image' />
          </div>
        )}
      </div>
    </section>
  );
};

export default Visualizer;
