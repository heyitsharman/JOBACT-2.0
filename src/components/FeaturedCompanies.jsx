import React from 'react';
import './FeaturedCompanies.css'; // Make sure to add appropriate CSS styles

const companies = [
    { id: 1, name: 'Ebay', image: 'assets/ebay.png', jobs: 2 },
    { id: 2, name: 'Wipro', image: 'assets/wipro.png', jobs: 1 },
    { id: 3, name: 'Google', image: 'assets/google.png', jobs: 1 },
    { id: 4, name: 'Microsoft', image: 'assets/microsoft.webp', jobs: 3 },
    { id: 5, name: 'IBM', image: 'assets/ibm.png', jobs: 1 },
    { id: 6, name: 'Facebook', image: 'assets/facebook.jpeg', jobs: 1 }
];

const FeaturedCompanies = () => {
    return (
        <section className="featured" id="companies">
            <h1 className="section-title">Featured Companies</h1>
            <div className="featured-wrapper">
                {companies.map(company => (
                    <div className="featured-card" key={company.id}>
                        <img className="featured-image" src={company.image} alt={`${company.name} logo`} />
                        <p>{company.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCompanies;
