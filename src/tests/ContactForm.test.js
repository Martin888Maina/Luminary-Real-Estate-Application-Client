import fs from 'fs';
import path from 'path'; // Import the 'path' module

describe('ContactForm code', () => {
  test('contains necessary keywords', () => {
    const filePath = path.join(__dirname, '../components/ContactForm.js'); // Construct the correct file path
    const code = fs.readFileSync(filePath, 'utf8'); // Read the file content

    expect(code).toContain('firstname');
    expect(code).toContain('lastname');
    expect(code).toContain('email');
    expect(code).toContain('telephone');
    expect(code).toContain('message');
  });
});
