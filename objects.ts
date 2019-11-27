const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// Object destructure
const { age }: { age: number } = profile;
console.log(`age: ${age}`);

const { coords: { lat, lng } }: 
{ coords: { lat: number; lng: number} } = profile;
console.log(`lat: ${lat} and lng: ${lng}`);