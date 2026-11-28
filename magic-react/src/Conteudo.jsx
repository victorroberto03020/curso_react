function Conteudo() {

    function clicouNoBotao() {
        alert("clicou no botão")
    }

    let clicouNoBotao2 = () => {
        alert("clicou no botão 2")
    }

    return (
        <main>
            <h1>Meu nome é Victor</h1>
            <h3>Sou programador</h3>
            <button onClick={
                () => {
                    alert("clicou no botão 3")
                } 
            } onMouseOut={
                () => {
                    alert("Mouse passou por cima")
                }
            }>
                Clique aqui para mostrar seu nome
            </button>
        </main>
    )
}

export default Conteudo