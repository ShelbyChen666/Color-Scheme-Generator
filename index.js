
function renderColor(){
    const seedColor = document.getElementById("seed-color").value.substring(1)
    const mode = document.getElementById("mode").value
    let colorSchemeHtml = ""
    let colorTextHtml = ""
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
        .then(res=>res.json())
        .then(data=>{
            data.colors.forEach(color =>{
                colorSchemeHtml += `
                    <div style="background-color: ${color.hex.value}" class="color-box grid">
                    </div>
                    `
                colorTextHtml += `
                    <text class="hex-code">${color.hex.value}</text>
                    `
            })
            document.getElementById("color-scheme").innerHTML = colorSchemeHtml
            document.getElementById("color-text").innerHTML = colorTextHtml
        })
}

document.getElementById("get-scheme").addEventListener("click",function(){
    renderColor()
})

renderColor()


