interface Props {
    id: number;
    title: string;
    path: string;
    jpg: string;
    png: string;
    clase: string;
    paragraph: string;
    url: string;
    list: string[];
}
export const rutaImg:string = 'https://res.cloudinary.com/dh5at1of2/image/upload/f_auto,q_auto/v1/portafolio/'
export const infoSitios: Props[] = [
    {
        id: 23,
        title: 'Mercado libre',
        path: '/23',
        jpg: 'jba63yxpwu2in8oxu8iv',
        png: 'dddn3k9jsn8ctfyisjj8',
        clase: 'sm:col-span-2',
        paragraph: 'Sitio replica de mercado libre, hecho con WordPress y Woocommerce, es autoadministrable, utiliza custom post type y custom taxonomy.',
        url: 'https://jul879n.free.nf/ecommerce',
        list: [
            "Realizado con WordPress",
            "Utiliza Woocommerce",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Utiliza jQuery",
            "Utiliza Bootstrap"
        ],
    },
    {
        id: 24,
        title: 'Netflix',
        path: '/24',
        jpg: 'tsqrke29yollbnkuix2s',
        png: 'uw2drtvsksti0cow2x4f',
        clase: '',
        paragraph: 'Sitio replica de Netflix autoadministrable, utiliza custom post type y custom taxonomy, hecho con WordPress.',
        url: 'https://jul879n.free.nf/netflix',
        list: [
            "Utiliza WordPress",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Funcionalidad con PHP",
            "Utiliza Bootstrap"
        ],
    },
    {
        id: 25,
        title: 'Rediseño Spotify',
        path: '/25',
        jpg: 'c7zu7eyabsmamqxjcaas',
        png: 'zvvslpnpcsq0dys7tfyy',
        clase: '',
        paragraph: 'Este es un rediseño de Spotify en el que se aplican nuevas funciones y autoadministrable, hecho con WordPress, jQuery, utiliza custom post type y custom taxonomy además de distintos plugins de jQuery.',
        url: 'https://jul879n.free.nf/spotify-redesign',
        list: [
            "Utiliza WordPress",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Utiliza Ajax para la navegación",
            "Utiliza jQuery para funcionalidad del reproductor y navegación",
            "Utiliza Bootstrap"
        ],
    },
    {
        id: 26,
        title: 'Spotify',
        path: '/26',
        jpg: 'vasg1l5ywi2agyvlglfg',
        png: 'ahosree7qa0xaedsa5j8',
        clase: 'sm:col-span-2',
        paragraph: 'Sitio replica de la opción sin cuenta de Spotify de hace unos meses, hecho con WordPress, utiliza custom post type y custom taxonomy.',
        url: 'https://jul879n.free.nf/spotify',
        list: [
            "Utiliza WordPress",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Utiliza Bootstrap"
        ],
    },
    {
        id: 27,
        title: 'Tienda Rayitas',
        path: '/27',
        jpg: 'hgnvbzztiblbfapuberf',
        png: 'jjlx3zjvrftclixosrm1',
        clase: 'sm:col-span-2',
        paragraph: 'Sitio de ventas de distintos tipos de rayitas, hecho con PHP y SQL, se puede agregar el producto al carrito, eliminarlo, modificar cantidad,crear usuario, iniciar sesión, agregar productos nuevo en caso de ser admin.',
        url: 'https://jul879n.free.nf/rayitas',
        list: [
            "Utiliza PHP",
            "Utiliza SQL",
            "Utiliza Bootstrap",
            "Utiliza sesiones",
            "Utiliza MVC"
        ],
    },
    {
        id: 28,
        title: 'Mi Solar',
        path: '/28',
        jpg: 'wv8fuqipzgoh5b5dysyf',
        png: 'ik1acncd5xtnu2hilamg',
        clase: '',
        paragraph: 'Sitio web que ofrece servicios de energía solar para hogares y empresas.',
        url: 'https://misolar.free.nf/',
        list: [
            "Utiliza jQuery",
            "Utiliza Bootstrap",
            "Utiliza Ajax para la navegación",
            "Sistema de login y cifrado de usuario",
            "Utiliza localStorage",
            "Aplicación propia"
        ],
    },
    {
        id: 29,
        title: 'Zaimoku Taller',
        path: '/29',
        jpg: 'nhzcekpq1hukbjm9ddgp',
        png: 'cwwxwryppfx0hovcoyjx',
        clase: '',
        paragraph: 'Sitio web que ofrece productos en madera.',
        url: 'https://zaimoku-taller.github.io/',
        list: [
            "Utiliza Bootstrap",
            "Diseño Moderno"
        ],
    },
    {
        id: 30,
        title: 'SiteBeam',
        path: '/30',
        jpg: 'dn5poqu5pgil2hkiodce',
        png: 'bpsc69qajxtnldjb5tfc',
        clase: 'col-span-2',
        paragraph: 'Sitio web que ofrece servicios de desarrollo y diseño web.',
        url: 'https://sitebeam.vercel.app/',
        list: [
            "Utiliza Tailwind",
            "utiliza JavaScript para el funcionamiento",
            "NextJS",
            "Utiliza fetch para enviar datos de formulario",
            "Utiliza componentes reutilizables",
            "Utiliza navegación dinámica"
        ],
    }
]