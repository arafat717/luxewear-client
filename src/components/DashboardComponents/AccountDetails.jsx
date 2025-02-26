/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import useGetPublice from "../../hooks/useGetPublice";
import { AuthContext } from "../../Provider/AuthProvider";
import { countries } from "../../utils/Country";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AccountDetails = () => {
  const publiceInstance = useGetPublice();
  const { user } = useContext(AuthContext);
  const [ourUser, setOurUser] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // load user data to show
  useEffect(() => {
    publiceInstance
      .get(`/user?email=${user?.email}`)
      .then((res) => {
        setOurUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  // update the user information
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const country = selectedCountry;
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const fileInput = form.file;
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await publiceInstance.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const imageUrl = res.data.data.display_url;
        const updatedUserData = {
          name,
          email,
          phone,
          country,
          image: imageUrl,
        };
        const insetdata = await publiceInstance.put(
          `/update-user/${user?.email}`,
          updatedUserData
        );
      } else {
        console.error("Image upload failed:", res.data);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto  bg-gray-50 rounded-xl pb-32 py-14">
      <div className="flex flex-col items-center">
        <img
          className="w-36 h-36 rounded-full"
          src={
            ourUser?.image
              ? ourUser?.image
              : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1740545868~exp=1740549468~hmac=aef32ade622b282bee313fe87cc7ee8499afa4fc2735ca27c6216a44ffa290cd&w=740"
          }
          alt=""
        />
        <h1 className="mt-7 text-2xl font-semibold"> {ourUser?.name}</h1>
        <h1 className="mt-3 font-semibold">{ourUser?.email}</h1>
        <h1 className="text-xl mt-10 font-semibold border-b-2 border-black pb-2">
          Update Your Information
        </h1>
      </div>
      <div className="w-full md:px-28 mt-7">
        <form onSubmit={handleUpdateUser}>
          <div className="grid md:grid-cols-2 gap-7">
            <input
              type="text"
              className="w-full p-3 border-2 border-gray-300 rounded-lg  focus:ring-black hover:border-black"
              name="name"
              defaultValue={ourUser?.name}
              placeholder="Your Name*"
            />
            <input
              type="email"
              className="w-full p-3 border-2 border-gray-300 rounded-lg  focus:ring-black hover:border-black"
              name="email"
              readOnly
              defaultValue={ourUser?.email}
              placeholder="Your Name*"
            />

            <input
              type="text"
              className="w-full p-3 border-2 border-gray-300 rounded-lg  focus:ring-black hover:border-black"
              name="phone"
              defaultValue={ourUser?.phone}
              placeholder="Add your phone number*"
            />
            <select
              id="country"
              name="country"
              value={selectedCountry}
              defaultValue={ourUser?.country}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg  focus:ring-black hover:border-black"
            >
              <option value="">-- Select Country --</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              type="file"
              className="w-1/2 p-3 border-2 border-gray-300 rounded-lg  focus:ring-black hover:border-black"
              name="file"
              placeholder="Your Name*"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 bg-black text-white border font-semibold  transition hover:bg-inherit hover:text-black"
          >
            <p>Update Account</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
