const botao = document.querySelector('.btnAdicionar')

const total = 0

botao.addEventListener('click', (e) => {


    const box = document.querySelector('#box')

    const carrinho = document.querySelector('.carrinho')

    const p = document.createElement('p')
    p.innerText = box.selectedOptions[0].text

    const btnX = document.createElement('button')
    btnX.classList.add("btnX")
    btnX.innerText = 'X'

    btnX.addEventListener('click', () => {
        carrinho.removeChild(div)
    })

    const div = document.createElement('div')
    div.classList.add('divBtnP')
    div.style.display = 'flex'


    carrinho.append(div)

    div.appendChild(p)
    div.appendChild(btnX)

    const totalC = document.querySelector('.total')

    const carrinhoTotal = total + totalC.value


})


