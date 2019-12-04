// Testing Pure Functions

// 🐨 import the function that we're testing
import {isPasswordAllowed} from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
test('valid password', ()=> {
    expect(isPasswordAllowed('!aBc123')).toBe(true)
})

//
// invalid:
const badPasswords = ['a2c!', '123456!', 'ABCdef!', 'abc123!', 'ABC123!', 'ABCdef123']
badPasswords.forEach(password => {
    test(`invalid: ${password}`, ()=> {
        expect(isPasswordAllowed(password)).toBe(false);
    });
});
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters
