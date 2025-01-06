"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SettingsNavigator from "../ui/SettingsNavigator";
import Button from "../../ui/Button";
import { FaRegImage } from "react-icons/fa6";
import { TiTimes } from "react-icons/ti";

const validIdSteps = [
  { label: "Settings", href: "/main/settings" },
  { label: "KYC", href: "/main/settings" },
  { label: "Valid Identification", href: "/main/settings" },
];

export default function ValidID() {
  const [selectedId, setSelectedId] = useState("Passport");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false); // Track upload state
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load saved image preview on component mount
  useEffect(() => {
    const savedImageURL = localStorage.getItem("uploadedImageURL");
    if (savedImageURL) {
      setImagePreview(savedImageURL); // Set imagePreview from localStorage if available
    }
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(e.target.value);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
    localStorage.removeItem("uploadedImageURL"); // Remove from localStorage when image is removed
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    try {
      setIsUploading(true);

      // Step 1: Fetch accessToken from local storage
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("You are not authenticated. Please log in again.");
        return;
      }

      // Step 2: Fetch signature from your backend, passing accessToken in the headers
      const signatureResponse = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/account/image-upload-signature",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const signatureData = await signatureResponse.json();
      if (!signatureResponse.ok) {
        throw new Error(signatureData.message || "Failed to fetch signature");
      }

      const { token, expire, signature } = signatureData.data;

      // Step 3: Create FormData for ImageKit upload
      const formData = new FormData();
      formData.append("file", image); // The selected image file
      formData.append("fileName", image.name); // Name of the file
      formData.append("publicKey", "public_AJejPaYhBTg1hY1ARboX64NZrFU=");
      formData.append("signature", signature);
      formData.append("expire", expire.toString());
      formData.append("token", token);

      // Step 4: Upload to ImageKit using fetch
      const uploadResponse = await fetch(
        "https://upload.imagekit.io/api/v1/files/upload",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const uploadData = await uploadResponse.json();

      if (uploadResponse.ok) {
        console.log("Upload Successful:", uploadData);
        alert("Image uploaded successfully!");

        // Step 5: Save the uploaded image URL to localStorage
        localStorage.setItem("uploadedImageURL", uploadData.url); // Save the ImageKit URL

        // Set the image preview state to the uploaded image URL
        setImagePreview(uploadData.url);

        // Step 6: Submit KYC with image URL and ID type
        const kycResponse = await fetch(
          "https://api-royal-stone.softwebdigital.com/api/kyc",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identity: {
                type: selectedId.toLowerCase().replace(" ", "-"), // Convert ID type to lowercase with hyphen
                value: uploadData.url, // Image URL from ImageKit
              },
            }),
          }
        );

        const kycData = await kycResponse.json();

        if (kycResponse.ok) {
          alert("KYC information submitted successfully!");
          console.log("KYC Response:", kycData);
        } else {
          throw new Error(kycData.message || "Failed to submit KYC");
        }
      } else {
        throw new Error(uploadData.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload Failed:", error);
      alert("Failed to upload image or submit KYC. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="lg:mr-8">
      <SettingsNavigator currentStep={1} steps={validIdSteps} />
      <h1 className="text-color-zero text-base font-semibold my-4">
        Valid Identification
      </h1>
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-color-form text-sm">ID type</p>
          <div className="relative border-b border-slate-200">
            <select
              value={selectedId}
              onChange={handleSelectChange}
              required
              className="rounded-sm placeholder:text-color-zero placeholder:text-sm py-1 w-full"
            >
              <option value="Passport">International Passport</option>
              <option value="Drivers License">Drivers License</option>
              <option value="Other Valid id">Other Valid ID</option>
            </select>
          </div>
        </div>
      </div>
      <section className="mt-8">
        <p className="text-color-form text-sm">Provide a picture of the ID</p>
        <div
          className={`flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common w-full pr-8`}
        >
          {!image && !imagePreview && (
            <>
              <div
                className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white`}
              >
                <span className="text-color-one transform -rotate-45">
                  <FaRegImage className="text-color-one" />
                </span>
              </div>
              <p
                className={`text-sm text-color-one cursor-pointer`}
                onClick={handleImageClick}
              >
                Tap to Upload Image
              </p>
            </>
          )}
          {(imagePreview || image) && (
            <div className="mt-4 flex flex-col justify-center items-center relative">
              <TiTimes
                onClick={handleRemoveImage}
                className="absolute top-0 right-0 text-color-form cursor-pointer text-xl bg-white rounded-full p-1"
              />
              <Image
                src={imagePreview || ""}
                alt="Image Preview"
                className="mt-4 object-cover rounded-lg"
                width={128}
                height={128}
              />
              <div className="flex gap-1 mt-2">
                <p className="text-sm text-color-form">{image?.name}</p>
              </div>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <hr />
      </section>
      <Button
        ButtonText={isUploading ? "Uploading..." : "Finish"}
        className="w-full mt-4"
        onClick={handleUpload}
        disabled={isUploading}
      />
    </div>
  );
}
