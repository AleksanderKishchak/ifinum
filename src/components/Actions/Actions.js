import React from 'react';
import './Actions.sass';

function Actions(props) {
  return (
    <section className="actions section">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="section-content">
              <h5 className="section-title">Actions</h5>
              <button
                type="button"
                className="btn btn-primary"
              >
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Actions;
