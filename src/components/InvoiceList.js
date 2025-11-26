import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";

function InvoiceList({ invoices, onDeleteInvoice, onClearAll }) {
  const total = invoices.reduce((sum, item) => sum + Number(item.unitPrice), 0);

  const grandtotal = invoices.reduce((sum, item) => {
    const subtotal = item.amount * item.unitPrice;
    const taxAmount = subtotal * (item.taxRate / 100);
    return sum + subtotal + taxAmount;
  }, 0);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Fatura Listesi", 14, 10);

    const tableColumn = [
      "Firma Adi",
      "Ürün Bilgisi",
      "Miktar",
      "Fatura Tarihi",
      "Birim Fiyat",
      "KDV",
      "Toplam",
      "Geçerlilik Tarihi",
    ];

    const tableRows = invoices.map((invoice) => {
      const subtotal = invoice.amount * invoice.unitPrice;
      const taxAmount = subtotal * (invoice.taxRate / 100);
      const totalWithTax = subtotal + taxAmount;

      return [
        invoice.companyName,
        invoice.productInfo,
        invoice.amount,
        invoice.invoiceDate
          ? new Date(invoice.invoiceDate).toLocaleDateString("tr-TR")
          : "",

        invoice.unitPrice.toLocaleString("tr-TR", {
          style: "currency",
          currency: "TRY",
        }),
        `${invoice.taxRate}%`,
        `${totalWithTax.toFixed(2)} TL`,
        invoice.validUntil
          ? new Date(invoice.validUntil).toLocaleDateString("tr-TR")
          : "",
      ];
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { font: "helvetica", fontSize: 12 },
    });

    doc.save("fatura_listesi.pdf");
  };

  return (
    <div>
      <h3>Fatura Listesi</h3>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead style={{ background: "#2563EB", color: "white" }}>
          <tr>
            <th>Firma Adı</th>
            <th>Ürün Bilgisi</th>
            <th>Miktar</th>
            <th>Fatura Tarihi</th>
            <th>Birim Fiyat</th>
            <th>KDV</th>
            <th>Toplam</th>
            <th>Geçerlilik Tarihi</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => {
            const subtotal = invoice.amount * invoice.unitPrice;
            const taxAmount = subtotal * (invoice.taxRate / 100);
            const totalWithTax = subtotal + taxAmount;

            return (
              <tr key={index}>
                <td>{invoice.companyName}</td>
                <td>{invoice.productInfo}</td>
                <td>{invoice.amount}</td>
                <td>
                  {invoice.invoiceDate
                    ? new Date(invoice.invoiceDate).toLocaleDateString("tr-TR")
                    : ""}
                </td>

                <td>{invoice.unitPrice}</td>
                <td>{invoice.taxRate}%</td>
                <td>
                  {totalWithTax.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </td>
                <td>
                  {invoice.validUntil
                    ? new Date(invoice.validUntil).toLocaleDateString("tr-TR")
                    : ""}
                </td>
                <td>
                  <button onClick={() => onDeleteInvoice(index)}>Sil</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="button-group">
        <button
          className="form-button"
          onClick={() => document.querySelector("form").requestSubmit()}
        >
          Ekle
        </button>
        <button onClick={handleExportPDF}>PDF Olarak İndir</button>
        <button onClick={onClearAll}>Tümünü Sil</button>
      </div>
    </div>
  );
}

export default InvoiceList;
