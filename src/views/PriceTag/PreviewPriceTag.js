import React, { Fragment, useState } from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';
import { Button, Card, Typography, Tooltip } from 'antd';

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

const StyledDescription = styled.div`
  overflow-y: scroll;
  height: 70%;
  width: 95%;
`;

function PriceTag(props) {
  const { size, product } = props;
  const StyledForm = styled.div`
    border-style: double;
    height: ${size.height}mm;
    width: ${size.width}mm;
  `;

  const StyledHead = styled.div`
    width: 100%;
    height: 20%;
    background-color: #3333cc;
  `;

  const StyledPrice = styled.div`
    width: 40%;
    height: 50%;
    background-color: white;
    text-align: center;
    color: #cc0000;
    font-family: Times New Roman;
    font-size: 15pt;
    font-weight: bold;
    margin-left: 60%;
  `;

  const StyledName = styled.h3`
    margin-top: 5px;
    width: 80%;
    text-align: center
    color: white;
    font-family: Times New Roman;
    font-size: 14pt;
    font-weight: bold;
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
      </StyledHead>
      {/* <StyledPrice>10.000.000</StyledPrice> */}
      <StyledDescription className="mx-auto mt-4">
        <DescriptionList descriptions={product.descriptions} />
      </StyledDescription>
    </StyledForm>
  );
}

function PreviewPriceTag(props) {
  const { preview } = props;

  const PreviewTitle = (
    <div className="d-flex justify-content-between" style={{ width: '100%' }}>
      <div className="py-1">
        <Text strong>Preview</Text>
        <Text className="pl-4">{preview.product.name}</Text>
      </div>
      <Button
        href="/print"
        target="_blank"
        type="primary"
        style={{ width: 120 }}
        onClick={() => {
          localStorage.setItem('priceTagsToPrint', JSON.stringify(preview.product));
        }}>
        In tem giá
      </Button>
    </div>
  );

  return (
    <Card
      title={PreviewTitle}
      type="inner"
      size="small"
      hoverable={true}
      bodyStyle={{ height: 800, overflow: 'scroll' }}>
      {_.isEmpty(preview.product) || _.isEmpty(preview.size) ? null : (
        <PriceTag size={preview.size} product={preview.product} />
      )}
    </Card>
  );
}

export default PreviewPriceTag;
