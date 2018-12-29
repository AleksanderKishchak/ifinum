import React, { Component, Suspense, lazy } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.sass';
import InvoicesPage from './pages/InvoicesPage';
import data from './data/db.json';
const CreateInvoice = lazy(() => import('./pages/CreateInvoicePage'));

const invoices = data.invoices;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invoices: []
    };
  }

  componentDidMount() {
    this.fetchInvoices();
  }

  fetchInvoices = () => {
    this.setState({
      invoices
    });
  };

  addInvoice = invoice => {
    this.setState(({ invoices }) => ({
      invoices: [...invoices, invoice]
    }));
  };

  render() {
    const { invoices } = this.state;

    return (
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" render={() => <InvoicesPage invoices={invoices} />} />
          <Route
            path="/create"
            render={props => <CreateInvoice {...props} addInvoice={this.addInvoice} />}
          />
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);
