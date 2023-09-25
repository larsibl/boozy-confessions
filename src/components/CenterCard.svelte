<script lang="ts">
  import CategoryPicker from "./CategoryPicker.svelte";
  import ModeToggler from "./ModeToggler.svelte";
  import NextButton from "./NextButton.svelte";

  export let started: boolean;

  let categoryValue = 0;
  let modeValue = "pg";
  let question: string;
</script>

<div class="card p-4 bg-white flex flex-col gap-2">
  <div class="flex gap-2">
    <CategoryPicker bind:categoryValue />
    <ModeToggler bind:modeValue />
  </div>

  <div class="flex justify-end">
    {#if started}
      <h3 class="h3">{question}</h3>
      <NextButton {modeValue} bind:question />
    {/if}
  </div>
</div>
