import React from 'react';

const EmptyBirdDetail = ({ selectedBird }) => {
  if (!Object.entries(selectedBird).length) {
    return (
      <>
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </>
    );
  }
};

export default EmptyBirdDetail;
