import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { fetchPoems } from "../components/firebase_fetch";

const Poem = () => {
  const [poems, setPoems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPoems = async () => {
      try {
        // Fetch only from Firebase
        const firebasePoems = await fetchPoems();
        setPoems(firebasePoems);
      } catch (err) {
        setError("Failed to fetch poems.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getPoems();
  }, []);

  if (loading) return <p>Loading poems...</p>;
  if (error) return <p>{error}</p>;
  if (!poems || poems.length === 0) return <p>No poems found.</p>;

  return (
    <div className="page">
      <Cards cardContent={poems} />
    </div>
  );
};

export default Poem;
