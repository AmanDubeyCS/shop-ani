import React, { useState } from 'react';

const FilterOption = ({ title, choices }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState([]);

  const handleCheckboxChange = (choice) => {
    const selectedIndex = selectedChoices.indexOf(choice);
    if (selectedIndex === -1) {
      setSelectedChoices([...selectedChoices, choice]);
    } else {
      setSelectedChoices(selectedChoices.filter((item) => item !== choice));
    }
  };

  console.log(selectedChoices)

  return (
    <div className="flex flex-col min-h-14">
      <h1 className="border-y-2 p-3" onClick={() => setFilterOpen(!filterOpen)}>{title}</h1>
      <ul className={`p-3 ${filterOpen ? 'block' : 'hidden'}`}>
        {choices.map((choice) => (
          <li key={choice}>
            <label>
              <input
                type="checkbox"
                checked={selectedChoices.includes(choice)}
                onChange={() => handleCheckboxChange(choice)}
              /> 
              {choice}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FilterSystem = () => {
  return (
    
    <div className="container">
      <div className="max-w-[340px] w-[340px] bg-white text-black fixed top-0 left-0 h-full z-99999 flex flex-col overflow-scroll">
        <div className="flex justify-between items-center min-h-14 border-b-2 pl-3">
          <h1>FILTER</h1>
          <button>X</button>
        </div>
        <FilterOption 
        title="Product Type" 
        choices={['Hoodie', 'Sweatshirts', 'Jacket', 'T-shirt', 'Oversized T-shirt', 'Dropcut T-shirt', 'Fullsleev T-shirt']}
      />
      <FilterOption 
        title="Size" 
        choices={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
      />
      <FilterOption 
        title="Color" 
        choices={['Black', 'Blue', 'Navy Blue', 'Red', 'Yellow', 'Orange', 'Green', 'Lavender']}
      />
      <FilterOption 
        title="Discount" 
        choices={['30% and more', '40% and more', '50% and more', '70% and more']}
      />
      <FilterOption 
        title="Collection" 
        choices={['Naruto', 'Jujutsu Kaisen', 'Solo Leveling', 'One Pice', 'Bleach', 'Slime', 'Somthing']}
      />
      </div>
    </div>
  );
};

export default FilterSystem;

