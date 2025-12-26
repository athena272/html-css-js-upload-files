export const tagElements = {
    input: document.getElementById("input-tags"),
    list: document.getElementById("lista-tags")
};

export function renderTag(tag)
{
    const li = document.createElement("li");
    li.innerHTML = `<p>${tag}</p> <img src="./img/close-black.svg" class="remove-tag" alt="Remover tag">`;
    tagElements.list.appendChild(li);
}

export function clearTagInput()
{
    tagElements.input.value = "";
}

export function extractTags()
{
    return Array.from(tagElements.list.querySelectorAll("p")).map((p) => p.textContent);
}