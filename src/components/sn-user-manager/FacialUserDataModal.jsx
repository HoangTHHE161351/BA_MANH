import * as React from 'react';
import { useState } from 'react';
import { Button, Checkbox, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material';


const FacialUserDataModal = ({ isOpen, onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageToggle = (imageSrc) => () => {
    const currentIndex = selectedImages.indexOf(imageSrc);
    const newSelectedImages = [...selectedImages];

    if (currentIndex === -1) {
      newSelectedImages.push(imageSrc);
    } else {
      newSelectedImages.splice(currentIndex, 1);
    }

    setSelectedImages(newSelectedImages);
  };

  const handleDeleteSelectedImages = () => {
    // Handle delete logic here
    console.log("Deleting selected images:", selectedImages);
    // You can perform delete operation here using API calls or local state management
    setSelectedImages([]);
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        Facial User Modal
        <Button
          variant='contained'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          Close
        </Button>
      </DialogTitle>
      <DialogContent>
        <Button variant="contained" disabled={selectedImages.length === 0} sx={{ mb: 2, backgroundColor: '#d32f2f' }} onClick={handleDeleteSelectedImages}>
          Delete Selected
        </Button>
        <Grid container spacing={2}>
          {[1, 2].map((item) => (
            <Grid item key={item} xs={6}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  <img src={`https://via.placeholder.com/200?text=Image${item}`} alt={`Image ${item}`} />
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid sx={{ ml: 3 }} xs={2}>
                      <Checkbox
                        checked={selectedImages.includes(`image${item}`)}
                        onChange={handleImageToggle(`image${item}`)}
                      />
                    </Grid>
                    <Grid>
                      <Button
                        sx={{ backgroundColor: '#d32f2f' }}
                        variant="contained"
                        disabled={false} // Luôn hiển thị nút Delete
                        onClick={() => {
                          if (selectedImages.includes(`image${item}`)) {
                            console.log(`Deleting image${item}`);
                            // Thực hiện xóa hình ảnh ở đây
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>

      </DialogContent>
    </Dialog>
  );
};

export default FacialUserDataModal;
