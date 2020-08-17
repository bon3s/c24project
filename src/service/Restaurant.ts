export default class Restaurant {
    static fromJSON(maybe: any) {
        if (!maybe) {
            throw new Error('Restaurant should be an object');
        }
        if (typeof maybe.name !== 'string') {
            throw new Error('Name should be a string');
        }

        if (typeof maybe.rating !== 'number') {
            throw new Error('Name should be a number');
        }

        if (typeof maybe.street !== 'string') {
            throw new Error('Street should be a string');
        }

        if (typeof maybe.zip !== 'string') {
            throw new Error('Zip should be a string');
        }

        if (typeof maybe.city !== 'string') {
            throw new Error('City should be a string');
        }

        if (typeof maybe.website !== 'string') {
            throw new Error('Website should be a string');
        }

        if (typeof maybe.burger_classic !== 'string') {
            throw new Error('Burger_classic should be a string');
        }

        if (typeof maybe.burger_cheese !== 'string') {
            throw new Error('Burger_cheese should be a string');
        }

        if (typeof maybe.burger_bio !== 'string') {
            throw new Error('Burger_bio should be a string');
        }

        return new Restaurant(
            maybe.name,
            maybe.rating,
            maybe.street,
            maybe.zip,
            maybe.city,
            maybe.website,
            maybe.burger_classic,
            maybe.burger_cheese,
            maybe.burger_bio
        );
    }

    name: string;
    rating: number;
    street: string;
    zip: number;
    city: string;
    website: string;
    burgerClassic: string;
    burgerCheese: string;
    burgerBio: string;

    constructor(
        name: string,
        rating: number,
        street: string,
        zip: number,
        city: string,
        website: string,
        burgerClassic: string,
        burgerCheese: string,
        burgerBio: string
    ) {
        this.name = name;
        this.rating = rating;
        this.street = street;
        this.zip = zip;
        this.city = city;
        this.website = website;
        this.burgerClassic = burgerClassic;
        this.burgerCheese = burgerCheese;
        this.burgerBio = burgerBio;
    }
}
