<script lang="ts">
    import Title from '../components/Title.svelte';
    import CategoryPicker from '../components/CategoryPicker.svelte';
    import ModeToggler from '../components/ModeToggler.svelte';
    import NextButton from '../components/NextButton.svelte';
    import CenterCard from '../components/CenterCard.svelte';
    // import { onMount } from 'svelte';

    let endpoint = '/v1/truth';
    let mode = 'pg';
    let question: string;

    let started = false;

    // let smallScreen: boolean;

    // function checkScreenSize() {
    //     smallScreen = window.innerWidth < 768; // 768px is the standard breakpoint for small screens
    // }

    // onMount(() => {
    //     checkScreenSize();
    // });
</script>

<!-- <svelte:window on:resize={checkScreenSize} /> -->

<main class="h-full flex flex-col items-center justify-center gap-10 p-6">
    <Title />

    <div class="flex flex-col gap-2 w-full md:flex-row md:justify-center">
        <CategoryPicker bind:endpoint />
        <ModeToggler bind:mode />
    </div>

    {#if started}
        <CenterCard {question} />
    {/if}

    <NextButton {endpoint} {mode} bind:question bind:started />
</main>
