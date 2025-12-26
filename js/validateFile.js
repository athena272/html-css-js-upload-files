export function validateFile({ file, maxSizeMB = 5 })
{
    if (!file) return { valid: false, error: "Nenhum arquivo selecionado" };

    if (!file.type.startsWith("image/") && !file.type.match('image/png') && !file.type.match('image/jpeg'))
    {
        return { valid: false, error: "O arquivo não é uma imagem" };
    }

    const maxSize = maxSizeMB * 1024 * 1024;
    if (file.size > maxSize)
    {
        return { valid: false, error: `Arquivo maior que ${maxSizeMB}MB` };
    }

    return { valid: true };
}
