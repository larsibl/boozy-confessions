<script lang="ts">
    import { Confetti } from 'svelte-confetti';
    import ConfettiToggler from './ConfettiToggler.svelte';

    const green = '#14B8A6';
    const pink = '#D4418A';
    const white = '#FFFFFF';

    const icons = ['😇', '😏', '😈'];
    const modes = ['pg', 'pg13', 'r'];

    export let mode = 'pg';

    $: index = modes.indexOf(mode);

    function onClick() {
        mode = modes[(index + 1) % modes.length];
    }
</script>

<ConfettiToggler>
    <button
        slot="element"
        type="button"
        class="btn rounded-lg text-xl variant-filled w-full md:rounded-full md:w-auto"
        on:click={onClick}
    >
        {icons[index]}
    </button>

    <Confetti slot="confetti" cone rounded colorArray={[green, pink, white]} />
</ConfettiToggler>
