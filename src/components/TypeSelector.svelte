<script lang="ts">
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    const types = [
        { label: 'Truth', path: '/v1/truth' },
        { label: 'Dare', path: '/api/dare' },
        { label: 'Would You Rather', path: '/api/wyr' },
        { label: 'Never Have I Ever', path: '/api/nhie' },
        { label: 'Paranoia Question', path: '/api/paranoia' },
    ];

    export let endpoint = '/v1/truth';
</script>

<RadioGroup
    active="bg-primary-600 text-white text-xl"
    background="bg-primary-200"
    border="border-2 border-primary-600"
    display="flex flex-col md:flex-row"
    hover="hover:variant-soft-primary text-xl"
    regionLabel="text-primary-600 text-xl"
    rounded="rounded-lg md:rounded-full"
>
    {#each types as type}
        <RadioItem bind:group={endpoint} name="endpoint" value={type.path}>
            {type.label}
        </RadioItem>
    {/each}
</RadioGroup>
