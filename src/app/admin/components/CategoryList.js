// src/app/admin/admin-categories/CategoryList.js
"use client"; // Mark this as a Client Component

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

function CategoryList({ categories }) {
    const [categoryList, setCategoryList] = useState(categories); // State to manage categories

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
            setCategoryList(categoryList.filter(category => category.id !== id)); // Update state
            alert("Category deleted successfully!");
        } catch (error) {
            console.error("Error deleting category:", error);
            alert("Failed to delete category.");
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
            <tbody>
            {categoryList.map((category) => (
                <tr key={category.id}>
                    <td className="border px-4 py-2">{category.name}</td>
                    <td className="border px-4 py-2">
                        <span className="text-green-500">Active</span>
                    </td>
                    <td className="border px-4 py-2">
                        <Link href={`/admin/admin-categories/edit/${category.id}`}
                              className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                            <i className="fas fa-edit"></i>
                        </Link>
                        <button
                            onClick={() => handleDelete(category.id)}
                            className="bg-red-500 cursor-pointer rounded p-1 mx-1 text-white"
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default CategoryList;