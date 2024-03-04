'use client';
import React, { ChangeEvent, useState } from 'react';
import { UploadCloud, ChevronDown } from 'lucide-react';

const ImageUploader: React.FC = () => {
  const [base64Image, setBase64Image] = useState<string>('');

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64 = reader.result as string;
        setBase64Image(base64);
        console.log(base64);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative inline-block m-2 h-64 rounded-md bg-secondary-100 w-1/4 border-2 border-black">
      <label className="cursor-pointer text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <input
          type="file"
          onChange={handleFileInputChange}
          className="hidden"
        />
        <UploadCloud size={110} />
        <p className="text-center flex items-center bg-white text-black py-2 px-2">
          Upload Image
          <span className="ml-2">
            <ChevronDown />
          </span>
        </p>
      </label>
    </div>
  );
};

export default ImageUploader;
