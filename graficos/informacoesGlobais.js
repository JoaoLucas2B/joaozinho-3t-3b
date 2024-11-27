const url='https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/purga.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `O time mais caro do mundo é o Real Madrid com um custo de <span>${dados.Real_Madrid} bilhões de reais</span>, em segundo lugar temos o Manchester City, no valor de <span>${dados.Manchester_City} bilhões</span>, na terceira posição é o Arsenal, valendo <span>${dados.Arsenal} bilhões de reais</span>. Os dois últimos mais caros, respectivamente, são o: Chelsea e Barcelona, com <span>${dados.Chelsea} bilhões </span> e <span>${dados.Barcelona} bilhões de reais</span>.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()