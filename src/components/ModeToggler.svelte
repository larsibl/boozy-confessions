<script lang="ts">
    const modes = ['pg', 'pg13', 'r'];

    export let modeValue: string;

    $: index = modes.indexOf(modeValue);

    function onClick() {
        modeValue = modes[(index + 1) % modes.length];
    }
</script>

<button type="button" class="btn variant-filled" on:click={onClick}
    >{modeValue.toUpperCase()}</button
>
