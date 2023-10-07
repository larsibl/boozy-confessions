export const baseURL = 'https://api.truthordarebot.xyz';

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

export async function getQuestion({ endpoint, rating }: { endpoint: string; rating: string }): Promise<Question> {
    const url = new URL(endpoint, baseURL);
    url.searchParams.set('rating', rating);

    return fetch(url).then((response) => response.json());
}
