let resultColours = []
let colourScheme = ""
let colourSeed = ""
let finalUrl = ""

document.getElementById('get-scheme').addEventListener("click", function(e){

    e.preventDefault()
    colourScheme = document.getElementById('scheme-select').value
    colourSeed = document.getElementById('seed-input').value

    finalUrl = `https://www.thecolorapi.com/scheme?hex=${colourSeed.substring(1)}&mode=${colourScheme.toLowerCase()}&count=5`


    fetch(finalUrl)
        .then(res => res.json())
        .then(data => {
            for (let i=0; i < data.colors.length; i++){
                resultColours.push(data.colors[i].hex.value)
               
            }
            document.getElementById('colour-one').style.background = resultColours[0]
            document.getElementById('colour-two').style.background = resultColours[1]
            document.getElementById('colour-three').style.background = resultColours[2]
            document.getElementById('colour-four').style.background = resultColours[3]
            document.getElementById('colour-five').style.background = resultColours[4]
        })
    


})    

