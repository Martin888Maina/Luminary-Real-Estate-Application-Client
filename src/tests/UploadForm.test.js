import fs from 'fs';
import path from 'path'; // Import the 'path' module


describe('UploadForm code', () => {
  test('contains necessary keywords', () => {
    const filePath = path.join(__dirname, '../components/Owner/UploadForm.js'); // Construct the correct file path
    const code = fs.readFileSync(filePath, 'utf8'); // Read the file content

    expect(code).toContain('location');
    expect(code).toContain('startDate');
    expect(code).toContain('endDate');
    expect(code).toContain('amount');
    expect(code).toContain('image');
    expect(code).toContain('category');
    expect(code).toContain('picture');
    expect(code).toContain('document');
  });
});
