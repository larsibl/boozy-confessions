<script lang="ts">
    import { type Question, getQuestion } from '../features/get-question';

    import CenterCard from '../components/CenterCard.svelte';
    import NextButton from '../components/NextButton.svelte';
    import RatingButton from '../components/RatingButton.svelte';
    import Title from '../components/Title.svelte';
    import TypeSelector from '../components/TypeSelector.svelte';

    let disabled = false;
    let endpoint = '/v1/truth';
    let rating = 'pg';
    let started = false;

    let question: Promise<Question>;

    async function nextQuestion() {
        disabled = true;

        question = getQuestion({ endpoint, rating });

        question
            .then(() => {
                disabled = false;
            })
            .catch(() => {
                setTimeout(() => {
                    disabled = false;
                }, 3000);
            });
    }
</script>

<main class="flex flex-col gap-10 h-full p-6">
    <div class="basis-3/5 flex flex-col gap-10 items-center justify-end md:basis-1/2">
        <Title />

        <div class="flex flex-col gap-2 w-full md:flex-row md:justify-center">
            <TypeSelector bind:endpoint />
            <RatingButton bind:rating />
        </div>
    </div>

    <div class="basis-2/5 flex flex-col items-center justify-between gap-10 md:basis-1/2 md:justify-normal">
        {#if started}
            {#await question}
                <div
                    class="placeholder animate-pulse h-[72px] opacity-10 rounded-lg w-full md:h-12 md:rounded-full md:w-1/2"
                />
            {:then data}
                <CenterCard text={data.question} />
            {:catch error}
                <CenterCard text={'You are going to fast – slow down 😘'} />
            {/await}
        {/if}

        <NextButton on:nextquestion={nextQuestion} bind:started {disabled} />
    </div>
</main>
