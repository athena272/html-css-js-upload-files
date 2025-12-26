import { checkAvailableTag } from "../services/tagService.js";
import { tagElements, renderTag, clearTagInput } from "../views/tagView.js";

async function handleTagKeypress(event)
{
    if (event.key !== "Enter") return;

    event.preventDefault();
    const tag = tagElements.input.value.trim();
    if (!tag) return;

    try
    {
        const isValid = await checkAvailableTag(tag);
        if (!isValid)
        {
            alert("Tag não foi encontrada.");
            return;
        }

        renderTag(tag);
        clearTagInput();
    } catch (error)
    {
        console.error("Erro ao verificar a existência da tag", error);
        alert("Erro ao verificar a existência da tag. Verifique o console.");
    }
}

function handleTagClick(event)
{
    if (!event.target.classList.contains("remove-tag")) return;
    tagElements.list.removeChild(event.target.parentElement);
}

export function initTagController()
{
    tagElements.input.addEventListener("keypress", handleTagKeypress);
    tagElements.list.addEventListener("click", handleTagClick);
}