<script lang="ts">
    import { Confetti } from 'svelte-confetti';
    import ConfettiToggler from './ConfettiToggler.svelte';
    import { onMount } from 'svelte';

    const green = '#14B8A6';
    const pink = '#D4418A';
    const white = '#FFFFFF';

    const icons = ['😇', '😏', '😈'];
    const ratings = ['pg', 'pg13', 'r'];

    export let rating = 'pg';

    $: index = ratings.indexOf(rating);

    function onClick() {
        rating = ratings[(index + 1) % ratings.length];
    }

    let smallScreen: boolean;

    function checkScreenSize() {
        smallScreen = window.innerWidth < 768; // 768px is the standard breakpoint for small screens
    }

    onMount(() => {
        checkScreenSize();
    });

    $: x = smallScreen ? [-1, 1] : [-4.4, -0.2];
    $: y = smallScreen ? [0.2, 1.1] : [-0.4, 0.5];
</script>

<svelte:window on:resize={checkScreenSize} />

<ConfettiToggler>
    <button
        slot="element"
        type="button"
        class="btn rounded-lg text-xl variant-filled w-full md:rounded-full md:w-auto"
        on:click={onClick}
    >
        {icons[index]}
    </button>

    <Confetti amount={100} colorArray={[green, pink, white]} cone={smallScreen} rounded slot="confetti" {x} {y} />
</ConfettiToggler>
