<script lang="ts">
  import CenterCard from "../components/CenterCard.svelte";
  import Title from "../components/Title.svelte";
  import StartButton from "../components/StartButton.svelte";

  let started = false;
</script>

<main
  class="w-screen h-screen flex flex-col items-center justify-center bg-pink-200 gap-10"
>
  <Title />
  <CenterCard {started} />

  {#if !started}
    <StartButton bind:started />
  {/if}
</main>
