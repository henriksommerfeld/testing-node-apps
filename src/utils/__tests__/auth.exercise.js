import cases from 'jest-in-case'
import {isPasswordAllowed} from '../auth'

function toCases(testObjects) {
    return Object.entries(testObjects).map(([name, value]) => ({
        name: `${value} - ${name}`,
        value,
      }))
}

cases('isPasswordAllowed - valid passwords', 
    ({value}) => {
        expect(isPasswordAllowed(value)).toBe(true);
    },
    toCases({'Is valid': '!aBc123'})
)

cases('isPasswordAllowed - invalid passwords', 
    ({value}) => {
        expect(isPasswordAllowed(value)).toBe(false);
    },
    toCases({
        'Too short': 'a2c!',
        'No alphabet characters': '123456!',
        'No numbers': 'ABCdef!',
        'No uppercase letters': 'abc123!',
        'No lowercase letters': 'ABC123!',
        'No non-alphanumeric characters': 'ABCdef123'
    })
)
