import Modals from "./Modals";
import { useState } from "react";

interface Props {
  cardContent: PoemCardContent[];
}

interface PoemCardContent {
  title: string;
  content: string;
}

const Cards = ({ cardContent }: Props) => {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const handleOpenModal = (content: string, title: string) => {
    setModalContent(content);
    setModalTitle(title);
  };

  // onclose don't show any model
  const handleCloseModal = () => {
    setModalTitle(null);
    setModalContent(null);
  };

  return (
    <div className="container">
      <div className="row">
        {cardContent.map((item, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="shadow card h-100 zoom">
              {/* <img src="..." className="card-img-top" alt="..." /> */}

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                {/* <p className="card-text">{item.content}</p> */}
                <button
                  onClick={() => handleOpenModal(item.content, item.title)}
                  className="btn btn-outline-light card-btn"
                >
                  Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Conditionally render the modal if modalContent is set */}
      {modalContent && modalTitle && (
        <Modals
          content={modalContent}
          title={modalTitle}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Cards;
