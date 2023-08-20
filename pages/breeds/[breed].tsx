// pages/breeds/[breed].js
import { useRouter } from "next/router";
import BreedDetails from "@/components/BreedDetails";

const BreedPage = () => {
  const router = useRouter();
  const { breed } = router.query;

  return (
    <div>
      <h1>Breed Details</h1>
      {breed && <BreedDetails breed={breed as string} />}
    </div>
  );
};

export default BreedPage;
