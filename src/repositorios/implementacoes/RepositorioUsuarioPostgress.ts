import { Usuario } from "../../entidades/Usuario";
import { IRepositorioUsuario } from "../IRepositorioUsuario";

export class RepositorioUsuarioPostgress implements IRepositorioUsuario {
    private usuarios: Usuario[] = [];

    async encontrarPorEmail(email: string): Promise<Usuario> {
        const usuario = this.usuarios.find((usuario) => usuario.email === email);
        
        return usuario;
    }

    async inserir(usuario: Usuario): Promise<void> {
        this.usuarios.push(usuario);
    }
}