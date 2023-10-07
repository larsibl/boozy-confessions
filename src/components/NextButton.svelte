<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let disabled: boolean;
    export let started: boolean;

    const next = 'NEXT';
    const start = 'START';
    const wait = 'WAIT';

    const dispatch = createEventDispatcher();

    function nextQuestion() {
        if (!started) {
            started = true;
        }

        if (!disabled) {
            dispatch('nextquestion');
        }
    }
</script>

<button
    type="button"
    class="btn rounded-lg text-xl variant-filled md:rounded-full {disabled &&
        'opacity-50 cursor-wait'}"
    on:click={nextQuestion}
>
    {!started ? start : disabled ? wait : next}
</button>
