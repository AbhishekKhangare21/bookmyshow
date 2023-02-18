import ShowCard from "./ShowCard";

const Home = ({ shows, setId }) => {
  return (
    <div className="wrapper" style={{ backgroundColor: "white" }}>
      {shows.map((showObj) => (
        <ShowCard key={showObj.show.id} setId={setId} showObj={showObj} />
      ))}
    </div>
  );
};

export default Home;
