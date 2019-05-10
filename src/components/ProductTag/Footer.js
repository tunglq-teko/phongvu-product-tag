import React, { Fragment } from 'react';
import { Typography, Icon } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const StyledSKU = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  background-color: transparent;
  font-size: 15pt;
  margin-right: 2mm;
`;

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

function Footer({ product }) {
  return (
    <Fragment>
      <StyledSKU>
        <Text strong>sku:</Text>
        <Text>{product.sku}</Text>
      </StyledSKU>
      <Warranty warranty={product.warranty} />
    </Fragment>
  );
};

export default Footer;
