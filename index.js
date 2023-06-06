const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Spicy Chicken Pasta",
        category: "dinner",
        price: 12.99,
        img: "./images/item-dinner-1.jpg",
        desc: "Delicious and flavorful pasta dish with tender chicken pieces and a spicy sauce. Perfect for a satisfying dinner."
    },
    {
        id: 11,
        title: "Grilled Salmon with Vegetables",
        category: "dinner",
        price: 19.99,
        img: "./images/item-dinner-2.jpg",
        desc: "Freshly grilled salmon fillet served with a side of roasted vegetables. A healthy and tasty option for a nutritious dinner."
    },
    {
        id: 12,
        title: "Steak with Mashed Potatoes",
        category: "dinner",
        price: 24.99,
        img: "./images/item-12.jpg",
        desc: "Juicy grilled steak served with creamy mashed potatoes. A classic and satisfying dinner option."
    },
    {
        id: 13,
        title: "Vegetarian Sushi Roll Platter",
        category: "dinner",
        price: 15.99,
        img: "./images/item-13.jpg",
        desc: "Assorted vegetarian sushi rolls featuring fresh and colorful ingredients. A delightful option for a vegetarian dinner."
    }, {
        id: 14,
        title: "Chocolate Banana Shake",
        category: "shakes",
        price: 9.99,
        img: "./images/item-14.jpg",
        desc: "Indulge in a creamy chocolate banana shake made with ripe bananas and rich chocolate. A delightful treat for shake lovers."
    }, {
        id: 15,
        title: "Strawberry Milkshake",
        category: "shakes",
        price: 8.99,
        img: "./images/item-15.jpg",
        desc: "Savor the refreshing taste of a classic strawberry milkshake. Made with fresh strawberries and creamy milk for a perfect blend."
    }, {
        id: 16,
        title: "Avocado Toast",
        category: "breakfast",
        price: 9.99,
        img: "./images/item-16.jpg",
        desc: "Start your day with a healthy and delicious avocado toast. Topped with fresh avocado slices and optional add-ons for extra flavor."
    }, {
        id: 17,
        title: "Blueberry Pancakes",
        category: "breakfast",
        price: 11.99,
        img: "./images/item-17.jpg",
        desc: "Enjoy a stack of fluffy blueberry pancakes drizzled with maple syrup. Bursting with juicy blueberries for a delightful breakfast."
    }, {
        id: 18,
        title: "Chicken Caesar Salad",
        category: "lunch",
        price: 12.99,
        img: "./images/item-18.jpg",
        desc: "Savor a refreshing and satisfying Chicken Caesar Salad with crisp romaine lettuce, grilled chicken, parmesan cheese, and Caesar dressing."
    }, {
        id: 19,
        title: "Margherita Pizza",
        category: "lunch",
        price: 14.99,
        img: "./images/item-19.jpg",
        desc: "Delight in a classic Margherita Pizza topped with fresh tomatoes, mozzarella cheese, and aromatic basil leaves. A lunchtime favorite."
    }, {
        id: 20,
        title: "Grilled Salmon with Quinoa Salad",
        category: "lunch",
        price: 16.99,
        img: "./images/item-20.jpg",
        desc: "Enjoy a perfectly grilled salmon fillet served with a flavorful quinoa salad."
    }
];
const menuSection = document.querySelector(".menu-list");

let menuType = "all";

function displayMenu() {
    let menuList = menu.map((item) => {
        if (menuType === "all") {
            return `<div class="item">
            <img src="${item.img}" alt="${item.title}">
            <div class="item-info">
                <div class="item-header">
                    <h3>${item.title}</h3>
                    <span class="price">$${item.price}</span>
                </div>
                <hr>
                <div class="item-text">
                    <p class="text">${item.desc}</p>
                </div>
            </div>
        </div>`
        } else {
            if (menuType === item.category) {
                return `<div class="item">
            <img src="${item.img}" alt="${item.title}">
            <div class="item-info">
                <div class="item-header">
                    <h3>${item.title}</h3>
                    <span class="price">$${item.price}</span>
                </div>
                <hr>
                <div class="item-text">
                    <p class="text">${item.desc}</p>
                </div>
            </div>
        </div>`
            }
        }
    });
    menuList = menuList.join('');
    menuSection.innerHTML = menuList;
}
displayMenu();
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        menuType = e.target.classList[1];
        displayMenu();
        buttons.forEach((button) => {
            button.classList.remove("active");
        });
        e.target.classList.add("active");
    })
})