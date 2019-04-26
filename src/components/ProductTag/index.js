import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Typography, Tooltip, Icon } from 'antd';

const { Text } = Typography;

function Description({ description, removeDescription }) {
  const [background, setBackgound] = useState(false);
  return (
    <Tooltip onClick={() => removeDescription(description)} placement="right" title="click to remove">
      <Text onMouseOver={() => setBackgound(true)} onMouseOut={() => setBackgound(false)} type={background && 'danger'}>
        {description}
      </Text>
      <br />
    </Tooltip>
  );
}

function DescriptionList(props) {
  const [descriptions, setDescriptions] = useState(props.descriptions);
  const { editProductDescription } = props;
  const removeDescription = removedDescription => {
    const newDescriptions = descriptions.filter(d => d !== removedDescription);
    setDescriptions(newDescriptions);
    editProductDescription(newDescriptions);
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

function Warranty({ warranty }) {
  if (!warranty) return null;
  const StyledWarranty = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14pt;
    font-weight: 600;
  `;
  return (
    <StyledWarranty>
      <Icon type="safety" />
      Bảo hành {warranty} tháng
    </StyledWarranty>
  );
}

function Price({ finalPrice, price }) {
  if (!finalPrice) return null;
  const StyledPrice = styled.div`
    min-width: 150px;
    height: 36px;
    position: absolute;
    right: 0;
    bottom: -18px;
    background-color: #e55050;
    border-radius: 15px 0 0 15px;
    color: white;
    text-align: center;
    vertical-align: middle;
    line-height: 36px;
    font-size: 15pt;
    font-weight: bold;
  `;
  const StyledOldPrice = styled(Text)`
    position: absolute !important;
    bottom: -75%;
    right: 50% !important;
    transform: translateX(80%) !important;
  `;
  return (
    <Fragment>
      <StyledPrice>
        {finalPrice.toLocaleString()} VNĐ
        {price && price !== finalPrice ? <StyledOldPrice delete>{price.toLocaleString()} VNĐ</StyledOldPrice> : null}
      </StyledPrice>
    </Fragment>
  );
}

function ProductTag({ size, product, updateProduct, rotate }) {
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

  const editProductDescription = descriptions => {
    updateProduct({ ...product, descriptions });
  };

  const Form = (
    <StyledForm className="mx-auto">
      <StyledHead className="d-flex">
        <img
          className="my-1 ml-1"
          src={require('asset/phongvu-icon.png')}
          alt="phongvu-logo"
          style={{ height: '80%', maxHeight: `${0.2 * size.height}mm` }}
        />
        <StyledName className="mx-auto">{product.name}</StyledName>
        <Price {...product} />
      </StyledHead>

      <StyledBody className="mx-auto mt-4">
        <div className="mt-2 mh-100" style={{ overflowY: 'auto', fontSize: '12pt' }}>
          <DescriptionList descriptions={product.descriptions} editProductDescription={editProductDescription} />
        </div>
        <StyledSKU>
          <strong>sku:</strong> {product.sku}
        </StyledSKU>
        <Warranty {...product} />
      </StyledBody>
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

const StyledSKU = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  background-color: white;
  font-size: 15pt;
`;

const StyledBody = styled.div`
  height: 70%;
  width: 90%;
  position: relative;
  font-weight: 550;
`;

const StyledHead = styled.div`
  width: 100%;
  height: 20%;
  background-color: #3d5eb8;
  position: relative;
`;

const StyledName = styled.h3`
  position: relative;
  top: 0;
  transform: translateY(10px);
  width: 80%;
  color: white;
  font-size: 14pt;
  font-weight: bold;
`;

export { Description, DescriptionList };

export default ProductTag;
