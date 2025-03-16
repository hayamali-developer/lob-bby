"use client";
import React, { useState } from "react";
import axios from "axios";

function Page() {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await axios.post(`http://127.0.0.1:8000/api/categories`, { name });
            setName(""); // Clear input after submission
            window.location.href="/admin/admin-categories";

        } catch (error) {
            console.error("Error creating category:", error);
            alert("Failed to create category.");
        }
    };

    return (
        <main className="bg-white-500 flex-1 p-3 overflow-hidden">
            <div className="flex flex-col">
                <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                    <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                        <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                            Categories
                        </div>
                        <div className="p-3">
                            <form className="w-full" onSubmit={handleSubmit}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1">
                                            Category Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                                            type="text"
                                            placeholder="Category Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                                    </div>

                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 py-2 px-4 rounded-full" type="submit">
                                            Button
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
