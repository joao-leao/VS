export interface Card{
    name:string;
    image: string;
    adress:string;
    id: number;
    states: string;
    value: number;
    profile: string;
    profileName: string;
    info: number[];
}

export const cards: Card[] = [
    {name: "Casa", image: "./assets/imgs/casa509.webp", adress: "Passo do Gado - Tubarão/SC", id: 509, states: "Pronto para morar", value: 250000, profile: "./assets/imgs/profile1.png", profileName: "William Castelani", info: [2, 1, 80]},
    {name: "Apartamento", image: "./assets/imgs/apartamento508.webp", adress: "Centro - Tubarão/SC", id: 508, states: "Usado", value: 380000, profile: "./assets/imgs/profile2.jpeg", profileName: "Sibele Scremin", info: [63, 1]},
    {name: "Casa de Madeira", image: "./assets/imgs/casa507.webp", adress: "São Cristóvão - Tubarão/SC", id: 507, states: "Pronto para morar", value: 390000, profile: "./assets/imgs/profile2.jpeg", profileName: "Sibele Scremin", info: [3, 1]}  
]