<script lang="ts">
    import CategoryPicker from "./CategoryPicker.svelte";
    import ModeToggler from "./ModeToggler.svelte";

    let categoryValue = 0;
    let modeValue = 0;
</script>

<div class="card p-4 bg-white flex gap-2">
    <CategoryPicker {categoryValue} />
    <ModeToggler {modeValue} />
</div>