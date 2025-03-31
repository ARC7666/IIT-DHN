
import React, { useRef, useState } from "react";
import { Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const fileArray = Array.from(e.target.files);
      setFiles(fileArray);
      toast({
        title: "Files selected",
        description: `${fileArray.length} file(s) selected for upload`,
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      const fileArray = Array.from(e.dataTransfer.files);
      setFiles(fileArray);
      toast({
        title: "Files dropped",
        description: `${fileArray.length} file(s) dropped for upload`,
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium">Task Related Document</h3>
        <div className="text-xs text-gray-500">0/10</div>
      </div>
      <div
        className="file-upload-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="mb-2">
          <Image size={48} />
        </div>
        <div className="mb-1 font-medium">DROP YOUR IMAGE/FILES HERE</div>
        <div className="mb-2">OR</div>
        <button className="browse-btn" onClick={handleBrowseClick}>
          BROWSE
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div className="mt-2 text-sm text-gray-500">
        {files.length ? `${files.length} file(s) selected` : "No files uploaded !"}
      </div>
    </div>
  );
};

export default FileUpload;
