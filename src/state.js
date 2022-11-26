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
    getYear() {
        const d = new Date();
        let year = d.getFullYear();
        return year
    }
}
)