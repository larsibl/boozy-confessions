<script lang="ts">
    import CategoryPicker from "./CategoryPicker.svelte";

    let categoryValue = 0;
</script>

<div class="card p-4 bg-white">
    <CategoryPicker {categoryValue} />
</div>