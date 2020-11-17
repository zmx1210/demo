<template>
    <div class="home">
        <div id="div3d"></div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {

        };
    },
    computed: {
    },
    watch: {

    },
    mounted() {
        this.initEarth();
    },
    methods: {
        initEarth() {
            uino.app = new THING.App({
                container: 'div3d',
            });
            uino.map = uino.app.create({
                type: 'Map',
                url: '/static/templete/map/map.json',
                // repairCamera: false,
                terrainUrl: '',
                resourceConfig: {
                    resourcePrefix: '/static/templete/map',
                    // baseLayerUrls: [CONFIG_MAP.url],
                },
                complete: () => {
                },

            });
        },
    },
};
</script>
