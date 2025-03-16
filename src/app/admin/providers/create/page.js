"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {getCategories} from "@/app/admin/server/data";


function Page() {
    const [categories, setCategories] = useState([]);
    const [name_en, setNameEn] = useState("");
    const [name_ar, setNameAr] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [description_en, setDescriptionEn] = useState("");
    const [description_ar, setDescriptionAr] = useState("");
    const [near_by, setNearBy] = useState("");
    const [services, setServices] = useState("");
    const [time, setTime] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const [images, setImages] = useState([]);
    const [cover, setCover] = useState("");
    const [card, setCard] = useState("");

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files) {
            setImages(files); // For multi-image upload
            setCover(files[0]); // For cover image (just the first file)
            setCard(files[0]); // For card image (just the first file)
        }
    };
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                setCategories(response);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);


    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = ["Pool", "Balcony", "Parking", "Internet"];

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };
    const resetForm = () => {
        setNameEn("");
        setNameAr("");
        setLocation("");
        setPrice("");
        setPhone("");
        setDate("");
        setDescriptionEn("");
        setDescriptionAr("");
        setNearBy("");
        setServices("");
        setTime("");
        setCategory("");
        setLink("");
        setImages([]);
        setCover([]);
        setCard([]);
      };
      
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              const formData = new FormData();
              formData.append("name_en", name_en);
              formData.append("name_ar", name_ar);
              formData.append("location", location);
              formData.append("price", price);
              formData.append("phone", phone);
              formData.append("date", date);
              formData.append("description_en", description_en);
              formData.append("description_ar", description_ar);
              formData.append("near_by", near_by);
              formData.append("services", JSON.stringify(selectedOptions));
              formData.append("time", time);
              formData.append("category", category);
              formData.append("link", link);
          
              for (let i = 0; i < images.length; i++) {
                  formData.append("images[]", images[i]);
              }
              
              formData.append("cover", cover);
              formData.append("card", card);
      
              const response = await axios.post("http://127.0.0.1:8000/api/providers", formData);
              console.log(response.data);
              resetForm();
              window.location.href = "/admin/providers"; // Redirect to another page
          } catch (error) {
              if (error.response) {
                  console.error("Server error:", error.response.data);
                  alert("Validation errors: " + JSON.stringify(error.response.data.errors || {}));
              } else if (error.request) {
                  console.error("No response from server:", error.request);
              } else {
                  console.error("Error setting up request:", error.message);
              }
              alert("Failed to create provider.");
          }
      };

    return (
        <main className="bg-white-500 flex-1 p-3 overflow-hidden">
            <div className="flex flex-col">
                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                    <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                            Providers
                        </div>
                        <div className="p-3">
                            <form className="w-full" onSubmit={handleSubmit} >
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            placeholder="Provider Name_Ar"
                                            value={name_ar}
                                            onChange={(e) => setNameAr(e.target.value)}
                                            required
                                        />

                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            placeholder="Provider Name_En"
                                            value={name_en}
                                            onChange={(e) => setNameEn(e.target.value)}
                                            required
                                        />
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            placeholder="setLocation"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            required
                                        />

                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            placeholder=" Price"
                                            value={price}
                                            onChange={(e) => setPrice(parseFloat(e.target.value) || "")}
                                            required
                                        />
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone" type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Enter your phone number"/>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="date" type="date"
                                            value={date}
                                            onChange={(e) =>setDate(new Date(e.target.value).toISOString().split("T")[0])}
                                            placeholder="Select a date"/>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="time" type="time" placeholder="Select a time"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <div className="flex flex-col space-y-2 mt-2">
                                            {options.map((option) => (
                                                <label key={option} className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="services[]"
                                                        checked={selectedOptions.includes(option)}
                                                        onChange={() => handleCheckboxChange(option)}
                                                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                                    />
                                                    <span>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="service"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            >
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                            <option key={category["id"]} value={category.name}>{category.name}</option>
                                                ))}

                                        </select>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            placeholder="Link"
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                            required
                                        />
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <textarea id="content"
                                                  value={description_en}
                                                  onChange={(e) => setDescriptionEn(e.target.value)}
                                                  placeholder="Description En"
                                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                                  rows="6" required></textarea>
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <textarea id="content" value={description_ar}
                                                  onChange={(e) => setDescriptionAr(e.target.value)}
                                                  placeholder="Description Ar"
                                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                                  rows="6" required ></textarea>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            placeholder="Near By"
                                            value={near_by}
                                            onChange={(e) => setNearBy(e.target.value)}
                                            required
                                        />
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1">
                                            Multi Images
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="file"
                                            name="images[]"
                                            multiple
                                            onChange={handleImageChange}
                                            />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1">
                                            Cover Image
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="file"
                                            name="cover"
                                            onChange={handleImageChange}
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1">
                                            Card Image
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="file"
                                            name="card"
                                            onChange={handleImageChange}
                                        />
                                    </div>

                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 py-2 px-4 rounded-full"
                                            type="submit">
                                           Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
