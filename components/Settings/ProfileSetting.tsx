import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../ui/Button";
import Navigator from "./SettingsNavigator";

const profileSteps = [
  { label: "Settings", href: "/main/settings" },
  { label: "Profile Settings", href: "/main/settings" },
];

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    username: "",
    country: "",
    state: "",
    address: "",
  });
  const [userName, setUserName] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setUserName(savedName);
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Retrieve token from local storage
        if (!token) {
          throw new Error("Token not found. Please log in again.");
        }
  
        const response = await fetch(
          "https://api-royal-stone.softwebdigital.com/api/account/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to the Authorization header
            },
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch profile data.");
        }
  
        const responseData = await response.json();
        console.log("Profile data:", responseData);  // Debugging: Check the structure of data
  
        if (responseData.status && responseData.data) {
          setProfile({
            fullName: responseData.data.fullName || "",
            email: responseData.data.email || "",
            phoneNumber: responseData.data.phone || "",
            username: responseData.data.username || "",
            country: responseData.data.country || "",
            state: responseData.data.state || "",
            address: responseData.data.address || "",
          });
        } else {
          console.error("Data is not in the expected format.");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        // alert(error.message || "An error occurred.");
      }
    };
  
    fetchProfile();
  }, []);
  
  


  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (for updating profile)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem("accessToken"); // Retrieve token from local storage
      if (!token) {
        throw new Error("Token not found. Please log in again.");
      }

      const response = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/account/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token to the Authorization header
          },
          body: JSON.stringify(profile),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile.");
      }

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      // alert(error.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navigator currentStep={1} steps={profileSteps} classname="lg:hidden" />
      <h1 className="text-color-zero text-base font-semibold mt-6">Profile Settings</h1>
      <form
        className="flex flex-col mt-6 space-y-8 lg:w-[300px] xl:w-[430px] 2xlg:w-[500px]"
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={userName}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="Cooper Winterwind"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="cooperwind@gmail.com"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="+1 555-123-4567"
          />
        </div>

        {/* Username */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Username</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="Cooper"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">Country</label>
          <div className="relative border-b border-slate-200">
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
              required
              className="rounded-sm text-color-zero py-1"
              placeholder="Nigeria"
            />
            <div className="absolute top-3 right-3">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* State */}
        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">State</label>
          <div className="relative border-b border-slate-200">
            <input
              type="text"
              name="state"
              value={profile.state}
              onChange={handleChange}
              required
              className="rounded-sm text-color-zero py-1"
              placeholder="Lagos"
            />
            <div className="absolute top-3 right-3">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="31 Olorunjare Street, Pako-Akoka"
          />
        </div>

        <Button
          ButtonText={isLoading ? "Saving..." : "Save"}
          className="py-3 lg:w-[300px] xl:w-[430px] 2xlg:w-[500px]"
        />
      </form>
    </div>
  );
}
