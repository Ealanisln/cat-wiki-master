// components/BreedSearch.tsx
import React, { useState } from 'react';

interface BreedSearchProps {
  onSearch: (searchTerm: string) => void;
}

const BreedSearch: React.FC<BreedSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for breeds"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default BreedSearch;
