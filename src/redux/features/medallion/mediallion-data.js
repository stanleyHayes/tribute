import medallion from "./../../../assets/images/products/Porcelain_Medallion.png";
import gallery1 from "./../../../assets/images/products/Porcelain_Medallion.png";
import gallery2 from "./../../../assets/images/products/IMG-20220314-WA0051-1.jpg";
import gallery3 from "./../../../assets/images/products/IMG-20220314-WA0058-1.jpg";
import gallery4 from "./../../../assets/images/products/Reading-Turning-Hearts-Stories.jpeg";

export const medallions = [
    {
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
        sale: {
            status: true,
            price: {
                amount: 179.99,
                currency: 'USD'
            }
        },
        stock: 10,
        details: [
            'This medallion QR code will link to the profile you are currently logged in as (Note: If you are purchasing a medallion without an account we will link medallion(s) to profile after creation. Instructions will be given via product package after receiving the product.)',
            'Imported Italian Porcelain',
            '2 inch x 2 inch',
            'Finish is baked on',
            'UV Resistance',
            'Weather Resistant',
            'Our most corrosion resistant Medallion',
            'Industry standard for murals on markers',
            '3M high strength adhesive applied to the back'
        ],
        instructions: [
            'Wash the desired area of application. (wet rag works fine)',
            'Let dry',
            'Once completely dry, peel off the protective layer of adhesive on the back',
            'Precisely place the medallion on the headstone or to desired area NOTE: adhesive is very strong and will likely only afford one try.',
            'Bond should form within hours of application'
        ],
        causes: [
            'We exist because billions of lives have been lived, each with an amazing story to tell. Tributes wants to make learning about those that have gone on a more intimate, informative, and life-changing experience.',
            'We want to help everyone feel more connected to those around us whether it’s in our local communities or our global family.'
        ],
        shipping: [
            'Shipping costs to United States are 10$.',
            'International shipping costs are 15$.',
            'We warranty our medallions and will replace any damaged or weathered medallions at cost.'
        ],
        benefits: [],
        relatedProducts: []
    },
    {
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
        stock: 10,
        details: [
            'This medallion QR code will link to the profile you are currently logged in as (Note: If you are purchasing a medallion without an account we will link medallion(s) to profile after creation. Instructions will be given via product package after receiving the product.)',
            'Imported Italian Porcelain',
            '2 inch x 2 inch',
            'Finish is baked on',
            'UV Resistance',
            'Weather Resistant',
            'Our most corrosion resistant Medallion',
            'Industry standard for murals on markers',
            '3M high strength adhesive applied to the back'
        ],
        instructions: [
            'Wash the desired area of application. (wet rag works fine)',
            'Let dry',
            'Once completely dry, peel off the protective layer of adhesive on the back',
            'Precisely place the medallion on the headstone or to desired area NOTE: adhesive is very strong and will likely only afford one try.',
            'Bond should form within hours of application'
        ],
        causes: [
            'We exist because billions of lives have been lived, each with an amazing story to tell. Tributes wants to make learning about those that have gone on a more intimate, informative, and life-changing experience.',
            'We want to help everyone feel more connected to those around us whether it’s in our local communities or our global family.'
        ],
        shipping: [
            'Shipping costs to United States are 10$.',
            'International shipping costs are 15$.',
            'We warranty our medallions and will replace any damaged or weathered medallions at cost.'
        ],
        benefits: [],
        relatedProducts: []
    },
]
