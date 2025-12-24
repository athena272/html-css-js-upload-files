import { fileReader } from "./fileReader.js";
import { validateFile } from "./validateFile.js";

const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");
const mainImage = document.querySelector(".main-imagem");
const imageName = document.querySelector(".container-imagem-nome p");

uploadBtn.addEventListener("click", () =>
{
    inputUpload.click();
});

inputUpload.addEventListener("change", async (event) =>
{
    const file = event.target.files[0];
    const validation = validateFile({ file, maxSizeMB: 5 });

    if (!validation.valid) 
    {
        alert(validation.error);
        return;
    }

    try
    {
        const fileContent = await fileReader(file);
        mainImage.src = fileContent.url;
        imageName.textContent = fileContent.name;
    }
    catch (error)
    {
        console.error("Erro na leitura do arquivo", error);
    }
});

