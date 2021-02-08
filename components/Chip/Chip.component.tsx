import React from 'react'
import { StyledChip } from './Chip.style';

interface ChipProps {
 value: string;
 color?: string;
 size?: string;
}

export const Chip: React.FC<ChipProps> = ({
    value,
    color,
    size
}) => {
        return <StyledChip color={color} size={size}><span>{value}</span></StyledChip>;
}
export default Chip;