import axios from "axios";
import { useState } from "react";
import { Image } from 'react-bootstrap';
import { BASE_PATH, ContentMediaLink } from '../../thor/src';
import "./index.css";

const FileUploader = () => {
    const [uploadedFile, setUploadedFile] = useState<ContentMediaLink | null>(null);
    const [error, setError] = useState(null);

    const MAX_FILE_SIZE = 150 * 1024 * 1024; // 150 MB
    const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

    const handleFileUpload = async (file) => {
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
            setError(`File type not allowed. Allowed types: ${ALLOWED_FILE_TYPES.join(", ")}`);
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError(`File size exceeds the maximum allowed size of ${MAX_FILE_SIZE / 1024 / 1024} MB.`);
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setError(null);
            const response = await axios.post(BASE_PATH + "/files/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setUploadedFile(response.data); // Assuming the backend returns the file path as plain text
        } catch (err) {
            setError("Failed to upload file. Please try again.");
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    return (
        <div className="file-uploader">
            <div
                className="drop-zone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                Drag and drop your file here or click to upload
            </div>

            <input
                type="file"
                id="file-input"
                style={{ display: "none" }}
                onChange={handleFileSelect}
            />

            <button onClick={() => document.getElementById("file-input").click()}>
                Select File
            </button>

            {error && <p className="error">{error}</p>}

            {uploadedFile && (
                <p className="success">
                    <a href={uploadedFile.mediaUrl}><Image src={uploadedFile.mediaUrl} /> <br />{uploadedFile.contentType}</a>
                </p>
            )}
        </div>
    );
};

export default FileUploader;
