import { ProvedorMailTrap } from "../../provedores/implementacoes/ProvedorMailTrap";
import { RepositorioUsuarioPostgress } from "../../repositorios/implementacoes/RepositorioUsuarioPostgress";
import { CasoDeUsoCriarUsuario } from "./CasoDeUsoCriarUsuario";
import { ControladorCriarUsuario } from "./ControladorCriarUsuario";

const provedorMailTrap = new ProvedorMailTrap();
const repositorioUsuarioPostgress = new RepositorioUsuarioPostgress();

const casoDeUsoCriarUsario = new CasoDeUsoCriarUsuario(
    repositorioUsuarioPostgress,
    provedorMailTrap,
);

const controladorCriarUsuario = new ControladorCriarUsuario(
    casoDeUsoCriarUsario
);

export { casoDeUsoCriarUsario, controladorCriarUsuario };