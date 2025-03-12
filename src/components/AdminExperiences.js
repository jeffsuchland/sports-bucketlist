import React from 'react';
import { loadExperiences, saveExperiences } from '../utils/mockData';

const AdminExperiences = () => {
  const experiences = loadExperiences();

  const handleDeleteExperience = (id) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    saveExperiences(updatedExperiences);
  };

  const handleFeatureExperience = (id) => {
    const updatedExperiences = experiences.map(exp => {
      if (exp.id === id) {
        return { ...exp, featured: !exp.featured };
      }
      return exp;
    });
    saveExperiences(updatedExperiences);
  };

  return (
    <div className="admin-container">
      <h2>All Experiences</h2>
      <div className="admin-experiences">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Creator</th>
              <th>Location</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map(experience => (
              <tr key={experience.id}>
                <td>{experience.title}</td>
                <td>{experience.createdBy}</td>
                <td>{experience.location}</td>
                <td>{experience.likes}</td>
                <td>{experience.comments?.length || 0}</td>
                <td className="action-buttons">
                  <button 
                    className="feature-button"
                    onClick={() => handleFeatureExperience(experience.id)}
                  >
                    {experience.featured ? 'Unfeature' : 'Feature'}
                  </button>
                  <button 
                    className="edit-button"
                    onClick={() => window.location.href = `/experience/${experience.id}/edit`}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => handleDeleteExperience(experience.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminExperiences;
