<script lang="ts">
    const modes = [ 'PG', 'PG-13', 'R' ]

    export let modeValue: number;

    function onClick() {
        modeValue = (modeValue + 1) % modes.length
    }
</script>

<button type="button" class="btn variant-filled" on:click={onClick}>{modes[modeValue]}</button>