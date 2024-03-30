import React, { useState } from 'react';
import { IconX } from '@tabler/icons-react';

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


  return (
    <div className="flex flex-col">
      <h1 className="border-y-2 p-3 text-base cursor-pointer" onClick={() => setFilterOpen((prev) => !prev)}>{title}</h1>
      <ul className={`p-3 ${filterOpen ? 'block' : 'hidden'}`}>
        {choices.map((choice) => (
          <li key={choice}>
            <label className='flex gap-2 cursor-pointer'>
              <input
                className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
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

const FilterSystem = ({ handleClose }) => {

  return (
    
    <div className="container">
      <div className="max-w-[340px] w-[340px] bg-white text-black fixed top-0 left-0 h-full z-[99999] flex flex-col overflow-scroll overflow-x-hidden">
        <div className="flex justify-between items-center min-h-14 border-b-2 pl-3">
          <h1 className='text-lg font-semibold'>FILTER</h1>
          <button className='p-3' onClick={handleClose}><IconX stroke={1.5} /></button>
        </div>
        <FilterOption 
        title="Product Type" 
        choices={['Hoodie', 'Sweatshirts', 'Jacket', 'T-shirt', 'Oversized T-shirt', 'Dropcut T-shirt', 'Fullsleev T-shirt']}
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

