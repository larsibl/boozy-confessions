<script lang="ts">
    const icons = ['😇', '😏', '😈'];
    const modes = ['pg', 'pg13', 'r'];

    export let mode = 'pg';

    $: index = modes.indexOf(mode);

    function onClick() {
        mode = modes[(index + 1) % modes.length];
    }
</script>

<button type="button" class="btn variant-filled text-xl" on:click={onClick}>
    {icons[index]}
</button>
