import { useState } from "react";

const FilterSuggs = () => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    const selectedStyle = isSelected ? {
        backgroundImage: 'linear-gradient(to right, #00BF36, #059932)',
        color: 'black',
        border: '1px solid transparent'
    } : {};

    return (
        <div 
            className="sugestao" 
            style={{ 
                fontSize: 24, 
                textAlign: "center", 
                margin: "20px 10px", 
                padding: "12px", 
                ...selectedStyle 
            }}
            onClick={handleClick}
        >
            Me mostre lugares sustentáveis para viajar.
        </div>
    );
};

export default FilterSuggs;
