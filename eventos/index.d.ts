interface Product {
    id: string;
    name: string;
    imageUrl: string;
    originalPrice: number;
    discountPrice: number;
    offerPercentage: number;
    rating: number;
    ratingCount: number;
    tags: string[]
}

interface Eventos {
    id: string;
    name: string;
    imageUrl: string;
    fecha: string;
    lugar: string;
    descripcion: string;
    comentarios: Comentario[]
}

interface Comentario {
    id: string;
    name: string;
    calificacion: number;
    comentario: string;
}