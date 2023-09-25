<script lang="ts">
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    const categories = [
        { label: 'Truth', endpoint: '/v1/truth' },
        { label: 'Dare', endpoint: '/api/dare' },
        { label: 'Would You Rather', endpoint: '/api/wyr' },
        { label: 'Never Have I Ever', endpoint: '/api/nhie' },
        { label: 'Paranoia Question', endpoint: '/api/paranoia' },
    ];

    export let endpoint: string;
</script>

<RadioGroup>
    {#each categories as category}
        <RadioItem bind:group={endpoint} name="mode" value={category.endpoint}
            >{category.label}</RadioItem
        >
    {/each}
</RadioGroup>
