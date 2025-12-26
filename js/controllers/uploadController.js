import { readFileAsDataURL } from "../services/fileReaderService.js";
import { validateFile } from "../validators/fileValidator.js";

const elements = {
    uploadBtn: document.getElementById("upload-btn"),
    inputUpload: document.getElementById("image-upload"),
    mainImage: document.querySelector(".main-imagem"),
    imageName: document.querySelector(".container-imagem-nome p")
};

async function handleFileChange(event)
{
    const file = event.target.files[0];
    const validation = validateFile({ file });

    if (!validation.valid)
    {
        alert(validation.error);
        return;
    }

    try
    {
        const fileContent = await readFileAsDataURL(file);
        elements.mainImage.src = fileContent.url;
        elements.imageName.textContent = fileContent.name;
    } catch (error)
    {
        console.error(error);
        alert("Erro ao carregar a imagem. Verifique o console.");
    }
}

function handleUploadButtonClick()
{
    elements.inputUpload.click();
}

export function initUploadController()
{
    elements.uploadBtn.addEventListener("click", handleUploadButtonClick);
    elements.inputUpload.addEventListener("change", handleFileChange);
}