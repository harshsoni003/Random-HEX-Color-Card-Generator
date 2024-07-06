const containerEl = document.querySelector(".container");

for(let index=0; index<100; index++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container"); //Adds the class color-container to the newly created <div>.


    const colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");
    colorContainerEl.appendChild(colorCodeEl);   
    const copyButtonEl = document.createElement("button");
    copyButtonEl.innerText= "Copy";
    colorContainerEl.appendChild(copyButtonEl);   //Appends the <button> element as a child of the <div>


    //Appends the <div> (with the <span> and <button> inside) 
    //to the container element selected at the beginning.
    containerEl.appendChild(colorContainerEl);

}


function randomColor(){

    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for(let index = 0; index < colorCodeLength; index++){

        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
        //console.log(colorCode);
    }

    return colorCode;
}

const mainColorContainerEls = document.querySelectorAll(".color-container");

generateColors();


function generateColors(){

    for(let i = 0; i<mainColorContainerEls.length;i++){

      

        const colorContainerEl = mainColorContainerEls[i];
        const newColorCode = randomColor();
        const colorCodeEl = colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = "#" + newColorCode;

        colorCodeEl.innerText = "#" + newColorCode;

    }
}


mainColorContainerEls.forEach((colorContainerEl)=>{
    const copyButtonEl = colorContainerEl.querySelector("button");
    const colorCodeEl = colorContainerEl.querySelector(".color-code");

    copyButtonEl.addEventListener("click",()=>{
        const colorCode = colorCodeEl.innerText; 
        copytoCilpBoard(colorCode);
    });

});




function copytoCilpBoard(text){

   navigator.clipboard.writeText(text)
   .then(()=>{
        alert("Copied to Clipboard : " + text);
   })
   .catch((error)=>{
        console.log("Failed to Copy to Clipboard",error);
   })

}
