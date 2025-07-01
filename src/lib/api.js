import axios from "axios";

const directusURL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

const api = axios.create({
  baseURL: directusURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  proxy: false,
});

// Helper function to get config for API calls
const getConfig = (params = {}, headers = {}) => ({
  params,
  headers: { ...api.defaults.headers.common, ...headers },
});

// Public user signup for Directus v11
export async function apiSignup(formData) {
  try {
    const response = await api.post("/users/register", {
      email: formData.email,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
      //verification_url: "",
    });
    return response.data.data;
  } catch (error) {
    console.error("Error signup", error);
    throw error;
  }
}


export async function getItem(collection, id, params = {}, headers = {}) {
  try {
    const response = await api.get(
      `/items/${collection}/${id}`,
      getConfig(params, headers)
    );
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${collection} item:`, error);
    return null;
  }
}

export async function getItems(
  collection,
  params = {},
  headers = {},
  fullResponse = false
) {
  try {
    const response = await api.get(
      `/items/${collection}`,
      getConfig(params, headers)
    );
    if (fullResponse) {
      return response.data;
    }
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${collection} items:`, error);
    throw error;
  }
}

export function getImageURL(imageId) {
  const directusURL =
    process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";
  if (!imageId) return "";
  return `${directusURL}/assets/${imageId}`;
}

export default api;
