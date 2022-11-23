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
    getYear() {
        const d = new Date();
        let year = d.getFullYear();
        return year
    }
}
)