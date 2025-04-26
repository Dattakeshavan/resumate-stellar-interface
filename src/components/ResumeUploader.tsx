
import React, { useState, useRef } from 'react';
import { Upload, FileText, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';

const ResumeUploader: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (selectedFile: File) => {
    if (!selectedFile) return;
    
    // Check if file is PDF or DOC/DOCX
    const fileType = selectedFile.type;
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!allowedTypes.includes(fileType)) {
      alert("Please upload a PDF or Word document");
      return;
    }
    
    setFile(selectedFile);
    simulateUpload();
  };

  const simulateUpload = () => {
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      console.log("Resume uploaded and ready for analysis");
    }, 2000);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
      <div 
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300",
          "backdrop-blur-md bg-white bg-opacity-5 hover:bg-opacity-10",
          isDragging ? "border-resumate-highlight animate-pulse-glow" : "border-white border-opacity-30",
          "animate-pulse-glow"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          className="hidden"
          accept=".pdf,.doc,.docx"
        />
        
        <div className="flex flex-col items-center justify-center space-y-4">
          {isUploading ? (
            <>
              <Loader className="h-12 w-12 text-resumate-highlight animate-spin" />
              <h3 className="text-xl font-medium text-white">Processing your resume...</h3>
            </>
          ) : file ? (
            <>
              <FileText className="h-12 w-12 text-resumate-highlight" />
              <h3 className="text-xl font-medium text-white">{file.name}</h3>
              <p className="text-gray-300">File ready for analysis</p>
              <button 
                className="px-6 py-2 bg-resumate-highlight rounded-full text-white font-medium hover:bg-opacity-90 transition-all"
              >
                Analyze Now
              </button>
            </>
          ) : (
            <>
              <Upload className="h-12 w-12 text-resumate-highlight" />
              <h3 className="text-xl font-medium text-white">Upload your resume</h3>
              <p className="text-gray-300">Drag and drop or click to browse</p>
              <p className="text-xs text-gray-400">Supports PDF, DOC, DOCX files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeUploader;
