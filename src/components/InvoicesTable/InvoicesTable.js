import React, { Component } from 'react';
import moment from 'moment';
import './InvoicesTable.sass';

/*eslint-disable */
class InvoicesTable extends Component {
  render() {
    const { invoices } = this.props;
    const tableRows = invoices.map(invoice => {
      const createdDate = moment(invoice.date_created, 'DD MMMM YYYY', 'en');
      const supplyDate = moment(invoice.date_supply, 'DD MMMM YYYY', 'en');

      return (
        <tr key={invoice.id}>
          <td>{createdDate.format('DD-MM-YYYY')}</td>
          <td className="invoice-number">INV-{invoice.number}</td>
          <td>{supplyDate.format('DD-MM-YYYY')}</td>
          <td>{invoice.comment}</td>
        </tr>
      );
    });

    return (
      <section className="invoices-table section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-content">
                <h5 className="section-title">Invoices</h5>
                {tableRows.length > 0 ? (
                  <table className="invoices-table">
                    <thead>
                      <tr>
                        <th>Create</th>
                        <th>No</th>
                        <th>Supply</th>
                        <th>Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows}
                    </tbody>
                  </table>
                )
                : 'No invoices'
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InvoicesTable;
