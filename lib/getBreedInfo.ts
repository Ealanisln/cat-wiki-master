import { BreedImage } from "../interfaces";
import { breedApi } from "../api/"

export const getBreedInfo = async (nameOrId: string) => {
  console.log("NameOrID:", nameOrId);
  try {
    const response = await breedApi.get<BreedImage[]>(
      `/images/search?breed_ids=${nameOrId}`
    );

    console.log("API response:", response.data);

    if (response.data && response.data.length > 0) {
      return response.data[0];
    }

    return null;

  } catch (error) {
    console.error("Error fetching breed info:", error);
    return null;
  }
};
