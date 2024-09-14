import apiClient from "./apiClient";

export const registerCraftsmanApi = async (craftmandetails) => {
  try {
    const response = await apiClient.post(
      "craftmen/register-craftman",
      craftmandetails
    );

    console.log('response from api', response)

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const fetchCraftsmanDetailsApi = async (craftsmanId) => {
  const response = await apiClient.get(`/craftsman/${craftsmanId}`);
  return response.data;
};