<script lang="ts">
    export let endpoint: string;
    export let mode: string;
    export let started: boolean;
    export let question: string = '';

    function onClick() {
        started = true;

        const path = `https://api.truthordarebot.xyz${endpoint}?rating=${mode}`;

        fetch(path)
            .then((response) => response.json())
            .then((obj) => {
                console.log(obj);
                question = obj.question;
            });
    }
</script>

<button
    type="button"
    class="btn rounded-lg text-xl variant-filled md:rounded-full"
    on:click={onClick}>{!started ? 'START' : 'NEXT'}</button
>
