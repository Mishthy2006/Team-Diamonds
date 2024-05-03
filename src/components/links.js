import { diamondshopnow ,finejewelryshopnow } from "../assets/index";
import diamonddesign from '../assets/diamonddesign.webp';
import image1 from '../assets/Brands/1.webp';
import image2 from '../assets/Brands/2.webp';
import image3 from '../assets/Brands/3.webp';
import image4 from '../assets/Brands/4.webp';
import image5 from '../assets/Brands/5.webp';
export const data = [
  {
    label: "DIAMONDS",
    key: "DIAMONDS",
    margins:'-160px',
    index:'0',
    children: [
      {
        label: "CREATE YOUR ENGAGEMENT RING",
        key: "CREATE YOUR ENGAGEMENT RING",
        links: [
          { label: "Start with a Natural Diamond", to: "/naturaldiamond" },
          { label: "Start with a Lab Grown Diamond", to: "/labgrowndiamond" },

        ]
      },
      {
        label: "CUSTOMIZE YOUR ENGAGEMENT RING",
        key: "CUSTOMIZE YOUR ENGAGEMENT RING",
        margins:'-200px',
        links: [
          { label: "Diamonds Direct 3D Ring Studio", to: "#" }
        ]
      },
      {
        label: "PRESET ENGAGEMENT RINGS",
        key: "PRESET ENGAGEMENT RINGS",
        links: [
          { label: "One of a Kind Engagement Rings", to: "#" },
          { label: "Ready to Wear Engagement Rings", to: "#" }
        ]
      },
     
    ],
    Children1: [
      {
        label: "Natural Diamonds",
        key: "Natural Diamonds",
        links: [
          { label: "Round", to: "/nd/round" },
          { label: "Pear", to: "/nd/pear" },
          { label: "Cushion", to: "/nd/cushion" },
          { label: "Emerald", to: "/nd/emerald" },
          { label: "Oval", to: "/nd/oval" },
          { label: "Marquise", to: "/nd/marquise" },
          { label: "Princess", to: "/nd/princess" },
          { label: "Heart", to: "/nd/heart" },
          { label: "Asscher", to: "/nd/asscher" },
          { label: "Radiant", to: "/nd/radiant" },
          { label: "Shop all", to: "/naturaldiamond" }
        ]
      }
    ],
    Children2: [
    {
      label: "Lab Grown Diamonds",
      key: "Lab Grown Diamonds",
      links: [
        { label: "Round", to: "/lg/round" },
        { label: "Pear", to: "/lg/pear" },
        { label: "Cushion", to: "/lg/cushion" },
        { label: "Emerald", to: "/lg/emerald" },
        { label: "Oval", to: "/lg/oval" },
        { label: "Marquise", to: "/lg/marquise" },
        { label: "Princess", to: "/lg/princess" },
        { label: "Heart", to: "/lg/heart" },
        { label: "Asscher", to: "/lg/asscher" },
        { label: "Radiant", to: "/lg/radiant" },
        { label: "Shop all", to: "/labgrowndiamond" }
      ]
    }
  ],
    Children3: [
      {
        label: "EDUCATION",
        key: "EDUCATION",
        links: [
          { label: "Diamond Education", to: "/diamondedu" },
          { label: "Lab Grown Diamond Education", to: "/labgrowndiamondedu" },
        ]
      }
  ],
    Children4: [
      {
        label: {diamondshopnow},
        key: 'diamondshopnow',
      }
  ]
  },
  {
    label: "ENGAGEMENT",
    key: "ENGAGEMENT",
    margins:"-160px",
    children: [
      {
        label: "CREATE YOUR ENGAGEMENT RING",
        key: "CREATE YOUR ENGAGEMENT RING",
        links: [
          { label: "Start with a Natural Diamond", to: "/naturaldiamond" },
          { label: "Start with a Lab Grown Diamond", to: "/labgrowndiamond" },
       
        ]
      },
      {
        label: "CUSTOMIZE YOUR ENGAGEMENT RING",
        key: "CUSTOMIZE YOUR ENGAGEMENT RING",
        links: [
          { label: "Diamonds Direct 3D Ring Studio", to: "#" }
        ]
      },
      {
        label: "PRESET ENGAGEMENT RINGS",
        key: "PRESET ENGAGEMENT RINGS",
        links: [
          { label: "One of a Kind Engagement Rings", to: "#" },
          { label: "Ready to Wear Engagement Rings", to: "#" }
        ]
      },
     
    ],
    Children2: [
      {
        label: "SETTINGS BY STYLE",
        key: "SETTINGS BY STYLE",
        links: [
          { label: "Solitaire", to: "/engsolitaire" },
          { label: "Halo", to: "/enghalo" },
          { label: "Diamond Accented", to: "/engdiamondaccented" },
          { label: "Three Stone", to: "/engthreestone" },
          { label: "Twist", to: "/engtwist" },
      
          
        ]
      }
    ],
    Children6: [
      {
        label: "SETTINGS BY FEATURED DESIGNERS",
        key: "SETTINGS BY FEATURED DESIGNERS",
        links: [
          { label: {image1}  },
          { label: {image2} },
          { label: {image3}},
          { label: {image4}},
          { label: {image5} },
        ]
      }
    ],
    Children5: [
      {
        label: "EDUCATION",
        key: "EDUCATION2",
        links: [
          { label: "Diamond Education", to: "/diamondedu" },
          { label: "Lab Grown Diamond Education", to: "/labgrowndiamondedu" },
        ]
      }
  ],
  },
  {
    label: "Wedding Bands",
    key: "Wedding Bands",
    margins:"-160px",
    children: [
      {
        label: "WOMEN'S BANDS",
        key: "WOMEN'S BANDS",
        links: [
          { label: "Essential", to: "#" },
          { label: "Diamond", to: "#" },
          { label: "Stackable", to: "#" },
          { label: "Eternity", to: "#" },
          { label: "Gemstone", to: "#" },
          { label: "Plain", to: "#" },
          { label: "Shop All", to: "#" },
        ]
      },
    ],
    Children1: [
      {
        label: "MEN'S BANDS",
        key: "MEN'S BANDS",
        links: [
          { label: "Diamond", to: "#" },
          { label: "Textured", to: "#" },
          { label: "Carved", to: "#" },
          { label: "Milgrain", to: "#" },
          { label: "Matte", to: "#" },
          { label: "Plain", to: "#" },
          { label: "Shop All", to: "#" },
        ]
      },
    ],
    Children6: [
      {
        label: "SETTINGS BY FEATURED DESIGNERS",
        key: "SETTINGS BY FEATURED DESIGNERS",
        links: [
          { label: {image1}  },
          { label: {image2} },
          { label: {image3}},
          { label: {image4}},
          { label: {image5} },
        ]
      }
    ],
  },
  { 
    label: "FINE JEWELRY",
    key: "FINE JEWELRY",
    margins:"-550px",
    children: [
      {
        label: "DIAMOND CLASSICS",
        key: "CREATE YOUR ENGAGEMENT RING",
        links: [
          { label: "Diamond Studs", to: "#" },
          { label: "Diamond Hoops", to: "#" },
          { label: "Diamond Necklaces & Pendants", to: "#" },
          { label: "Diamond Bracelets", to: "#" },
          { label: "Lab Grown Diamond Jewelery", to: "#" }
        ]
      },
     
    ],
    Children1: [
      {
        label: "WOMEN'S JEWELRY",
        key: "WOMEN'S JEWELRY",
        links: [
          { label: "Earrings", to: "#" },
          { label: "Necklaces & Pendants", to: "#" },
          { label: "Bracelets", to: "#" },
          { label: "Fashion Rings", to: "#" },
          { label: "SALE", to: "#" },
          { label: "Shop All", to: "#" },
        ]
      }
    ],
    Children2: [
    {
      label: "MEN'S JEWELRY",
      key: "MEN'S JEWELRY",
      links: [
        { label: "Bracelets", to: "#" },
        { label: "Chains", to: "#" },
        { label: "Pendants", to: "#" },
        { label: "Rings", to: "#" },
        { label: "Shop All", to: "#" },
      ]
    }
  ],
    Children3: [
      {
        label: "HIGH JEWELRY COLLECTION",
        key: "HIGH JEWELRY COLLECTION",
        links: [
          { label: "Earrings", to: "#" },
          { label: "Necklaces", to: "#" },
          { label: "Bracelets", to: "#" },
          { label: "Rings", to: "#" },
          { label: "Shop All", to: "#" },
        ]
      }
  ],
    Children4: [
      {
        label: {finejewelryshopnow},
        key: 'finejewelryshopnow',
      }
  ]
  },
  {
    label: "WATCHES",
    key: "WATCHES",
    margins:'-0px',
    children: [
      {
        label:"WATCHES",
        key: "WATCHES",
        links: [
          { label: "Men's Watches", to: "#" },
          { label: "Women's watches", to: "#" },
          { label: "Shop All", to: "#" }
        ]
      },
      
     
    ],
  },
  {
    label: "LEARN",
    key: "LEARN",
    margins:'-600px',
    children: [
      {
        label: "ABOUT US",
        key: "ABOUT US",
        links: [
          { label: "Our Story", to: "#" },
          { label: "Warranties & Guarantees", to: "#" },
          { label: "FAQ", to: "/faq" },
          { label: "Diamonds Direct Foundation", to: "#" },
          { label: "Blog", to: "#" },
          { label: "Careers", to: "#" },
        ]
      },
     
    ],
    Children2: [
      {
        label: "EDUCATION",
        key: "EDUCATION",
        links: [
          { label: "Diamond Education", to: "/diamondedu" },
          { label: "Lab Grown Diamond Education", to: "#" },
          { label: "Gemstone Education", to: "#" },
          { label: "Pearl Education", to: "#" },
          { label: "Metal Education", to: "#" },
          { label: "Our Designers", to: "#" },
          { label: "Diamonds Direct Custom Designs", to: "#" },
          { label: "The Diamonds Direct Promise", to: "#" },
          
        ]
      }
    ],
    Children3: [
      {
        label: "FINANCING",
        key: "FINANCING",
        links: [
          { label: "Diamonds Direct Special Financing", to: "#" },
          { label: "Affirm", to: "#" },
        ]
      }
    ],
    Children5: [
      {
        label: "CONTACT US",
        key: "CONTACT US",
        links: [
          { label: "Our Showrooms", to: "#" },
          { label: "Request An Appointment", to: "#" },
          { label: "Chat with an Expert", to: "#" }
        ]
      }
  ],
  },
  {
    label: "FINANCING",
    key: "FINANCING",
    margins:'-150px',
    children: [
      {
        label:'FINANCING',
        key: "FINANCING",
        links: [
          { label: "Diamonds Direct Special Financing", to: "#" },
          { label: "Affirm", to: "#" },
        ]
      },
      
     
    ],
  },
  {
    label: "LOCATIONS",
    key: "LOCATIONS",
    to:"/location",
   
  }
];
