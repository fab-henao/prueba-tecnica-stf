export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "body drapeado de manga larga",
                    link: "https://www.studiof.com.co/body-drapeado-de-manga-larga-s163336-/p",
                    src: "https://studiofco.vteximg.com.br/arquivos/ids/1620832-4000-4284/-stfco-producto-Body-NEGRO-S163336-1.jpg?v=638670150248030000",
                    description: "Descripción del producto 1",
                    price: 454.465,
                },
                {
                    id: 2,
                    name: "Vestido drapeado midi copa tiras",
                    link: "https://www.studiof.com.co/vestido-drapeado-midi--copa-tiras-s142885a-/p",
                    src: "https://studiofco.vteximg.com.br/arquivos/ids/1620985-4000-4284/-stfco-producto-Vestidos-CAKI-S142885A-1.jpg?v=638670151509630000",
                    description: "Descripción del producto 2",
                    price: 655.545,
                },
                {
                    id: 3,
                    name: "Body Cuello Halter Cruzado",
                    link: "https://www.studiof.com.co/creado-superiores-studio-f-s163343-/p",
                    src: "https://studiofco.vteximg.com.br/arquivos/ids/1621228-4000-4284/BODY-CAKI-S163343-1.jpg?v=638670208954600000",
                    description: "Descripción del producto 3",
                    price: 845.545,
                },
                {
                    id: 4,
                    name: "Vestido corto cruzado",
                    link: "https://www.studiof.com.co/vestido-corto-cruzado-s142943-/p",
                    src: "https://studiofco.vteximg.com.br/arquivos/ids/1621223-4000-4284/Vestidos-PLATA-S142943-1.jpg?v=638670202742300000",
                    description: "Descripción del producto 3",
                    price: 434.323,
                },
                {
                    id: 5,
                    name: "Chaleco corto con espalda en tela contra",
                    link: "https://www.studiof.com.co/chaleco-corto-con-espalda-en-tela-contra-s076556-/p",
                    src: "https://studiofco.vteximg.com.br/arquivos/ids/1621233-4000-4284/Camisasyblusas-NEGRO-S076556-1.jpg?v=638670221323830000",
                    description: "Descripción del producto 3",
                    price: 534.433,
                },
                {
                    id: 6,
                    name: "Short tiro alto con prense y guardapolvo",
                    link: "https://www.studiof.com.co/short-tiro-alto-con-prense-y-guardapolvo-s104420-/p",
                    src: "https://studiofco.vteximg.com.br/arquivos/ids/1621135-4000-4284/-stfco-producto-Shorts-AZULCLARO-S104420-1.jpg?v=638670152893570000",
                    description: "Descripción del producto 3",
                    price: 434.434,
                },
            ]);
        }, 200); // Simula un retraso de 4 segundos
    });
};

export const submitForm = (formData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData.name && formData.email) {
                resolve({ message: "Formulario enviado con éxito" });
            } else {
                reject({ error: "Faltan campos obligatorios" });
            }
        }, 4000); // Simula un retraso de 4 segundos
    });
};
