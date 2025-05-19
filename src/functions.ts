import type { Chef } from "./types";

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONObject {
    [key: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> { }

function isJSONValue(value: any): value is JSONValue {
    // con value: unknown errore;
    if (value === null) return true;
    if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
    ) {
        return true;
    }

    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }

    if (typeof value === 'object') {
        for (const key in value) {
            if (value.hasOwnProperty(key) && !isJSONValue(value[key])) {
                return false
            }
            return true
        }
    }
    return false;
}

export default function isChef(data: unknown): data is Chef {
    if (
        isJSONValue(data)
    ) {
        return true;
    }
    return false;
}

