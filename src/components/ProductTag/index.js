import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Typography, Tooltip, Icon } from 'antd';

const { Text } = Typography;

function Description({ description, removeDescription }) {
  return (
    <Tooltip onClick={() => removeDescription(description)} placement="right" title="Xóa">
      <Text className="custom-hover-red">{description}</Text>
      <br />
    </Tooltip>
  );
}

function DescriptionList(props) {
  const [descriptions, setDescriptions] = useState(props.descriptions);
  const { editProductDescription } = props;
  const removeDescription = removedDescription => {
    const index = descriptions.findIndex(d => d === removedDescription);
    const updatedDescriptions = [...descriptions.slice(0, index), ...descriptions.slice(index + 1)];
    setDescriptions(updatedDescriptions);
    editProductDescription(updatedDescriptions);
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
      <Text strong>Bảo hành {warranty} tháng</Text>
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
    z-index: 2;
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

function Gift({ gifts }) {
  const StyledGift = styled.div`
    color: red;
    font-size: 13pt;
    border-radius: 0px 0px 20px 20px;
    box-shadow: 0 2px 5px 0px grey; //#e3e5ec;
  `;
  return (
    <StyledGift className="d-flex flex-row p-2 m-0 w-100">
      <div className="d-flex mr-2 align-items-center">
        <img alt={'gift-icon'} src={require('asset/gift.png')} style={{ height: '25px' }} />
      </div>
      <ul style={{ display: 'inline', listStyle: 'none' }} className="p-0 m-0">
        {gifts.map((gift, index) => (
          <li key={index} className="m-0">
            &#10004;{`${gift.quantity} ${gift.name}`}
          </li>
        ))}
      </ul>
    </StyledGift>
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

  const StyledSKU = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
    background-color: transparent;
    font-size: 15pt;
    margin-right: 2mm;
  `;

  const StyledBody = styled.div`
    height: 70%;
    width: 95%;
    position: relative;
    font-weight: 550;
    overflow-y: auto;
    overflow-x: hidden;
  `;

  const StyledHead = styled.div`
    width: 100%;
    min-height: 20mm;
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
          style={{ height: '18mm' }}
        />
        <StyledName className="mx-auto">{product.name}</StyledName>
        <Price {...product} />
      </StyledHead>

      <StyledBody className="mx-auto mt-2">
        {product.gifts && product.gifts.length ? <Gift gifts={product.gifts} /> : null}
        <div className="mt-2 mh-100" style={{ fontSize: '12pt' }}>
          <DescriptionList descriptions={product.descriptions} editProductDescription={editProductDescription} />
        </div>
      </StyledBody>

      <StyledSKU>
        <Text strong>sku:</Text>
        <Text>{product.sku}</Text>
      </StyledSKU>
      <Warranty {...product} />
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

export { Description, DescriptionList };

export default ProductTag;
