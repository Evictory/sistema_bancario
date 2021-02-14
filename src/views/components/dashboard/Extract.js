import { dashboardHeader as Header } from '../index';

const Extract = {
    render:  () => {
        const NOME_USUARIO = 'nome usuario';
        let view = `
            <div class="dash-header">
                <div class="section">
                    ${ Header.render(`Olá, <strong id="user-name">${NOME_USUARIO}</strong>, seja bem-vind!`) }
                </div>
            </div>
            <div class="content-default">
                ${extract}
            </div>
        `;

        return view
    },

    after_render: () => {
        Header.after_render();
    }
}

export default Extract;

let extract = `
    <div class="card">
        <div style="flex-wrap: wrap" class="content-flex">
            <div class="content-flex mr-2">
                <label class="mr-1">Início</label>
                <input type="text" >
            </div>
            <div class="content-flex">
                <label class="mr-1">Até</label>
                <input type="text" >
            </div>
        </div>
        <button class="btn btn-rounded btn-main-outline mt-2 mx-auto">Filtrar extrato</button>
    </div>

    <div style="width: 100%; box-sizing: border-box;" class="card mt-2">
        <div>
            <div class="bg-light p-1 text-left">
                <h5>11 de Fevereiro</h5>
            </div>
            <div  class="bloco p-1">
                <div>Int pag banco</div>
                <div> - R$ 249,97</div>
            </div>
            <div class="bloco p-1 bg-light">
                <div>Int pag banco</div>
                <div> - R$ 249,97</div>
            </div>
            <div class="bloco p-1">
                <div>Int pag banco</div>
                <div> - R$ 249,97</div>
            </div>        
        </div>
        <div class="mt-2">
            <div class="bg-light p-1 text-left">
                <h5>09 de Fevereiro</h5>
            </div>
            <div  class="bloco p-1">
                <div>Int pag banco</div>
                <div> - R$ 249,97</div>
            </div>
            <div class="bloco p-1 bg-light">
                <div>Int pag banco</div>
                <div> - R$ 249,97</div>
            </div>
            <div class="bloco p-1">
                <div>Int pag banco</div>
                <div> - R$ 249,97</div>
            </div>        
        </div>
    </div>
`