let isExplorer = true
function changeCard(event) {
// alert('Está funcionando!') <-- TESTE ⚠
const card = event.currentTarget
const bg = isExplorer // bg = background
? "explorer" // ? = Se...
: "ignite" // : = Senão...
isExplorer = !isExplorer
card.style.background = `url(./assets/bg-${bg}.svg)`
}