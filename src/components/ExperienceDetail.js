import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { loadExperiences, saveExperiences } from '../utils/mockData';

function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [experience, setExperience] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const loadedExperiences = loadExperiences();
    const exp = loadedExperiences.find(e => e.id === parseInt(id));
    if (!exp) {
      navigate('/experiences');
      return;
    }
    setExperience(exp);
  }, [id, navigate]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!currentUser || !newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: currentUser.username,
      text: newComment.trim()
    };

    const loadedExperiences = loadExperiences();
    const updatedExperience = {
      ...experience,
      comments: [...(experience.comments || []), comment]
    };

    const updatedExperiences = loadedExperiences.map(exp =>
      exp.id === experience.id ? updatedExperience : exp
    );

    setExperience(updatedExperience);
    saveExperiences(updatedExperiences);
    setNewComment('');
  };

  const handleLike = () => {
    if (!currentUser) return;

    const loadedExperiences = loadExperiences();
    const currentExperience = loadedExperiences.find(e => e.id === parseInt(id));
    const isLiked = currentExperience.likedBy?.includes(currentUser.username);

    const updatedExperience = {
      ...currentExperience,
      likes: isLiked ? currentExperience.likes - 1 : currentExperience.likes + 1,
      likedBy: isLiked
        ? currentExperience.likedBy.filter(user => user !== currentUser.username)
        : [...(currentExperience.likedBy || []), currentUser.username]
    };

    const updatedExperiences = loadedExperiences.map(exp =>
      exp.id === experience.id ? updatedExperience : exp
    );

    setExperience(updatedExperience);
    saveExperiences(updatedExperiences);
  };

  if (!experience) return <div>Loading...</div>;

  return (
    <div style={{ padding: '0 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <button
        onClick={() => navigate('/experiences')}
        style={{ marginBottom: '1rem' }}
      >
        ← Back to List
      </button>
      
      <div className="experience-detail" style={{ padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
        <h1>{experience.title}</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{experience.description}</p>
        
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <strong>Location:</strong> {experience.location}
          </div>
          <div>
            <strong>Cost:</strong> {experience.cost}
          </div>
          <div>
            <strong>Accommodation:</strong> {experience.accommodation}
          </div>
          <div>
            <strong>Recommendations:</strong> {experience.recommendations}
          </div>
          <div>
            <strong>Created By:</strong> {experience.createdBy}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <strong>Likes:</strong> {experience.likes}
            {currentUser && (
              <button
                onClick={handleLike}
                style={{
                  backgroundColor: '#2d2d2d',
                  border: '1px solid #424242',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: experience.likedBy?.includes(currentUser.username) ? '#e0e0e0' : '#666'
                }}
              >
                {experience.likedBy?.includes(currentUser.username) ? '❤️' : '🤍'}
              </button>
            )}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>Comments ({experience.comments?.length || 0})</h2>
          {currentUser && (
            <form onSubmit={handleAddComment} style={{ marginBottom: '1rem' }}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
                rows="3"
              />
              <button type="submit">Add Comment</button>
            </form>
          )}
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            {(experience.comments || []).map(comment => (
              <div
                key={comment.id}
                className="comment"
                style={{
                  padding: '1rem',
                  borderRadius: '4px'
                }}
              >
                <strong>{comment.user}:</strong> {comment.text}
              </div>
            ))}
            {(!experience.comments || experience.comments.length === 0) && (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetail;
