
// src/app/admin/admin-categories/Categories.js
import React from "react";
import Link from "next/link";
import { getProviders } from "@/app/admin/server/data";
import ProviderList from "../components/ProviderList";
async function Providers() {
    const data = await getProviders(); // Fetch categories
console.log(data);
    return (
        <div className="flex flex-col">
            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                    <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                        Categories
                        <Link href="/admin/providers/create">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 py-2 px-4 rounded-full">
                                Add List
                            </button>
                        </Link>
                    </div>
                    <div className="p-3">
                        {/* Pass data to the Client Component */}
                        <ProviderList providers={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Providers;
