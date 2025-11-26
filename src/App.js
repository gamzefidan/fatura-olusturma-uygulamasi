import React, { useState, useEffect } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceList from "./components/InvoiceList";
import "./styles/App.css";

function App() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    localStorage.getItem("invoices") &&
      setInvoices(JSON.parse(localStorage.getItem("invoices")));
  }, []);

  const handleAddInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleDeleteInvoice = (index) => {
    const updated = invoices.filter((_, i) => i !== index);
    setInvoices(updated);
  };
  const handleClearAll = () => {
    setInvoices([]);
    localStorage.removeItem("invoices");
  };

  return (
    <div className="App">
      <div className="invoice-container">
        <h2>FATURA OLUŞTUR</h2>

        <div className="form-section">
          <InvoiceForm onAddInvoice={handleAddInvoice} />
        </div>

        <div className="table-section">
          <InvoiceList
            invoices={invoices}
            onDeleteInvoice={handleDeleteInvoice}
            onClearAll={handleClearAll}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
