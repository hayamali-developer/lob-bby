"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

function Page() {
    const { id } = useParams();

    const [providerField, setProvidersField] = useState(() => ({
        name_en: "",
        name_ar: "",
        location: "",
        price: "",
        phone: "",
        date: "",
        description_en: "",
        description_ar: "",
        near_by: "",
        services: [],
        time: "",
        category: [],
        link: "",
        images: [],
        cover: "",
        card: "",
    }));



    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/providers/${id}`);
                const data = response.data;

                setProvidersField({
                    name_en: data.name_en || "",
                    name_ar: data.name_ar || "",
                    location: data.location || "",
                    price: data.price || "",
                    phone: data.phone || "",
                    date: data.date || "",
                    description_en: data.description_en || "",
                    description_ar: data.description_ar || "",
                    near_by: data.near_by || "",
                    services: data.services || [], // Ensure services are an array
                    time: data.time || "",
                    category: data.category || "", // Ensure category is an array
                    link: data.link || "",
                    images: data.images || [], // Ensure images are an array
                    card: data.card || "",
                    cover: data.cover || "",
                });
            } catch (error) {
                console.error("Error fetching provider data:", error);
            }
        })();
    }, [id]);


    const changeProviderFieldHandler = (e) => {
        const { name, value } = e.target;

        setProvidersField((prevState) => ({
            ...prevState,
            [name]: name === "services" || name === "category" ? value.split(",") : value
        }));
    };
    const handleImageChange = (e) => {
        setProvidersField({
            ...providerField,
            images: Array.from(e.target.files) // Convert FileList to Array
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            // Append non-file fields
            Object.keys(providerField).forEach((key) => {
                if (key === "images") {
                    if (providerField.images.length > 0 && providerField.images[0] instanceof File) {
                        providerField.images.forEach((image) => formData.append("images[]", image));
                    }
                } else if (Array.isArray(providerField[key])) {
                    providerField[key].forEach((item) => formData.append(`${key}[]`, item));
                } else {
                    formData.append(key, providerField[key]);
                }
            });

            await axios.put(`http://127.0.0.1:8000/api/providers/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            window.location.href = "/admin/providers"; // Redirect after update
        } catch (error) {
            console.error("Error updating Provider:", error);
            alert(error.response?.data?.message || "Failed to update Provider.");
        }
    };





    return (
        <main className="bg-white-500 flex-1 p-3 overflow-hidden">
            <div className="flex flex-col">
                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                    <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">Categories</div>
                        <div className="p-3">
                            <form className="w-full" onSubmit={handleSubmit}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            name="name_ar"
                                            placeholder={providerField.name_ar}
                                            value={providerField.name_ar || ""} // ✅ Ensures a fallback value
                                            onChange={changeProviderFieldHandler}
                                            required
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            name="name_en"
                                            placeholder="Provider En"
                                            value={providerField.name_en || ""} // ✅ Ensures a fallback value
                                            onChange={changeProviderFieldHandler}
                                            required
                                        />
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            name="location"
                                            placeholder="Location"
                                            value={providerField.location || ""} // ✅ Ensures a fallback value
                                            onChange={changeProviderFieldHandler}
                                            required
                                        />

                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            name="price"
                                            placeholder="Price"
                                            value={providerField.price || ""} //
                                            onChange={changeProviderFieldHandler}
                                            required
                                        />
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone" type="tel"
                                            name="phone"
                                            value={providerField.phone || ""} //
                                            onChange={changeProviderFieldHandler}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="date" type="date"
                                            name="date"
                                            value={providerField.date || ""} //
                                            onChange={changeProviderFieldHandler}
                                            placeholder="Select a date"/>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="time" type="time" placeholder="Select a time"
                                            name="time"
                                            value={providerField.time || ""} //
                                            onChange={changeProviderFieldHandler}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="service"
                                            name="services"
                                            value={providerField.services.length > 0 ? providerField.services.join(",") : ""}
                                            onChange={changeProviderFieldHandler}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="haircut">Haircut</option>

                                        </select>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="service"
                                            name="category"
                                            value={providerField.category || ""}
                                            onChange={changeProviderFieldHandler}

                                        >
                                            <option value="">Select a category</option>

                                            <option value="haircut">Haircut</option>


                                        </select>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            name="link"
                                            placeholder="Link"
                                            value={providerField.link || ""} //
                                            onChange={changeProviderFieldHandler}
                                            required
                                        />
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <textarea id="content"
                                                  name="description_en"
                                                  value={providerField.description_en || ""} //
                                                  onChange={changeProviderFieldHandler}
                                                  placeholder="Description En"
                                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                                  rows="6" required></textarea>
                                    </div>


                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                        <textarea id="content"
                                                  name="description_ar"
                                                  value={providerField.description_ar || ""} //
                                                  onChange={changeProviderFieldHandler}
                                                  placeholder="Description Ar"
                                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                                  rows="6" required ></textarea>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            name="near_by"
                                            placeholder="Near By"
                                            value={providerField.near_by || ""} //
                                            onChange={changeProviderFieldHandler}

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
                                            name="images"
                                            multiple
                                            onChange={handleImageChange}
                                        />
                                    </div>



                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 py-2 px-4 rounded-full"
                                            type="submit"
                                        >
                                            Update Provider
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
