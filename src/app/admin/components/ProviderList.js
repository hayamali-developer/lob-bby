
"use client"; // Mark this as a Client Component

import { useState } from "react";
import Link from "next/link";
import axios from "axios";


function ProviderList({ providers }) {
    const [providerList, setProviderList] = useState(providers || []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/providers/${id}`);
            setProviderList(providerList.filter(provider => provider.id !== id)); // Update state
            alert("Provider deleted successfully!");
          } catch (error) {
            console.error("Error details:", error.response || error.message);
            alert("Failed to delete provider");
          }
    };

    return (
        <table className="table-responsive w-full rounded">
            <thead>
            <tr>
                <th className="border w-1/4 px-4 py-2">Name</th>
                <th className="border w-1/7 px-4 py-2">Status</th>
                <th className="border w-1/5 px-4 py-2">Actions</th>
            </tr>
            </thead>
            {Array.isArray(providerList) && providerList.map((provider)  => {
                console.log("Provider ID:", provider.id); // Debugging line
                return (

                            <tr key={provider.id}>
                        <td className="border px-4 py-2">{provider.name_en}</td>
                        <td className="border px-4 py-2">
                            <span className="text-green-500">Active</span>
                        </td>
                        <td className="border px-4 py-2">
                            <Link href={`/admin/providers/edit/${provider.id}`}
                                  className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                                <i className="fas fa-edit"></i>
                            </Link>
                            <button
                                onClick={() => handleDelete(provider.id)}
                                className="bg-red-500 cursor-pointer rounded p-1 mx-1 text-white"
                            >
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                );
            })}
        </table>
    );
}

export default ProviderList;