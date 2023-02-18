import { useNavigate } from "react-router-dom";

const Summary = ({ shows, showId }) => {
  console.log("showId", showId);
  const navigate = useNavigate();
  console.log("shows", shows);
  console.log();
  return (
    <>
      <div className="summary" style={{ marginBottom: "20px" }}>
        <span>
          <h2>summary</h2>
          {shows
            .filter((showObj) => showObj.show.id === showId)
            .map((showObj) => (
              <span
                dangerouslySetInnerHTML={{ __html: showObj.show.summary }}
              />
            ))}
        </span>
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="goback__btn"
      >
        go back
      </button>
    </>
  );
};

export default Summary;
