import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, TextField, Paper } from '@mui/material';
import { loadExperiences, saveExperiences } from '../utils/mockData';

const ExperienceDetails = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const experiences = loadExperiences();
    const foundExperience = experiences.find(exp => exp.id === parseInt(id));
    if (foundExperience) {
      setExperience(foundExperience);
    }
  }, [id]);

  const handleAddComment = () => {
    if (!user || !comment.trim()) return;

    const newComment = {
      id: Date.now(),
      text: comment,
      author: user.username,
      createdAt: new Date().toISOString()
    };

    const updatedExperience = {
      ...experience,
      comments: [...experience.comments, newComment]
    };

    const experiences = loadExperiences();
    const updatedExperiences = experiences.map(exp =>
      exp.id === experience.id ? updatedExperience : exp
    );

    saveExperiences(updatedExperiences);
    setExperience(updatedExperience);
    setComment('');
  };

  if (!experience) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography style={{ color: 'var(--text-color)' }}>
          Experience not found.
        </Typography>
        <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Back to Experiences
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button 
        onClick={() => navigate('/')}
        sx={{ mb: 3 }}
        style={{ color: 'var(--text-color)' }}
      >
        ← Back to Experiences
      </Button>

      <Paper 
        elevation={3} 
        sx={{ p: 3, mb: 3 }}
        style={{
          backgroundColor: 'var(--paper-bg)',
          color: 'var(--text-color)',
          border: '1px solid var(--border-color)'
        }}
      >
        <Box sx={{ mb: 3 }}>
          <img
            src={experience.imageUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = experience.imageFallback;
            }}
            alt={experience.title}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
        </Box>

        <Typography variant="h4" gutterBottom>
          {experience.title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {experience.description}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>Details</Typography>
          <Typography><strong>Location:</strong> {experience.location}</Typography>
          <Typography><strong>Cost:</strong> {experience.cost}</Typography>
          <Typography><strong>Accommodation:</strong> {experience.accommodation}</Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>Recommendations</Typography>
          <Typography>{experience.recommendations}</Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>Stats</Typography>
          <Typography>❤️ {experience.likes} likes</Typography>
          <Typography>Created by: {experience.createdBy}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>Comments</Typography>
          {user && (
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                multiline
                rows={2}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--border-color)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                  },
                }}
                style={{
                  backgroundColor: 'var(--bg-color)',
                  color: 'var(--text-color)',
                }}
              />
              <Button 
                onClick={handleAddComment}
                sx={{ mt: 1 }}
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: '#fff'
                }}
              >
                Add Comment
              </Button>
            </Box>
          )}
          
          {experience.comments.map(comment => (
            <Paper 
              key={comment.id}
              sx={{ p: 2, mb: 2 }}
              style={{
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-color)',
                border: '1px solid var(--border-color)'
              }}
            >
              <Typography variant="body1">{comment.text}</Typography>
              <Typography 
                variant="caption"
                style={{ color: 'var(--secondary-text)' }}
              >
                By {comment.author} on {new Date(comment.createdAt).toLocaleDateString()}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default ExperienceDetails;
