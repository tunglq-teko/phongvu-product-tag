import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  min-height: 20mm;
  background-color: #3d5eb8;
  position: relative;
  display: flex;
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

// const StyledOldPrice = styled(Text)`
//   position: absolute !important;
//   bottom: -75%;
//   right: 50% !important;
//   transform: translateX(80%) !important;
// `;

function Price({ finalPrice, price }) {
  if (!finalPrice) return null;
  return (
    <Fragment>
      <StyledPrice>
        {finalPrice.toLocaleString()} VNĐ
        {/* {price && price !== finalPrice ? <StyledOldPrice delete>{price.toLocaleString()} VNĐ</StyledOldPrice> : null} */}
      </StyledPrice>
    </Fragment>
  );
}

function Header({ product }) {
  return (
    <StyledHeader>
      <img
        className="my-1 ml-1"
        src={require('asset/phongvu-icon.png')}
        alt="phongvu-logo"
        style={{ height: '18mm' }}
      />
      <StyledName className="mx-auto">{product.name}</StyledName>
      <Price {...product} />
    </StyledHeader>
  );
};

export default Header;
