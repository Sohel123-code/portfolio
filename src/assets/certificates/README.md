# Certificates Folder

This folder is for storing your certificate PDF files.

## How to Add Certificates

1. Place your PDF certificate files in this folder (`src/assets/certificates/`)

2. Import the PDF at the top of `src/pages/Certificates.jsx`:
```javascript
import cert1 from '../assets/certificates/your-certificate.pdf';
```

3. Update the `certificates` array in `src/pages/Certificates.jsx` with your certificate information:

```javascript
const certificates = [
  {
    id: 1,
    title: 'Your Certificate Name',
    issuer: 'Issuing Organization',
    date: 'January 2024',
    pdfPath: cert1, // Use the imported PDF variable
    description: 'Optional description of the certificate',
  },
  // Add more certificates here...
];
```

## Example

If you have a file named `react-certificate.pdf` in this folder:

1. First, import it:
```javascript
import reactCert from '../assets/certificates/react-certificate.pdf';
```

2. Then add it to the certificates array:
```javascript
{
  id: 1,
  title: 'React Developer Certificate',
  issuer: 'Online Course Platform',
  date: 'December 2023',
  pdfPath: reactCert, // Use the imported variable
  description: 'Completed comprehensive React course',
}
```

## Alternative: Using Public Folder

Alternatively, you can place PDFs in the `public/certificates/` folder and reference them as:
```javascript
pdfPath: '/certificates/your-certificate.pdf'
```

This approach doesn't require imports but the files won't be processed by Vite.
