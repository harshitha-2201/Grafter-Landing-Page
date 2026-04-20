const Skeleton = ({ type }) => {
  if (type === "hero") {
    return (
      <div className="skeleton-hero">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-btn"></div>
      </div>
    );
  }

  if (type === "features") {
    return (
      <div className="skeleton-features">
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
    );
  }

  return null;
};

export default Skeleton;