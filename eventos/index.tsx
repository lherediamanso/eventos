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
    calificacion: string|number;
    comentario: string;
}