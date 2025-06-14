import '../../index.css';
import { times } from "lodash";

const Preloader = () => {
  return (
    <div>
      {/* <div className='header-section-preloader'>
        <div className='header-left-preloader' />
        <div className='header-right-preloader'>
          {times(4).map((index) => {
            return (
              <div key={index} className="navigation-preloader">
                <div className="navigation-title-preloader" />
              </div>
            );
          })}
        </div>
      </div> */}
      <div className='search-section-preloader'>
        <div className='search-bar-preloader' />
        <div className='sort-btn-preloader' />
      </div>
      <div className='body-section-preloader'>
        {times(10).map((index) => {
          return (
            <div key={index} className="body-cards-preloader">
              <div className="card-preloader">
                <div className="card-image-preloader" />
                <div className="card-data-preloader">
                  {times(3).map((index) => {
                    return (
                      <div key={index} className="card-lines-preloader" />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preloader;
