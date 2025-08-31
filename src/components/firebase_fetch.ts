import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from './firebase';

// Utility function to fetch all documents from "poems" collection
export const fetchPoems = async (): Promise<DocumentData[]> => {
  try {
    const poemsCollectionRef = collection(db, "poems");
    const querySnapshot = await getDocs(poemsCollectionRef);

    const fetchedDocs: DocumentData[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      fetchedDocs.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched documents from Firebase:", fetchedDocs);

    return fetchedDocs;
  } catch (error) {
    console.error("Error fetching documents from Firebase:", error);
    throw error;
  }
};
