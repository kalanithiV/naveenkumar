import React, { useState } from "react";
import styles from "../styles/Overall.module.css"

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className={styles.topHeading}>
            <input
                className={styles.inputSearch}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <button className={styles.searchButton} onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
