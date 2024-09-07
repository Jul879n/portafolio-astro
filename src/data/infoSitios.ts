interface Props {
    id: number;
    destacado: boolean;
    title: string;
    path: string;
    jpg: string;
    png: string;
    clase: string;
    paragraph: string;
    url: string;
    list: string[];
}
export const rutaImg: string =
    "https://res.cloudinary.com/dh5at1of2/image/upload/f_auto,q_auto/v1/portafolio/";
export const infoSitios: Props[] = [
    {
        id: 22,
        destacado: true,
        title: "teatro san ginés",
        path: "/sitios/22",
        jpg: "yri4n44u8zka5gng63q7",
        png: "q0oivape8cel6tejen4f",
        clase: "sm:col-span-2",
        paragraph:
            "Sitio rediseño teatro San Ginés, primer proyecto académico.",
        url: "https://san-gines.github.io/",
        list: ["Utiliza CSS", "Utiliza Bootstrap"],
    },
    {
        id: 23,
        destacado: true,
        title: "Ecommerce",
        path: "/sitios/23",
        jpg: "jba63yxpwu2in8oxu8iv",
        png: "dddn3k9jsn8ctfyisjj8",
        clase: "sm:col-span-2",
        paragraph:
            "Sitio replica de mercado libre, hecho con WordPress y Woocommerce, es autoadministrable, utiliza custom post type y custom taxonomy.",
        url: "https://jul879n.com/ecommerce/",
        list: [
            "Realizado con WordPress",
            "Utiliza Woocommerce",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Utiliza jQuery",
            "Utiliza Bootstrap",
        ],
    },
    {
        id: 24,
        destacado: false,
        title: "Streaming",
        path: "/sitios/24",
        jpg: "tsqrke29yollbnkuix2s",
        png: "uw2drtvsksti0cow2x4f",
        clase: "",
        paragraph:
            "Sitio replica de Netflix autoadministrable, utiliza custom post type y custom taxonomy, hecho con WordPress.",
        url: "https://jul879n.com/streaming/",
        list: [
            "Utiliza WordPress",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Funcionalidad con PHP",
            "Utiliza Bootstrap",
        ],
    },
    {
        id: 25,
        destacado: true,
        title: "Rediseño Spotify",
        path: "/sitios/25",
        jpg: "c7zu7eyabsmamqxjcaas",
        png: "zvvslpnpcsq0dys7tfyy",
        clase: "",
        paragraph:
            "Este es un rediseño de Spotify en el que se aplican nuevas funciones y autoadministrable, hecho con WordPress, jQuery, utiliza custom post type y custom taxonomy además de distintos plugins de jQuery.",
        url: "https://jul879n.com/redesign/",
        list: [
            "Utiliza WordPress",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Utiliza Ajax para la navegación",
            "Utiliza jQuery para funcionalidad del reproductor y navegación",
            "Utiliza Bootstrap",
        ],
    },
    {
        id: 26,
        destacado: false,
        title: "Spotify Replica",
        path: "/sitios/26",
        jpg: "vasg1l5ywi2agyvlglfg",
        png: "ahosree7qa0xaedsa5j8",
        clase: "sm:col-span-2",
        paragraph:
            "Sitio replica de la opción sin cuenta de Spotify de hace unos meses, hecho con WordPress, utiliza custom post type y custom taxonomy.",
        url: "https://jul879n.com/spotify/",
        list: [
            "Utiliza WordPress",
            "Utiliza custom post type y custom taxonomy",
            "Es Autoadministrable",
            "Responsive",
            "Utiliza Bootstrap",
        ],
    },
    {
        id: 27,
        destacado: false,
        title: "Tienda Rayitas",
        path: "/sitios/27",
        jpg: "hgnvbzztiblbfapuberf",
        png: "jjlx3zjvrftclixosrm1",
        clase: "sm:col-span-2",
        paragraph:
            "Sitio de ventas de distintos tipos de rayitas, hecho con PHP y SQL, se puede agregar el producto al carrito, eliminarlo, modificar cantidad,crear usuario, iniciar sesión, agregar productos nuevo en caso de ser admin.",
        url: "https://jul879n.com/rayitas",
        list: [
            "Utiliza PHP",
            "Utiliza SQL",
            "Utiliza Bootstrap",
            "Utiliza sesiones",
            "Utiliza MVC",
        ],
    },
    {
        id: 28,
        destacado: false,
        title: "Mi Solar",
        path: "/sitios/28",
        jpg: "wv8fuqipzgoh5b5dysyf",
        png: "ik1acncd5xtnu2hilamg",
        clase: "",
        paragraph:
            "Sitio web que ofrece servicios de energía solar para hogares y empresas.",
        url: "https://mi-solar.github.io/",
        list: [
            "Utiliza jQuery",
            "Utiliza Bootstrap",
            "Utiliza Ajax para la navegación",
            "Sistema de login y cifrado de usuario",
            "Utiliza localStorage",
            "Aplicación propia",
        ],
    },
    {
        id: 29,
        destacado: false,
        title: "Zaimoku Taller",
        path: "/sitios/29",
        jpg: "aawr7dkbt7nfjdwfnktq",
        png: "cwwxwryppfx0hovcoyjx",
        clase: "",
        paragraph: "Sitio web que ofrece productos en madera.",
        url: "https://zaimoku-taller.github.io/",
        list: ["Utiliza Bootstrap", "Diseño Moderno"],
    },
    {
        id: 30,
        destacado: false,
        title: "SiteBeam",
        path: "/sitios/30",
        jpg: "dn5poqu5pgil2hkiodce",
        png: "bpsc69qajxtnldjb5tfc",
        clase: "col-span-2",
        paragraph: "Sitio web que ofrece servicios de desarrollo y diseño web.",
        url: "https://sitebeam.vercel.app/",
        list: [
            "Utiliza Tailwind",
            "utiliza JavaScript para el funcionamiento",
            "NextJS",
            "Utiliza fetch para enviar datos de formulario",
            "Utiliza componentes reutilizables",
            "Utiliza navegación dinámica",
        ],
    },
];
