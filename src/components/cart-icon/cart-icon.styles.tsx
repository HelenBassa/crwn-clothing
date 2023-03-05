import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;

export const CartIconConainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

CartIconConainer.displayName = "CartIconConainer";

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 13px;

  @media screen and (max-width: 800px) {
    bottom: 6px;
  }
`;

ItemCount.displayName = "ItemCount";
