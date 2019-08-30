import React from "react";
const Bottom = () => {
  return (
    <React.Fragment>
      <div className="bottom-section-1">
        <form action="#">
          <div className="form-group form-responsive">
            <input
              type="text"
              className="form-control w-75 d-inline something-input"
              placeholder="Looking for something?"
            />
            <input
              type="submit"
              value="SEARCH"
              className="btn btn-primary search-btn ml-2"
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Bottom;
