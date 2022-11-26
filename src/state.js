import { reactive } from 'vue'

export const state = reactive({
    mainNav: [
        {
            text: 'Home',
            href: `#`,
            active: true
        },
        {
            text: 'Shop',
            href: `#`,
            active: false
        },
        {
            text: 'About',
            href: `#`,
            active: false
        },
        {
            text: 'Blog',
            href: `#`,
            active: false
        },
        {
            text: 'Contact',
            href: `#`,
            active: false
        },
        {
            text: 'Show by brand',
            href: `#`,
            active: false
        },

    ],
    footerNav: [
        {
            text: 'Home',
            href: `#`
        },
        {
            text: 'About',
            href: `#`
        },
        {
            text: 'Blog',
            href: `#`
        },
        {
            text: 'Contact',
            href: `#`
        },
        {
            text: 'Shop',
            href: `#`
        },

    ],
    topJumbo: [
        {
            symbol: 'fa-regular fa-map',
            text: ' Internation Shipping Service'

        },
        {
            symbol: 'fa-regular fa-clock',
            text: ' See our store hours and service'

        },
        {
            symbol: 'fa-solid fa-check',
            text: 'We price match to give you the  best deals'

        },

    ],
    categoryItem: [
        {
            imgPath: 'product-9.jpg',
            text: 'Bed (1)'
        },
        {
            imgPath: 'product-3.jpg',
            text: 'Food (6)'
        },
        {
            imgPath: 'product-2.jpg',
            text: 'Toys (6)'
        },
        {
            imgPath: 'product-4.jpg',
            text: 'Transport (6)'
        },

    ],
    categoryFood: [
        {
            title: 'Kibble',
            text: 'Dry dog food',
            img: 'food-transparent-18-400x420.png',
            button: 'Shop dry food'
        },
        {
            title: 'Moist',
            text: 'Canned dog food',
            img: 'food-transparent-17-400x420.png',
            button: 'Shop moist food'
        },
        {
            title: 'Frozen',
            text: 'Freeze-dried dog food',
            img: 'food-transparent-16-400x420.png',
            button: 'Shop frozen food'
        },

    ],
    bestItem: [
        {
            imgPath: 'product-21-400x400.jpg',
            text: 'Transport cage',
            price: '$25.00'
        },
        {
            imgPath: 'product-20-400x400.jpg',
            text: 'TDog leash',
            price: '$25.00'
        },
        {
            imgPath: 'product-16-400x400.jpg',
            text: 'Animal transport cage',
            price: '$25.00',
            sale: '$35.00'
        },
        {
            imgPath: 'product-11-400x400.jpg',
            text: 'Colorful cat leash',
            price: '$12.00'
        },

    ],
    NewproductsItem: [
        {
            imgPath: 'product-8.jpg',
            text: 'Colored pet bed',
            price: '$18.00 - $26.00'
        },
        {
            imgPath: 'product-2.jpg',
            text: 'Colorful ball set',
            price: '$29.00'
        },
        {
            imgPath: 'product-3.jpg',
            text: 'Dog bone',
            price: '$18.00',
            sale: '$29.00'
        },
        {
            imgPath: 'product-4.jpg',
            text: 'Animal transport bag',
            price: '$29.00'
        },
        {
            imgPath: 'product-5.jpg',
            text: 'nimal transport cage',
            price: '$35.00'
        },
        {
            imgPath: 'product-10.jpg',
            text: 'Closable cat litter',
            price: '$16.00'
        }
    ],
    getYear() {
        const d = new Date();
        let year = d.getFullYear();
        return year
    }
}
)