<script lang="ts">
  import Title from "../components/Title.svelte";
  import CategoryPicker from "../components/CategoryPicker.svelte";
  import ModeToggler from "../components/ModeToggler.svelte";
  import NextButton from "../components/NextButton.svelte";
  import CenterCard from "../components/CenterCard.svelte";

  let endpoint = "/v1/truth";
  let modeValue = "pg";
  let question: string;

  let started = false;
</script>

<main
  class="w-screen h-screen flex flex-col items-center justify-center bg-pink-200 gap-10"
>
  <Title />
  <div class="flex gap-2">
    <CategoryPicker bind:endpoint />
    <ModeToggler bind:modeValue />
  </div>

  {#if started}
    <CenterCard {question} />
  {/if}

  <NextButton {endpoint} {modeValue} bind:question bind:started />
</main>
