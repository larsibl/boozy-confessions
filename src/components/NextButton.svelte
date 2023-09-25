<script lang="ts">
  export let endpoint: string;
  export let modeValue: string;
  export let question: string = "";

  function onClick() {
    const path = `https://api.truthordarebot.xyz${endpoint}?rating=${modeValue}`;

    fetch(path)
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        question = obj.question;
      });
  }
</script>

<button type="button" class="btn variant-filled" on:click={onClick}>NEXT</button
>
