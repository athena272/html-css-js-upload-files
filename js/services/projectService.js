export function submitProject(payload)
{
    const randomNumber = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (randomNumber > 50)
            {
                resolve({ message: "Projeto publicado com sucesso.", payload });
                return;
            }

            reject(new Error("Erro ao publicar o projeto."));
        }, 0.8 * 1000);
    });
}