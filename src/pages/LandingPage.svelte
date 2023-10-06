<script lang="ts">
    import Title from '../components/Title.svelte';
    import CategoryPicker from '../components/CategoryPicker.svelte';
    import ModeToggler from '../components/ModeToggler.svelte';
    import NextButton from '../components/NextButton.svelte';
    import CenterCard from '../components/CenterCard.svelte';

    let endpoint = '/v1/truth';
    let mode = 'pg';
    let question: string;

    let started = false;
</script>

<main class="flex flex-col h-full gap-10 p-6">
    <div
        class="basis-3/5 flex flex-col items-center justify-end gap-10 md:basis-1/2"
    >
        <Title />

        <div class="flex flex-col gap-2 w-full md:flex-row md:justify-center">
            <CategoryPicker bind:endpoint />
            <ModeToggler bind:mode />
        </div>
    </div>

    <div
        class="basis-2/5 flex flex-col items-center justify-between gap-10 md:basis-1/2 md:justify-normal"
    >
        {#if started}
            <CenterCard {question} />
        {/if}

        <NextButton {endpoint} {mode} bind:started bind:question />
    </div>
</main>
