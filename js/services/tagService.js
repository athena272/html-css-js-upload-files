import { AVAILABLE_TAGS, TAG_CHECK_DELAY_MS } from "../config/appConfig.js";

export function checkAvailableTag(tag)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            resolve(AVAILABLE_TAGS.includes(tag));
        }, TAG_CHECK_DELAY_MS);
    });
}