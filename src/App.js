import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('/api/templates');
      setTemplates(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleThumbnailClick = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="app">
      <div className="main-window">
        {selectedTemplate ? (
          <>
            <img
              className="main-image"
              src={`/images/large/${selectedTemplate.imageFileName}`}
              alt={selectedTemplate.description}
            />
            <div className="metadata">
              <p>ID: {selectedTemplate.id}</p>
              <p>Cost: {selectedTemplate.cost}</p>
              <p>Description: {selectedTemplate.description}</p>
            </div>
          </>
        ) : (
          <p className="no-image">No image selected</p>
        )}
      </div>
      <div className="filmstrip">
        {templates.map((template) => (
          <img
            key={template.id}
            className={`thumbnail ${selectedTemplate === template ? 'selected' : ''}`}
            src={`/images/thumbnails/${template.thumbnailFileName}`}
            alt={template.description}
            onClick={() => handleThumbnailClick(template)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
n