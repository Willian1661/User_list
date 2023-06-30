interface User {
    id: Number
    name: String
    username: String
    email: String
    address: {
        street: String
        suite: String
        city: String
        zipcode: Number
        geo: {
            lat: Number
            lng: Number
        }
    }
    phone: String
    website: String
    company: {
        name: String
        catchPhrase: String
        bs: String
    }
};

export default User