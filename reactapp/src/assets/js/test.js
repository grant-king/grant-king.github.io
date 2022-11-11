function animate_height(event){
    const current_height_int = parseInt(event.srcElement.style.height.slice(0, -2))
    console.log(current_height_int)
    const element = event.srcElement

    if(current_height_int > 105){
        const new_height_int = current_height_int - 32
        const element_height = [
            {height: `${current_height_int}px`},
            {height: `${new_height_int}px`}
        ]
        const element_timing = {
            duration: 1000,
            iterations: 1,
        }
        const animation = element.animate(element_height, element_timing)
        console.log(`height set: ${new_height_int}`)
        console.dir(animation)
    }
    
}

function scroll_height(event){
    const current_height_int = parseInt(event.srcElement.style.height.slice(0, -2))
    console.log(current_height_int)
    const element = event.srcElement

    if(current_height_int > 105){
        const new_height_int = current_height_int - 64
        set_height(element, new_height_int)
        console.log(`height set: ${new_height_int}`)
        console.dir(animation)
    }
    
}

function set_height(element, new_height_int){
    element.style.height = `${new_height_int}px`
}

console.dir(document)

const element = document.getElementById('top-area')
element.addEventListener('wheel', scroll_height)
console.dir(element)
element.innerHTML = '<h1>test<h1>'
element.style.color = '#fff'