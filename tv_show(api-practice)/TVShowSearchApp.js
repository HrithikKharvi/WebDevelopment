let form = document.querySelector("form");


form.addEventListener("submit", async (e) => {
    e.preventDefault()
    makeRequest();
    form.elements.query.value = "";
})

async function makeRequest() {
    let allImages = document.querySelectorAll("img");
    console.log("Here")

    if (allImages) {
        for (let img of allImages) {
            img.remove();
        }
    }
    let input = form.elements.query.value
    // console.log(input);
    console.log(input);
    let config = { params: { q: input } }
    let res = await axios.get("http://api.tvmaze.com/search/shows", config);
    console.log(res);
    makeImage(res.data);
}

function makeImage(images) {
    for (let img of images) {
        if (img.show.image) {
            console.log(img.show.image);
            let image = document.createElement("IMG");
            image.src = img.show.image.medium;
            document.body.append(image);
        }
    }
}

form.elements.query.addEventListener("input", () => {
    makeRequest();
})


