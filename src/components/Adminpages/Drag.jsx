import React, { useState } from 'react';
import './drag.css';
import Layout from './Layout';

function Drag() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = [...e.dataTransfer.files];
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <Layout className="App">
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''} mt-52`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag & drop files here</p>
        <input
          type="file"
          id="fileInput"
          multiple
          onChange={handleFileInputChange}
        />
        <label htmlFor="fileInput" className=''>or click to browse</label>
      </div>
      {files.length > 0 && (
        <div className="file-list">
          <h2 className='md:text-2xl'>Uploaded Files:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export default Drag;
