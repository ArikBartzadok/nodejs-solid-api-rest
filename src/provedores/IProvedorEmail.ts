export interface IEndereco {
    nome: string;
    email: string;
}

export interface IMensagem {
    de: IEndereco;
    para: IEndereco;
    assunto: string;
    conteudo: string;
}

export class IProvedorEmail {
    enviarEmail(mensagem: IMensagem): Promise<void>;
}