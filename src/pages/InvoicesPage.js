import React, { Component } from 'react';
import {
  Actions,
  InvoicesTable
} from '../components';

/*eslint-disable */
class InvoicesPage extends Component {
  render() {
    const { invoices } = this.props;

    return (
      <div className="invoices-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <span>Invoices</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
        <Actions />
        <InvoicesTable invoices={invoices} />
      </div>
    );
  }
}

export default InvoicesPage;
