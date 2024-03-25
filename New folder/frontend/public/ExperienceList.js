import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('/api/experiences');
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div>
      <h2>Explore Experiences</h2>
      <ul>
        {experiences.map(experience => (
          <li key={experience._id}>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
            <p>Price: ${experience.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
