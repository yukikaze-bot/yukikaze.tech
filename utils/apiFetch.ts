export const apiFetch = async <T>(path: string, options: RequestInit = {}) => {
    const response = await fetch(`https://rest.yukikaze.tech${path}`, {
        ...options,
        credentials: 'include',
        headers: {
            ...options.headers,
            'Content-Type': 'application/json',
        },
    });
    const jsonResponse = await response.json();

    if (jsonResponse.error) throw new Error(response.statusText);
    else return jsonResponse as T;
};
