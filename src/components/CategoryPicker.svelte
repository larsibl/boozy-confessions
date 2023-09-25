<script lang="ts">
  import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

  const categories = [
    "Truth",
    "Dare",
    "Would You Rather",
    "Never Have I Ever",
    "Paranoia Question",
  ];

  export let categoryValue: number;
</script>

<RadioGroup>
  {#each categories as category, index}
    <RadioItem bind:group={categoryValue} name="justify" value={index}
      >{category}</RadioItem
    >
  {/each}
</RadioGroup>
