import { Usuario } from "../entidades/Usuario";

export class IRepositorioUsuario {
    inserir(usuario: Usuario): Promise<void>;
    encontrarPorEmail(email: string): Promise<Usuario>;
}