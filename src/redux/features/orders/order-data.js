import gallery4 from "../../../assets/images/products/Reading-Turning-Hearts-Stories.jpeg";
import gallery1 from "../../../assets/images/products/Porcelain_Medallion.png";
import medallion from "../../../assets/images/products/Porcelain_Medallion.png";
import gallery2 from "../../../assets/images/products/IMG-20220314-WA0051-1.jpg";
import gallery3 from "../../../assets/images/products/IMG-20220314-WA0058-1.jpg";

export const orders = [
    {
        createdAt: new Date(2022, 2, 25),
        updatedAt: new Date(2022, 2, 25),
        _id: 1,
        status: 'pending',
        user: {
            firstName: 'Count Vladislaus',
            lastName: 'Dracula',
            email: 'dracular@v-empire.org',
            phone: '+233270048319',
        },
        tracking: 'VZDIF4DGB1',
        items: [
            {
                item: {
                    _id: 1,
                    image: gallery4,
                    description: 'A Tributes Medallion is a scannable medallion intended to be placed on the headstone on of an ancestor or loved one. Anyone who visits can scan the QR code engraved on the medallion with their phone and it will connect them to the profile created for that person.',
                    name: 'Tributes (Porcelain)',
                    gallery: [gallery1, gallery2, gallery3, gallery4, medallion],
                    price: {
                        amount: 199.95,
                        currency: 'USD'
                    },
                    rating: {
                        average: 4.4,
                        count: 1500,
                        details: {
                            'five': 50,
                            'four': 30,
                            'three': 10,
                            'two': 7,
                            'one': 3
                        }
                    },
                },
                quantity: 2,
                subtotal: {
                    amount: 199.95 * 2,
                    currency: 'USD'
                }
            },
            {
                item: {
                    _id: 2,
                    image: gallery3,
                    description: 'A Tributes Medallion is a scannable medallion intended to be placed on the headstone on of an ancestor or loved one. Anyone who visits can scan the QR code engraved on the medallion with their phone and it will connect them to the profile created for that person.',
                    name: 'Tributes Medallion (Steel)',
                    gallery: [gallery1, gallery2, gallery3, gallery4, medallion],
                    price: {
                        amount: 149.95,
                        currency: 'USD'
                    },
                    rating: {
                        average: 4.4,
                        count: 1500,
                        5: {
                            count: 100,
                            percentage: 100 / 1500 * 100
                        }
                    },
                    sale: {
                        status: true,
                        price: {
                            amount: 99.95,
                            currency: 'USD'
                        }
                    },
                },
                quantity: 1,
                subtotal: {
                    amount: 99.95
                }
            }
        ],
        price: {
            amount: 50 + 10 + (199.95 * 2) + 99.95,
            currency: 'USD'
        },
        shipping: {
            amount: 50,
            currency: 'USD'
        },
        tax: {
            amount: 10,
            currency: 'USD'
        },
        recipient: {
            firstName: 'Count Vladislaus',
            lastName: 'Dracula',
            email: 'dracular@v-empire.org',
            phone: '+233270048319',
        },
        address: {
            country: 'Ghana',
            stateOrProvinceOrRegion: 'Greater Accra',
            city: 'Accra',
            zipCode: '00233',
            addressLine1: 'Atakorah Estates 2',
            addressLine2: 'Ashogman Estates'
        }
    }
];
