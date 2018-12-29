import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.sass';

function PageTitle({ title }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="title">
            <span>{title}</span>
            <span className="line" />
          </div>
        </div>
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string
};

PageTitle.defaultProps = {
  title: 'Page'
};

export default PageTitle;
