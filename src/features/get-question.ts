export type Question = {
    id: string;
    question: string;
    rating: string;
    translations: {
        bn: string;
        de: string;
        es: string;
        fr: string;
        hi: string;
        tl: string;
    };
    type: string;
};

export async function getQuestion({
    endpoint,
    mode,
}: {
    endpoint: string;
    mode: string;
}): Promise<Question> {
    const path = `https://api.truthordarebot.xyz${endpoint}?rating=${mode}`;

    return fetch(path).then((response) => response.json());
}
