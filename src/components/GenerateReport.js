import jsPDF from 'jspdf';

const GenerateReport = {
  generatePDF: (listing) => {
    const doc = new jsPDF();

    // Add background color to the title
    doc.setFillColor('#4CAF50');
    doc.setTextColor('#FFFFFF');
    doc.setFontSize(20);
    doc.rect(0, 0, 210, 20, 'F');
    doc.text('Listing Report', 105, 15, { align: 'center' });

    // Format dates
    const startDate = new Date(listing.startDate).toLocaleDateString();
    const endDate = new Date(listing.endDate).toLocaleDateString();

    // Add listing information to the PDF
    doc.setTextColor('#000000');
    doc.setFontSize(12);
    doc.text(`Location: ${listing.location}`, 20, 40);
    doc.text(`Listing ID: ${listing.combine_id}`, 20, 50);
    doc.text(`Start Date: ${startDate}`, 20, 60);
    doc.text(`End Date: ${endDate}`, 20, 70);
    doc.text(`Amount: ${listing.amount}`, 20, 80);
    doc.text(`Category: ${listing.category}`, 20, 90);

    // Add shadow effect to the image
    if (listing.file_url) {
      const img = new Image();
      img.src = listing.file_url;
      img.crossOrigin = 'Anonymous'; // Enable cross-origin request if needed
      img.onload = function () {
        const imgData = this;
        const aspectRatio = imgData.width / imgData.height;
        const width = 100; // Adjust width as needed
        const height = width / aspectRatio;

        // Add shadow effect
        doc.setFillColor(0, 0, 0, 0.2); // Black color with opacity
        doc.roundedRect(15, 100, width, height, 3, 3, 'F'); // Rounded rectangle with shadow
        doc.addImage(imgData, 'JPEG', 15, 100, width, height); // Adjust the coordinates and dimensions as needed

        doc.save('listing report.pdf');
      };
    } else {
      // Save the PDF without the image if file_url is not provided
      doc.save('listing report.pdf');
    }
  }
};

export default GenerateReport;




