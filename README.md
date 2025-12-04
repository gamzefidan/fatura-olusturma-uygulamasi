# INVOICE GENERATION APPLICATION

- This project is a web application that allows users to easily create invoices, edit invoice details, and export them as PDF files.

- Users can store the created invoices in localStorage and view them later.

- The project features a clean and modern interface designed based on a Figma prototype and styled with CSS.

# HIGHLIGHTED FEATURES

- Enter invoice details (company name, product, quantity, price, VAT, etc.)

- Automatic calculation of totals and VAT

- ownload invoices as PDF

- Save invoice history in localStorage

- Modern and responsive design

# TECHNOLOGIES USED

- React.js

- jsPDF

- jspdf-autotable

- CSS3

- JavaScript (ES6)

- Figma (for UI design)

# INSTALLATION

1. Clone the repository

```bash
git clone https://github.com/gamzefidan/fatura-olusturma-uygulamasi.git
```

2. Navigate to the project folder

```bash
cd fatura-olusturma-uygulamasi
```

3. Install dependencies

```bash
npm install
```

4. Run the project

```bash
npm start
```

# USAGE

1. Add an Invoice

- Fill in fields such as company name, product details, quantity, unit price, VAT rate, and date.

- Click the “Add Invoice” button to add the invoice to the list.

2. Delete an Invoice

- Click the “Delete” button next to any invoice to remove it from the list.

3. Clear All Invoices

- Click the “Clear All” button to delete all invoices at once.

4. Download as PDF

- Click the “Download PDF” button to export all invoices as a table-formatted PDF file.

# DATA STORAGE (LOCALSTORAGE)

- The application stores all invoice data created by the user in the browser’s localStorage.
- This ensures that data is not lost when the page is refreshed or the browser is closed and reopened.
- You can reset all stored data by clicking the “Clear All” button.

# PDF GENERATION FEATURE

- The PDF export functionality is implemented using jsPDF and jspdf-autotable libraries.
- The generated PDF includes a tabular summary of all created invoices.

# SCREENSHOTS

![Home Page](./public/home-page.png)
![Invoice List](./public/invoice-list.png)
![PDF View](./public/pdf-view.png)
