import "../App.css";
import MiniCard from "../common-components/MiniCard.jsx";

const CountryDetail = ({ detail }) => {
  return (
    <div className="country-detail">
      <div className="country-header-detail pt-1 pb-4 pl-2">
        <div className="country-flag">
          <img
            src={detail.flag}
            width="90"
            height="60"
            className="p-0"
            alt={detail.name}
          />
        </div>
        <div className="country-sub-detail mt-0 pl-3">
          <div className="card custom-border-radius max-width border-0">
            <div className="card-body p-0 m-0">
              <p className="card-title mb-1 text-left px-1">
                <span className="dark-grey-text font-weight-500">
                  {detail.name}
                </span>
                <span className="light-grey-text pl-1">
                  ({detail.alpha3Code})
                </span>
              </p>
              <p className="card-subtitle mb-1 text-left px-1 dark-grey-text font-weight-500">
                {detail.capital}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-row">
        <MiniCard
          title={"Demonym"}
          subtitle={detail.demonym}
          key={detail.demonym}
        />
        <MiniCard
          title={"Calling Code"}
          subtitle={detail.callingCode}
          key={detail.callingCode}
        />
      </div>
      <br />
      <div className="detail-row">
        <MiniCard
          title={"Currency"}
          subtitle={detail.currency}
          key={detail.currency}
        />
        <MiniCard
          title={"Population"}
          subtitle={detail.population}
          key={detail.population}
        />
      </div>
    </div>
  );
};

export default CountryDetail;
