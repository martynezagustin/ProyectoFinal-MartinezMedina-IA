let images = []
const imgContainer = document.querySelector(".imgs-container")
fetch("./json/data.json")
    .then((response) => response.json())
    .then((data) => {
        images = data
        for (let image of images) {
            const div = document.createElement("div")
            div.classList.add("div__img-prompt")
            div.innerHTML = `<img src=${image.img} class="prompt__img">
            <div>                
            <h3>Prompt</h3>
                             <p>"${image.prompt}"</p>
                             </div>`
            imgContainer.appendChild(div)
        }
    }
    )