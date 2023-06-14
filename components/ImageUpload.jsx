'use client'
import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedImage);
      formData.append('title', title);
      formData.append('description', description);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Image uploaded successfully!', data.imageUrl);
      } else {
        console.error('Failed to upload image.');
      }
    } catch (error) {
      console.error('Failed to upload image.', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" width="200" height="200" />
          <button onClick={handleSubmit}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
