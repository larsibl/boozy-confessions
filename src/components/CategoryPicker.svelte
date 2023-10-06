<script lang="ts">
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    const categories = [
        { label: 'Truth', endpoint: '/v1/truth' },
        { label: 'Dare', endpoint: '/api/dare' },
        { label: 'Would You Rather', endpoint: '/api/wyr' },
        { label: 'Never Have I Ever', endpoint: '/api/nhie' },
        { label: 'Paranoia Question', endpoint: '/api/paranoia' },
    ];

    export let endpoint = '/v1/truth';
</script>

<RadioGroup
    active="bg-primary-600 text-white"
    background="bg-primary-200"
    border="border-2 border-primary-600"
    display="flex flex-col md:flex-row"
    hover="hover:variant-soft-primary"
    regionLabel="text-primary-600"
    rounded="rounded-lg md:rounded-full"
>
    {#each categories as category}
        <RadioItem bind:group={endpoint} name="mode" value={category.endpoint}
            >{category.label}</RadioItem
        >
    {/each}
</RadioGroup>
