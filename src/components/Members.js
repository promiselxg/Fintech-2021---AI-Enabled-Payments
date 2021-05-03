const Members = ({ Image, Name }) => {
  return (
    <>
      <div className="member">
        <img src={Image} alt={Name} />
        <h1>{Name}</h1>
      </div>
    </>
  );
};

export default Members;
