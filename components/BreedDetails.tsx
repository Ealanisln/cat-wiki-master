// components/BreedDetails.js
import React from "react";
import axios from "axios";
import { Catwiki } from "../lib/interface"; // Adjust the path as needed

interface BreedDetailsProps {
  breed: string;
}

const BreedDetails: React.FC<BreedDetailsProps> = ({ breed }) => {
  const [details, setDetails] = React.useState<Catwiki | null>(null);

  React.useEffect(() => {
    async function fetchBreedDetails() {
      try {
        const response = await axios.get(`/breeds/${breed}`, {
          baseURL: 'https://api.thecatapi.com/v1',
          headers: {
            'x-api-key': process.env.API_CAT_KEY,
          },
        });
        setDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBreedDetails();
  }, [breed]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{details.name}</h1>
      {/* Display other breed information using 'details' */}
    </div>
  );
};

export default BreedDetails;
