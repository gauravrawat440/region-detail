import "../App.css";
const MiniCard = ({title, subtitle}) => {
  return (
    <div className="card mini-card-width ml-2 py-1 custom-border-radius">
      <div className="card-body p-0 m-0">
        <p className="card-title mb-1 text-left px-1 light-grey-text">{title}</p>
        <p className="card-subtitle mb-1 text-left px-1 dark-grey-text font-weight-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default MiniCard;
