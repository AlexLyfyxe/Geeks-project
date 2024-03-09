import React from 'react';
import QualitiesJson from './Qualities,.json';  // Corrected the import path
import './Qualities.css';



const QualitiesJsonItem = ({ qualities }) => (
    <div key={qualities.id}>
        <h3>{qualities.id}</h3>
        <div>
            <h4>{qualities.titleQualities}</h4>
            <p>{qualities.contentQualities}</p>
        </div>
    </div>
);

const Qualities = () => {
    return (
        <section className="Qualities">
            <div className="container">
                <div className="Qualities__content">
                    <h2>Your Heading</h2>
                    {QualitiesJson.map((qualities) => (
                        <QualitiesJsonItem key={qualities.id} qualities={qualities} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Qualities;
