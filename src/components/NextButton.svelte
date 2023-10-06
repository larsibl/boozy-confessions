<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let started: boolean;
    export let disabled: boolean;

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
    >{!started ? 'START' : disabled ? 'WAIT' : 'NEXT'}</button
>
