<script lang="ts">
  export let started: boolean;

  function onClick() {
    started = true;
  }
</script>

<button type="button" class="btn btn-lg variant-filled" on:click={onClick}
  >START</button
>
