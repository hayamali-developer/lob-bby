"use server";

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 */

/**
 * Fetch categories from the database
 * @returns {Promise<Category[]>}
 */
export const getCategories = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/categories`);
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    const json = await response.json();
    return json.data;
};


export const getProviders = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/providers`);
    if (!response.ok) {
        throw new Error("Failed to fetch providers");
    }
    const json = await response.json();
    return json.data;
};


