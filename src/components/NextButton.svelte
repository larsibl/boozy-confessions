<script lang="ts">
    export let endpoint: string;
    export let mode: string;
    export let question: string = '';
    export let started: boolean;

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

<button type="button" class="btn variant-filled" on:click={onClick}
    >{started ? 'NEXT' : 'START'}</button
>
