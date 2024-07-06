// Circle.tsx
import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';


interface CircleProps {
  size: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | 'initial' | 'unset';
}

const Circle: FC<CircleProps> = ({ size, position = 'static',  top="0" ,left="0" ,right="0", bottom="0", overflow='hidden' }) => {
  return (
    <Box
      width={size}
      height={size}
      borderRadius="50%"
      bg="radial-gradient(circle at center,rgba(1, 153, 102, 0.6),rgba(255, 255, 255, 0.5))"
    //   boxShadow="0px 0px 5px rgba(0, 0, 0, 0.2)"
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      overflow={overflow}
    />
  );
};

export default Circle;
