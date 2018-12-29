import React, { Component } from 'react';
import { PageTitle } from '../components';
import moment from 'moment';
import uniqid from 'uniqid';

class CreateInvoicePage extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      number: '',
      invoiceDate: '',
      supplyDate: '',
      comment: ''
    };

    this.state = this.initialState;
  }

  onSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { number, comment, invoiceDate, supplyDate } = this.state;
    const formattedInvoiceDate = moment(invoiceDate, 'YYYY-MM-DD').format('DD MMMM YYYY');
    const formattedSupplyDate = moment(supplyDate, 'YYYY-MM-DD').format('DD MMMM YYYY');

    const newInvoice = {
      number,
      comment,
      date_created: formattedInvoiceDate,
      date_supply: formattedSupplyDate,
      id: uniqid()
    };

    this.props.addInvoice(newInvoice);
    this.setState(this.initialState);
    history.push('/');
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    console.log(this.initialState);
  };

  render() {
    const { number, comment, invoiceDate, supplyDate } = this.state;

    return (
      <div className="create-invoice-page page">
        <PageTitle title="Create Invoice" />
        <div className="container-fluid">
          <form className="invoice-creation-form" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Number:</label>
                  <input
                    value={number}
                    required
                    type="number"
                    className="form-control"
                    name="number"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Invoice Date</label>
                  <input
                    value={invoiceDate}
                    required
                    type="date"
                    className="form-control"
                    name="invoiceDate"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Supply Date</label>
                  <input
                    value={supplyDate}
                    required
                    type="date"
                    className="form-control"
                    name="supplyDate"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Comment</label>
                  <textarea
                    value={comment}
                    name="comment"
                    className="form-control"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row row justify-content-end">
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateInvoicePage;
