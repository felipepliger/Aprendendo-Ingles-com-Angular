export class Coracao{

    constructor(
        public cheio: boolean,
        public urlCoracaoCheio = '../../assets/coracao_cheio.png',
        public urlCoracaoVazio = '../../assets/coracao_vazio.png'
    ) { }

    public exibeCoracao(){
        if(this.cheio)
            return this.urlCoracaoCheio;
        else
            return this.urlCoracaoVazio;
    }
}