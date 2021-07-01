// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(data => data.toLowerCase() == name.toLowerCase());
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(data => data.substring(0, name.length) == name);
}

const matchName = (drivers, string) => {
    return drivers.filter(key => key.name === string)
}