import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function ProductTag({ size, product, updateProduct, rotate = false}) {
  const StyledForm = styled.div`
    border-style: double;
    height: ${size.height}mm;
    width: ${size.width}mm;
    position: relative;
    font-family: Times New Roman;
  `;

  const StyledRotatedForm = styled.div`
    height: ${size.width}mm;
    width: ${size.height}mm;
    padding: 0;
  `;

  const Form = (
    <StyledForm className="mx-auto">
      <Header product={product} />
      <Content product={product} updateProduct={updateProduct} />
      <Footer product={product} />
    </StyledForm>
  );

  if (rotate) {
    return (
      <StyledRotatedForm>
        <div style={{ transform: 'rotate(90deg)' }}>{Form}</div>
      </StyledRotatedForm>
    );
  }

  return Form;
}

export default ProductTag;
