import React from "react";

interface Props {
  content: string;
  title: string;
  onClose: () => void;
}

const PoemContent = ({ content }: { content: string }) => {
  return (
    <div>
      {content.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

const Modals = ({ content, title, onClose }: Props) => {
  // Function to handle clicks on the modal backdrop (outside the modal content)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal when the backdrop is clicked
    }
  };
  return (
    <div
      className="modal show"
      tabIndex={-1}
      style={{ display: "block" }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose} // Close modal on button click
            ></button>
          </div>
          <div className="modal-body">
            <p>{<PoemContent content={content} />}</p>{" "}
            {/* Display the content passed from the button */}
          </div>
        </div>
      </div>
    </div>
  );
  //   <div className="modal-dialog modal-xl">{content}</div>;
};

export default Modals;
