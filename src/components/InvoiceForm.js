import React, { useState } from "react";

function InvoiceForm({ onAddInvoice }) {
  const [companyName, setCompanyName] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [amount, setAmount] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [validUntil, setValidUntil] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      companyName === "" ||
      productInfo === "" ||
      amount === "" ||
      unitPrice === ""
    ) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    const newInvoice = {
      companyName,
      productInfo,
      amount,
      unitPrice,
      taxRate,
      invoiceDate,
      validUntil,
    };

    onAddInvoice(newInvoice);

    setCompanyName("");
    setProductInfo("");
    setAmount("");
    setUnitPrice("");
    setTaxRate("");
    setInvoiceDate("");
    setValidUntil("");
  };

  return (
    <form className="invoice-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div>
          <label className="form-label">Firma Adı:</label>
          <input
            className="form-input"
            type="text"
            name="CompanyName"
            placeholder="Firma Adını Giriniz"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Ürün Bilgisi:</label>
          <input
            className="form-input"
            type="text"
            name="ProductInfo"
            value={productInfo}
            placeholder="Ürün veya Hizmet Adını Giriniz"
            onChange={(e) => setProductInfo(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label className="form-label">Miktar:</label>
          <input
            className="form-input"
            type="number"
            name="Amount"
            value={amount}
            placeholder="Miktar Giriniz"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Birim Fiyat:</label>
          <input
            className="form-input"
            type="number"
            name="UnitPrice"
            value={unitPrice}
            placeholder="Birim Fiyat Giriniz"
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label className="form-label">KDV:</label>
          <input
            className="form-input"
            type="number"
            name="TaxRate"
            value={taxRate}
            placeholder="Vergi oranını giriniz: örneğin %20"
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Geçerlilik Tarihi:</label>
          <input
            className="form-input"
            type="date"
            name="ValidUntil"
            value={validUntil}
            onChange={(e) => setValidUntil(e.target.value)}
          />
          <div className="form-row">
            <div>
              <label className="form-label">Fatura Tarihi:</label>
              <input
                className="form-input"
                type="date"
                name="InvoiceDate"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default InvoiceForm;
