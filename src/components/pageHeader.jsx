const Pageheader = ({ title, description }) => {
  return (
    <div>
      <div>
        <h2 style={{ fontFamily: "cursive", fontSize: "20px" }}>{title}</h2>
      </div>
      <div>
        <p style={{ fontFamily: "cursive", fontSize: "30px" }}>{description}</p>
      </div>
    </div>
  );
};
export default Pageheader;
