import leader1 from "./../assets/images/leaders/kirill-balobanov-2rIs8OH5ng0-unsplash.jpg";
import leader2 from "./../assets/images/leaders/vidar-nordli-mathisen-_RWV-UinSUg-unsplash.jpg";
import leader3 from "./../assets/images/leaders/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg";
import leader4 from "./../assets/images/leaders/scott-rodgerson-ZLHBjxbCCEc-unsplash.jpg";

import logo from "./../assets/images/logo/logo.png";

const LEADERSHIP = [
    {
        image: leader1,
        name: 'Inigo Lopez',
        position: 'Superior General',
        email: 'inigo.lopez@jesuit.org',
        linkedIn: 'https://linkedIn.com/inigi.lopez',
        twitter: 'https://twitter.com/inigo',
        instagram: 'https://instagram.com/inogo'
    },
    {
        image: leader2,
        name: 'Adolfo Nicolás',
        position: 'Superior General',
        email: 'inigo.lopez@jesuit.org',
        linkedIn: 'https://linkedIn.com/adolfo.nocolas',
        twitter: 'https://twitter.com/adolfo',
        instagram: 'https://instagram.com/adolfo'
    },
    {
        image: leader3,
        name: 'Wlodimir Ledóchowski',
        position: 'Superior General',
        email: 'inigo.lopez@jesuit.org',
        linkedIn: 'https://linkedIn.com/wlodimir.ledóchowski',
        twitter: 'https://twitter.com/wlodimir',
        instagram: 'https://instagram.com/wlodimir'
    },
    {
        image: leader4,
        name: 'Arturo Sosa',
        position: 'Superior General',
        email: 'arturo.sosa@jesuit.org',
        linkedIn: 'https://linkedIn.com/arturo.sosa',
        twitter: 'https://twitter.com/arturo',
        instagram: 'https://instagram.com/arturo'
    },
];

const HELP_TOPICS = [
    {
        icon: logo,
        title: 'Overview',
        description: 'Learn more about Tribute and what is the purpose of our platform.',
        link: '/about'
    },
    {
        icon: logo,
        title: 'Account Settings',
        description: 'Learn how to adjust account settings, learn about changing profile details, and more.',
        link: '/account-settings'
    },
    {
        icon: logo,
        title: 'Login & Password',
        description: 'Learn how to fix login issues and how to change or reset your password at Tribute.',
        link: '/login-and-password'
    },
    {
        icon: logo,
        title: 'Privacy & Security',
        description: 'Control who can see your account details and what you share.',
        link: '/privacy-and-security'
    },
    {
        icon: logo,
        title: 'Tribute Medallions',
        description: 'Learn what Tribute Medallions are and how to use them.',
        link: '/medallion/overview'
    }
]

const FEATURES = [
    {
        image: logo,
        name: 'Personalize Lifeline',
        description: 'Every profile has a lifeline that keeps track of important posts and updates. Visitors will be able to scroll through recent posts.',
    },
    {
        image: logo,
        name: 'Share Important Moments',
        description: 'Tribute encourages users to post life’s important moments. (pictures, videos, audio, documents, etc.)',
    },
    {
        image: logo,
        name: 'Add Biography Info',
        description: 'Every profile has a Biography page. Users can enter key information and give users a quick insight into who the person was.',
    },
    {
        image: logo,
        name: 'Write Tributes',
        description: 'Touched by someone’s profile? Write tributes on profiles when you visit them or when you scan the QR code from a Medallion.',
    },
    {
        image: logo,
        name: 'View Beautiful Stories',
        description: 'Read and watch beautiful stories shared by others and learn more about their lives. Every story is different and deserves to be seen and heard.',
    },
    {
        image: logo,
        name: 'Send Private Messages',
        description: 'Users are able send messages to other profiles to ask questions about being possible relatives and other genealogy purposes.',
    },
    {
        image: logo,
        name: 'Write Own Journal',
        description: 'Each profile has a journal feature so members can experience the joy that journaling can bring to their lives.',
    },
    {
        image: logo,
        name: 'Share Documents',
        description: 'Scan and Upload important documents to a profiles document page for visitors to see.',
    },

    {
        image: logo,
        name: 'Tag Family and Friends',
        description: 'Users have the ability to tag family and friends in their posts by using “@First Name & Last Name”',
    },
    {
        image: logo,
        name: 'Get Live Notifications',
        description: 'Our platform alerts users in real time anytime an action is performed or a message is sent.',
    },
    {
        image: logo,
        name: 'Set Privacy Filters',
        description: 'Tribute respects privacy. Every user can pick through a variety of privacy filters for their post.',
    },
    {
        image: logo,
        name: 'Upload Media to Own Gallery',
        description: 'Tribute allows users to create albums and portfolios for media. This makes navigation much more seamless.',
    },
    {
        image: logo,
        name: 'Interact with Profiles',
        description: 'Once you have created an account in Tribute, you can interact with profiles in multiple ways.',
    },

    {
        image: logo,
        name: 'Share Common Memories',
        description: 'If you have common memories with a family member or friend, you can share them at our platform.',
    }
]


const MEDALLION_FEATURES = [
    {
        image: logo,
        name: 'Highest Quality Materials',
        description: 'Our economic line uses 316L stainless steel and our most durable Porcelain tiles uses Italian Porcelain.',
    },
    {
        image: logo,
        name: 'Engraved QR Codes',
        description: 'All QR Codes are laser engraved to the Tribute Medallions.',
    },
    {
        image: logo,
        name: 'Adhesive',
        description: 'We use high strength adhesives on our medallions to ensure a secure bond to the headstone.'
    },
    {
        image: logo,
        name: 'Easy to Install',
        description: 'Tribute Medallions are user friendly and easily applied in seconds'
    },
    {
        image: logo,
        name: 'Color Options',
        description: 'We currently offer only one color (stainless steel) option for Medallions.',
    },
    {
        image: logo,
        name: 'Warranty',
        description: 'We warranty our medallions and will replace any damaged or weathered medallions at cost.',
    },
    {
        image: logo,
        name: 'Unlimited Stories',
        description: 'Share as many stories and memories to your lifeline as you want to.'
    },
    {
        image: logo,
        name: 'Unlimited Media Files',
        description: 'Share unlimited amount of images and videos to your personalized profile.'
    },
    {
        image: logo,
        name: 'Unlimited Direct Links',
        description: 'Place as many direct links to profile details as you want to. The more information the better.'
    },
    {
        image: logo,
        name: 'Full Privacy Control',
        description: 'Account owner will have full privacy control for everything that is shared.'
    },
    {
        image: logo,
        name: 'One Time Purchase',
        description: 'We do not have any maintenance fees – You only pay for the Medallion and shipping.'
    },
    {
        image: logo,
        name: 'Free Technical Support',
        description: 'We offer free technical support to all users that have purchased a medallion.'
    }
]

const FAQ = [
    {
        question: 'Can I purchase a Tribute Medallion for personal profile?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'Do I need to activate the Tribute Medallion?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: "I don't want to order a Tribute Medallion, can I still use Tribute?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'Where is the QR Code connected at my Medallion?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'How many profiles can be connected to one Tribute Medallion?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'What is the material of Tribute Medallions?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        question: 'Can I see my purchase history of purchased Tribute Medallions?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]

export const TRIBUTE_DATA = {LEADERSHIP, HELP_TOPICS, FEATURES, FAQ, MEDALLION_FEATURES};
