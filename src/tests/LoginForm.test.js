import fs from 'fs';
import path from 'path'; // Import the 'path' module

describe('LoginForm code', () => {
  test('contains necessary keywords', () => {
    const filePath = path.join(__dirname, '../components/LoginForm.js'); // Construct the correct file path
    const code = fs.readFileSync(filePath, 'utf8'); // Read the file content

    expect(code).toContain('email');
    expect(code).toContain('password');
    expect(code).toContain('handleChange');
    expect(code).toContain('isValidEmail');
    expect(code).toContain('toggleShowPassword');
    expect(code).toContain('submitLogin');
  });
});