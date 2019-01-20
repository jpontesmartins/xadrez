import React from 'react';
import PropTypes from 'prop-types';

const PecaComponent = ({ cor, onClick, simbolo }) => (
  <div className={cor} onClick={onClick}>
    <span>
      {simbolo}
    </span>
  </div>
);

PecaComponent.propTypes = {
  cor: PropTypes.string,
  simbolo: PropTypes.string,
  onClick: PropTypes.func
};

export default PecaComponent;