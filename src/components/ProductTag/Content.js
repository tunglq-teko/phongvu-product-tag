import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Typography, Tooltip } from 'antd';

const { Text } = Typography;

const StyledBody = styled.div`
  height: 70%;
  width: 95%;
  position: relative;
  font-weight: 550;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledGift = styled.div`
  color: red;
  font-size: 13pt;
  border-radius: 0px 0px 0px 20px;
  box-shadow: 0 2px 5px 0px grey;
`;

function Description({ description, removeDescription }) {
  return (
    <Tooltip onClick={() => removeDescription(description)} placement="right" title="Xóa">
      <Text className="custom-hover-red">{description}</Text>
      <br />
    </Tooltip>
  );
}

function DescriptionList({ descriptions, update }) {
  const removeDescription = removedDescription => {
    const index = descriptions.findIndex(d => d === removedDescription);
    const updatedDescriptions = [...descriptions.slice(0, index), ...descriptions.slice(index + 1)];
    update(updatedDescriptions);
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

function Gift({ gifts }) {
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

function Content({ product, updateProduct }) {
  const updateProductDescriptions = descriptions => {
    updateProduct({ ...product, descriptions });
  };
  return (
    <StyledBody className="mx-auto mt-2">
      {product.gifts && product.gifts.length ? <Gift gifts={product.gifts} /> : null}
      <div className="mt-2 mh-100" style={{ fontSize: '12pt' }}>
        <DescriptionList descriptions={product.descriptions} update={updateProductDescriptions} />
      </div>
    </StyledBody>
  );
}

export default Content;
