<template>
    <div class="home">
        <div id="div3d"></div>
        <Menu/>
    </div>
</template>

<script>
import Menu from '@/components/menu/Index.vue';

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
    components: {
        Menu,
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
