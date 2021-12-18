
interface Prova {
    Name: string;
    CategoryId: number;
    Prof_DiscId: number;
    Link: string;
}


interface ProvaBody {
    Name: string,
    Categoria: string,
    Professor: string,
    Disciplina: string,
    Link: string,
}


interface DisciplinaBody{
    Id: number;
    Name: string;
    periodo: number;
}





export {
    Prova,
    ProvaBody,
    DisciplinaBody
}