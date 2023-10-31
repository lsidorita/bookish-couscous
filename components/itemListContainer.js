import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{greeting}</h2>
          {/* Aquí puedes mostrar los productos o contenido relacionado con la landing */}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
