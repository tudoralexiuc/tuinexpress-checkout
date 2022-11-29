import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import {
  Wrapper,
  OverlayWrapper,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  Icon,
} from './Styles';

export default function Product({ addProductToCart, ...props }) {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <Wrapper
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {isHover && (
        <OverlayWrapper onClick={() => addProductToCart({ ...props })}>
          <Icon icon={FaShoppingCart} />
        </OverlayWrapper>
      )}

      <Card>
        <CardImage src={props.imageURL} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardPrice>€{props.price}</CardPrice>
        </CardBody>
      </Card>
    </Wrapper>
  );
}
