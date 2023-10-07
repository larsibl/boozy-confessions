<!-- Component adapted from ToggleConfetti (https://github.com/Mitcheljager/svelte-confetti) -->
<!-- Component adapted to work with Tailwind -->
<script lang="ts">
    import { tick } from 'svelte';

    let active = false;

    async function toggleConfetti() {
        active = false;
        await tick();
        active = true;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span class="relative" on:click={toggleConfetti}>
    <slot name="element" />

    {#if active}
        <div class="absolute left-1/2 top-0 -translate-y-4">
            <slot name="confetti" />
        </div>
    {/if}
</span>
