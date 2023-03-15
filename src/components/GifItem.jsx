export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} onClick={() => window.open(url, "_blank")} />
    </div>
  );
};
