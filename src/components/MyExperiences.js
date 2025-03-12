import React, { useState } from 'react';
import { loadExperiences, saveExperiences } from '../utils/mockData';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import { Edit, Delete, Favorite } from '@mui/icons-material';

const MyExperiences = ({ user }) => {
  const [editingExperience, setEditingExperience] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const experiences = loadExperiences().filter(exp => exp.createdBy === user?.username);

  const handleEditClick = (experience) => {
    setEditingExperience({ ...experience });
    setShowEditForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingExperience(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const allExperiences = loadExperiences();
    const updatedExperiences = allExperiences.map(exp => 
      exp.id === editingExperience.id ? editingExperience : exp
    );
    
    saveExperiences(updatedExperiences);
    setShowEditForm(false);
    setEditingExperience(null);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this experience?');
    if (!confirmed) return;

    const allExperiences = loadExperiences();
    const updatedExperiences = allExperiences.filter(exp => exp.id !== id);
    saveExperiences(updatedExperiences);
  };

  if (!user) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Please log in to view your experiences.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff', mb: 4 }}>
        My Experiences
      </Typography>
      
      {experiences.length === 0 ? (
        <Typography variant="h6" sx={{ color: '#999' }}>
          You haven't created any experiences yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {experiences.map(experience => (
            <Grid item xs={12} sm={6} md={4} key={experience.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundColor: '#2d2d2d',
                color: '#fff'
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={experience.imageUrl}
                  alt={experience.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = experience.imageFallback;
                  }}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {experience.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, color: '#999' }}>
                    {experience.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Location:</strong> {experience.location}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Cost:</strong> {experience.cost}
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                  justifyContent: 'space-between',
                  p: 2,
                  borderTop: '1px solid #424242'
                }}>
                  <Button 
                    size="small" 
                    startIcon={<Edit />}
                    onClick={() => handleEditClick(experience)}
                    sx={{ 
                      color: '#3d5afe',
                      '&:hover': {
                        backgroundColor: 'rgba(61, 90, 254, 0.08)'
                      }
                    }}
                  >
                    Edit
                  </Button>
                  <Button 
                    size="small" 
                    startIcon={<Delete />}
                    onClick={() => handleDelete(experience.id)}
                    sx={{ 
                      color: '#ff1744',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 23, 68, 0.08)'
                      }
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    startIcon={<Favorite />}
                    disabled
                    sx={{ 
                      color: '#999',
                      '&.Mui-disabled': {
                        color: '#ff1744'
                      }
                    }}
                  >
                    {experience.likes}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog
        open={showEditForm}
        onClose={() => setShowEditForm(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#2d2d2d',
            color: '#fff'
          }
        }}
      >
        <DialogTitle>Edit Experience</DialogTitle>
        <form onSubmit={handleSaveEdit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={editingExperience?.title || ''}
                  onChange={handleInputChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' }
                  }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  name="description"
                  value={editingExperience?.description || ''}
                  onChange={handleInputChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={editingExperience?.location || ''}
                  onChange={handleInputChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cost"
                  name="cost"
                  value={editingExperience?.cost || ''}
                  onChange={handleInputChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Accommodation"
                  name="accommodation"
                  value={editingExperience?.accommodation || ''}
                  onChange={handleInputChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Recommendations"
                  name="recommendations"
                  value={editingExperience?.recommendations || ''}
                  onChange={handleInputChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="imageUrl"
                  value={editingExperience?.imageUrl || ''}
                  onChange={handleInputChange}
                  required
                  helperText="Enter a URL for the main image"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' },
                    '& .MuiFormHelperText-root': { color: '#666' }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Fallback Image URL"
                  name="imageFallback"
                  value={editingExperience?.imageFallback || ''}
                  onChange={handleInputChange}
                  required
                  helperText="Enter a backup image URL"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#424242' },
                      '&:hover fieldset': { borderColor: '#3d5afe' },
                    },
                    '& .MuiInputLabel-root': { color: '#999' },
                    '& .MuiInputBase-input': { color: '#fff' },
                    '& .MuiFormHelperText-root': { color: '#666' }
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button 
              onClick={() => setShowEditForm(false)}
              sx={{ color: '#999' }}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#3d5afe',
                '&:hover': {
                  backgroundColor: '#536dfe',
                },
              }}
            >
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default MyExperiences;
