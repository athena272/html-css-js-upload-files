import { submitProject } from "../services/projectService.js";
import { extractTags, clearTags } from "../views/tagView.js";
import { clearUploadArea } from "./uploadController.js";

const elements = {
    publishButton: document.querySelector(".botao-publicar"),
    nameInput: document.getElementById("nome"),
    descriptionInput: document.getElementById("descricao"),
    resetButton: document.getElementById('reset-button'),
};

function buildPayload()
{
    return {
        name: elements.nameInput.value.trim(),
        description: elements.descriptionInput.value.trim(),
        tag: extractTags()
    };
}

async function handleFormSubmit(event) 
{
    event.preventDefault();
    const payload = buildPayload();
    try
    {
        const response = await submitProject(payload);
        console.log("🚀 ~ handleFormSubmit ~ response:", response);
        alert(response.message);
    } catch (error)
    {
        console.error("🚀 ~ handleFormSubmit ~ error:", error);
        alert(error.message);
    }
}

function handleFormReset()
{
    clearUploadArea();
    clearTags();
}

export function initFormController()
{
    elements.publishButton.addEventListener('click', handleFormSubmit);
    elements.resetButton.addEventListener('click', handleFormReset);
}