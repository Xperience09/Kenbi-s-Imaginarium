import Cards from "../components/Cards";
import { Poems } from "./poems/Poems";

const Poem = () => {
  return (
    <div className="page">
      <Cards cardContent={Poems} />
    </div>
  );
};

export default Poem;
