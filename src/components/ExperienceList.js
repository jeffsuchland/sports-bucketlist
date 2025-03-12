import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadExperiences, saveExperiences } from '../utils/mockData';

const ExperienceList = ({ user }) => {
  const [experiences, setExperiences] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newExperience, setNewExperience] = useState({
    title: '',
    description: '',
    location: '',
    cost: '',
    accommodation: '',
    recommendations: '',
    imageUrl: '',
    imageFallback: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Load and sort experiences by likes
    const loadedExperiences = loadExperiences();
    const sortedExperiences = [...loadedExperiences].sort((a, b) => b.likes - a.likes);
    setExperiences(sortedExperiences);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredExperiences = experiences.filter(experience => {
    const searchString = `${experience.title} ${experience.description} ${experience.location}`.toLowerCase();
    return searchString.includes(searchQuery);
  });

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (!user) return;

    const newId = Math.max(...experiences.map(exp => exp.id), 0) + 1;
    const experienceToAdd = {
      ...newExperience,
      id: newId,
      likes: 0,
      likedBy: [],
      comments: [],
      createdBy: user.username
    };

    const updatedExperiences = [...experiences, experienceToAdd].sort((a, b) => b.likes - a.likes);
    setExperiences(updatedExperiences);
    saveExperiences(updatedExperiences);

    setNewExperience({
      title: '',
      description: '',
      location: '',
      cost: '',
      accommodation: '',
      recommendations: '',
      imageUrl: '',
      imageFallback: ''
    });
    setShowAddForm(false);
  };

  const handleLike = (id) => {
    if (!user) return;

    const updatedExperiences = experiences.map(exp => {
      if (exp.id === id && !exp.likedBy.includes(user.username)) {
        return {
          ...exp,
          likes: exp.likes + 1,
          likedBy: [...exp.likedBy, user.username]
        };
      }
      return exp;
    }).sort((a, b) => b.likes - a.likes);

    setExperiences(updatedExperiences);
    saveExperiences(updatedExperiences);
  };

  return (
    <div>
      <div className="header">
        <h1>Sports Bucket List</h1>
        <button
          className="add-experience-button"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add Experience'}
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search experiences..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {showAddForm && (
        <form onSubmit={handleAddExperience} className="add-experience-form">
          <div className="form-grid">
            <div className="form-section">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={newExperience.title}
                onChange={handleInputChange}
                placeholder="e.g., Super Bowl LVIII in Las Vegas"
                required
              />
            </div>
            
            <div className="form-section">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={newExperience.description}
                onChange={handleInputChange}
                placeholder="Describe the experience"
                required
              />
            </div>

            <div className="form-section">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={newExperience.location}
                onChange={handleInputChange}
                placeholder="e.g., Las Vegas, NV"
                required
              />
            </div>

            <div className="form-section">
              <label htmlFor="cost">Estimated Cost</label>
              <input
                type="text"
                name="cost"
                id="cost"
                value={newExperience.cost}
                onChange={handleInputChange}
                placeholder="e.g., $5,000-$10,000"
                required
              />
            </div>

            <div className="form-section">
              <label htmlFor="accommodation">Accommodation</label>
              <input
                type="text"
                name="accommodation"
                id="accommodation"
                value={newExperience.accommodation}
                onChange={handleInputChange}
                placeholder="e.g., Bellagio Hotel & Casino"
                required
              />
            </div>

            <div className="form-section">
              <label htmlFor="recommendations">Recommendations</label>
              <textarea
                name="recommendations"
                id="recommendations"
                value={newExperience.recommendations}
                onChange={handleInputChange}
                placeholder="Share your tips and recommendations"
                required
              />
            </div>

            <div className="form-section">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                id="imageUrl"
                value={newExperience.imageUrl}
                onChange={handleInputChange}
                placeholder="Primary image URL"
                required
              />
              <small>Enter a URL for the main image (e.g., from Unsplash or similar)</small>
            </div>

            <div className="form-section">
              <label htmlFor="imageFallback">Fallback Image URL</label>
              <input
                type="url"
                name="imageFallback"
                id="imageFallback"
                value={newExperience.imageFallback}
                onChange={handleInputChange}
                placeholder="Backup image URL"
                required
              />
              <small>Enter a backup image URL in case the primary image fails to load</small>
            </div>

            <button type="submit" className="create-experience-button">Create Experience</button>
          </div>
        </form>
      )}

      <div className="experiences-grid">
        {filteredExperiences.map(experience => (
          <div 
            key={experience.id} 
            className="experience-card"
            onClick={() => navigate(`/experience/${experience.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="experience-card__image">
              <img 
                src={experience.imageUrl} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = experience.imageFallback;
                }}
                alt={experience.title}
              />
              <div className="experience-card__overlay"></div>
            </div>
            <div className="experience-card__content">
              <div className="experience-card__header">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
              <div className="experience-card__details">
                <p><strong>Location:</strong> {experience.location}</p>
                <p><strong>Cost:</strong> {experience.cost}</p>
              </div>
            </div>
            <div className="experience-card__actions">
              <button className="like-button" onClick={() => handleLike(experience.id)}>
                ❤️ {experience.likes}
              </button>
              <span>Created by: {experience.createdBy}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
