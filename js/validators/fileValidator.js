import { FILE_UPLOAD_CONFIG } from "../config/appConfig.js";

function convertToMB(size)
{
    return size / 1024 / 1024;
}

export function validateFile({ file, allowedTypes = FILE_UPLOAD_CONFIG.allowedTypes, maxSizeMB = FILE_UPLOAD_CONFIG.maxSizeMB } = {})
{
    if (!file)
        return {
            valid: false,
            error: "Nenhum arquivo selecionado"
        };

    const isValidType = allowedTypes.some((type) => file.type === type);
    if (!isValidType)
        return {
            valid: false,
            error: "O arquivo não é uma imagem suportada"
        };

    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes)
        return {
            valid: false,
            error: `Arquivo maior que ${maxSizeMB}MB. Esse arquivo tem ${convertToMB(file.size)}MB`
        };

    return { valid: true };
}