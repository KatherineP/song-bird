import React from 'react';
import classNames from 'classnames';

const Play = ({ nextLevel, onNextLevel }) => {
  const classes = classNames('btn btn-lg btn-success btn-block mt-3', {
    disabled: !nextLevel,
  });

  return nextLevel ? (
    <Button type="button" className={classes} onClick={onNextLevel} />
  ) : (
    <Button type="button" className={classes} />
  );
};

const Button = ({ type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      Next Level!
    </button>
  );
};

export { Play };
