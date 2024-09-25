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


export const getAllCraftsmanApi = async (page, pageSize) => {
  try {
    const response = await apiClient.get(
      `craftmen/get-All_craftmen?page=${page}&pageSize=${pageSize}`
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