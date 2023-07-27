import React, { useState } from 'react';
import axios from 'axios';

const IPFSUploader = () => {
  const [image, setImage] = useState(null);
  const [ipfsCid, setIpfsCid] = useState('');

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const uploadImage = async () => {
    if (!image) return;

    try {
      const formData = new FormData();
      formData.append('file', image);

      const response = await axios.post('https://api.nft.storage/upload', formData, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU0YTM3ZDdkNUQyODJiNzM1MjZmNjI1NjUxNzhFQjQyOGI3MjRCMkIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4OTgyOTY4MzE4MCwibmFtZSI6IkppdGhlc2gifQ.D4LJtGPdBAVjmQ-_nl_DGpsDWLhoCprHaLYt-GKUPy4',
        },
      });

      const { cid } = response.data.value;
      setIpfsCid(cid);
    } catch (error) {
      console.error('Error uploading image to NFT.storage:', error);
    }
  };

  return (
    <div className='ViewImage'>
      <input type="file" accept="image/*" onChange={handleFileChange}  />
      <button onClick={uploadImage} className='ViewImage'>View Image</button>
      {ipfsCid && (
        <div>
          <img src={`https://ipfs.io/ipfs/${ipfsCid}/${image.name}`} width="465px"></img>
        </div>
      )}
    </div>
  );
};

export default IPFSUploader;