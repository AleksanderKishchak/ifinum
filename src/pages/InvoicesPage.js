import React, { Component } from 'react';
import { Actions, InvoicesTable, PageTitle } from '../components';

/*eslint-disable */
class InvoicesPage extends Component {
  render() {
    const { invoices } = this.props;

    return (
      <div className="invoices-page page">
        <PageTitle title="Invoices" />
        <Actions />
        <InvoicesTable invoices={invoices} />
      </div>
    );
  }
}

export default InvoicesPage;
