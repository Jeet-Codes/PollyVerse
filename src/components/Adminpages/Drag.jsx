import React, { useState } from 'react';
import './drag.css';
import Layout from './Layout';
import Manager from './Manger';

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
      <Manager>
     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div 
      
        className={`drop-zone ${dragging ? 'dragging' : ''} drag`}
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
      </Manager>
    </Layout>
  );
}

export default Drag;
