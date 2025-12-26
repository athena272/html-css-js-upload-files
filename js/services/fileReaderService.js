export function readFileAsDataURL(file)
{
    return new Promise((resolve, reject) =>
    {
        const reader = new FileReader();
        reader.onload = () =>
        {
            resolve({ url: reader.result, name: file.name });
        };

        reader.onerror = () =>
        {
            reject(new Error(`Erro na leitura do arquivo ${file.name}`));
        };

        reader.readAsDataURL(file);
    });
}