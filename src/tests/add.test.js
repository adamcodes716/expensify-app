const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two number', () =>{ //first is description, second is function
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('generate greeting', () => {
    const result = generateGreeting('Adam');
    expect(result).toBe('Hello Adam');
});

test('generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});