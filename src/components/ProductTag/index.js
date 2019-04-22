import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Typography, Tooltip } from 'antd';

const { Text } = Typography;

function Description(props) {
  const { description, removeDescription } = props;
  const [background, setBackgound] = useState(false);
  return (
    <Tooltip onClick={() => removeDescription(description)} placement="right" title="remove">
      <Text onMouseOver={() => setBackgound(true)} onMouseOut={() => setBackgound(false)} type={background && 'danger'}>
        {description}
      </Text>
      <br />
    </Tooltip>
  );
}

function DescriptionList(props) {
  const [descriptions, setDescriptions] = useState(props.descriptions);
  const removeDescription = removedDescription => {
    setDescriptions(descriptions.filter(d => d !== removedDescription));
  };

  return (
    <Fragment>
      {descriptions &&
        descriptions.map((description, index) => (
          <Description key={index} description={description} removeDescription={removeDescription} />
        ))}
    </Fragment>
  );
}



function ProductTag(props) {
  const { size, product } = props;
  const StyledForm = styled.div`
    border-style: double;
    height: ${size.height}mm;
    width: ${size.width}mm;
  `;

  return (
    <StyledForm className="mx-auto">
      <StyledHead className="d-flex">
        <img
          className="my-1 ml-1"
          src={require('asset/phongvu-icon.png')}
          alt="phongvu-logo"
          style={{ height: '80%' }}
        />
        <StyledName className="mx-auto">{product.name}</StyledName>
        <StyledPrice>{product.finalPrice && product.finalPrice.toLocaleString()}</StyledPrice>
      </StyledHead>
      <StyledBody className="mx-auto mt-4">
        <div style={{ height: '100%', overflowY: 'scroll' }}>
          <DescriptionList descriptions={product.descriptions} />
        </div>
        <StyledSKU><strong>sku:</strong> {product.sku}</StyledSKU>
      </StyledBody>
    </StyledForm>
  );
}

const StyledSKU = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  background-color: white;
  font-family: Times New Roman;
  font-size: 15pt;
`;

const StyledBody = styled.div`
  height: 70%;
  width: 90%;
  position: relative;
`;

const StyledHead = styled.div`
  width: 100%;
  height: 20%;
  background-color: #3D5EB8;
  position: relative;
`;

const StyledPrice = styled.div`
  width: 40%;
  height: 40px;
  position: absolute;
  right: 10px;
  bottom: -20px;
  background-color: #E55050;
  border-radius: 15px;
  color: white;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  font-family: Times New Roman;
  font-size: 15pt;
  font-weight: bold;
`;

const StyledName = styled.h3`
  margin-top: 5px;
  width: 80%;
  color: white;
  font-family: Times New Roman;
  font-size: 14pt;
  font-weight: bold;
`;

export {
  Description, DescriptionList
}

export default ProductTag;
