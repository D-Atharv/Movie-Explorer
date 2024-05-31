import React, { useEffect, useState } from 'react';

const SearchResults = ({ searchTerm }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            fetch(`http://localhost:3000/imdb/auto-complete?q=${searchTerm}`)
                .then(response => response.json())
                .then(data => setResults(data))
                .catch(error => console.error('Error fetching search results:', error));
        }
    }, [searchTerm]);

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Search Results for "{searchTerm}"</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((result, index) => (
                    <div key={index} className="border rounded p-4">
                        <img src={result.ImageURL} alt={result.Title} className="w-full h-auto mb-2" />
                        <h3 className="text-xl">{result.Title}</h3>
                        <p>{result.Year}</p>
                        <p>{result.Genre.join(", ")}</p>
                        <p>{result.Synopsis}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
