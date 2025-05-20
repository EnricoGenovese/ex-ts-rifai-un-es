type Chef = {
    id: number,
    firstName: string,
    lastName: string,
    maidenName?: string,
    age: number,
    gender: 'male' | 'female',
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    ip: string,
    address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {
            lat: number,
            lng: number
        }
        country: string,
    },
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        department: string,
        name: string,
        title: string
        address: {
            address: string,
            city: string,
            state: string,
            stateCode: string,
            postalCode: string,
            coordinates: {
                lat: number,
                lng: number,
            },
            country: string
        }
    },
    ein: string,
    ssn: string
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string
    },
    role: string
};

type Recipe = {
    id: number,
    name: string,
    ingridients: string[],
    instrucntions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    serving: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

export type { Chef, Recipe };
