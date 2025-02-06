import React from 'react'
import Form from '../Form/Form';

function GuruMedia() {
  return (
    <div className="p-6 bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">GuruMedia Integration</h1>
        <p className="text-gray-700 mb-4">
        GuruMedia is a global e-commerce platform and affiliate marketplace, providing a way for vendors to sell digital and physical products, and for affiliates to promote them. To integrate with ClickBank, please enter your API key below.
        </p>
        <Form />
      </div>
    </div>
  );
}

export default GuruMedia
