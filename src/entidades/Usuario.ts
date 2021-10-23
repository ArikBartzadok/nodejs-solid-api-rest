import { v4 as uuid } from 'uuid';

export class Usuario {
    public readonly id: string;

    public nome: string;
    public email: string;
    public senha: string;

    constructor(props: Omit<Usuario, 'id'>, id?: string) {
        // Object.assign(this, props);
        this.id = id ?? uuid();

        this.nome = props.nome;
        this.email = props.email;
        this.senha = props.senha;
    }
}