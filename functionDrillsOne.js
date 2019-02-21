function getYearOfBirth(age){
    if (age < 0) {
        throw new Error ('Age can not be negative');
    }
    return 2019-age;
}

function createGreeting(name,age) {
    if (name === undefined || age === undefined) {
        throw new Error ('Arguments not valid');
    }

    if (typeof name !== "string" ||typeof age !=='number') {
        throw new TypeError ('name must be a string. age must be a number.');
    }
    
    return `Hi, my name is ${name} and I am ${age} years old.`;
}

try {
    const greeting1 = createGreeting();
    console.log(greetings1);
} catch(e) {
    console.error(e.message);
}

