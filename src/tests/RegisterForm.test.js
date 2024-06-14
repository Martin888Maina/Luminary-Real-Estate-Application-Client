import fs from 'fs';
import path from 'path'; // Import the 'path' module

describe('RegisterForm code', () => {
  test('contains necessary keywords', () => {
    const filePath = path.join(__dirname, '../components/RegisterForm.js'); // Construct the correct file path
    const code = fs.readFileSync(filePath, 'utf8'); // Read the file content

    expect(code).toContain('email');
    expect(code).toContain('password');
    expect(code).toContain('confirmPassword');
    expect(code).toContain('handleChange');
    expect(code).toContain('isValidEmail');
    expect(code).toContain('toggleShowPassword');
    expect(code).toContain('toggleShowConfirmPassword');
    expect(code).toContain('submitRegister');
  });
});
