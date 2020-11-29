<!--图层菜单-->
<!--顶部菜单-->
<template>
    <div class="menu" ref="menu">
        <div class="menu-item" v-for="(item, index) in menuList" :key="index + '_level_one'">
            <div :class="{
                     'item-name': true,
                     'click-style': clickMenuList.indexOf(item.name)>-1}"
                 @click="choose(item)">
                {{item.name || ''}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            key: '园区经济', // 当前点击的按钮
            cameras: { // 业务视角
                economics: uino.INIT_CAMERA,
                business: uino.business_CAMERA,
                ecological: uino.ecological_CAMERA,
                safeproduction: uino.safeproduction_CAMERA,
                enjoy: uino.enjoy_CAMERA,
                partybuild: uino.partybuild_CAMERA,
            },
            isShow: true,
            clickMenuList: [],
        };
    },
    mounted() {
        // 默认选中第一个园区经济按钮
        // this.choose(this.menuList[0]);
    },
    props: {
        menuList: {
            type: Array,
            default() {
                return [ // 菜单列表项
                    {
                        name: '园区经济', type: 'economics', camera: uino.INIT_CAMERA,
                    },
                    { name: '智行商务', type: 'business', camera: uino.business_CAMERA },
                    { name: '智效政务', type: 'affairs', camera: uino.ecological_CAMERA },
                    { name: '智享民生', type: 'enjoy', camera: uino.safeproduction_CAMERA },
                    { name: '智慧党建', type: 'partybuild', camera: uino.partybuild_CAMERA },
                ];
            },
        },
        check: {
            type: Boolean,
            default: false,

        },
    },
    methods: {
        /**
         * @des 菜单按钮点击事件
         * @params {Object} value 按钮包含的属性值
         */
        choose(item) {
            if (this.check) {
                if (this.clickMenuList.indexOf(item.name) > -1) {
                    this.clickMenuList.splice(this.clickMenuList.indexOf(item.name), 1);
                } else {
                    this.clickMenuList.push(item.name);
                }
            } else {
                if (this.clickMenuList.indexOf(item.name) > -1) { return; }
                this.clickMenuList = [item.name];
            }
            this.cameraChange(item); // 业务视角切换
            this.changePage(item);
            // window.pageConfig.changePage(value.name);
        },
        /**
         * @des 视角切换
         * @params {Object} value 当前业务属性对象
         */
        cameraChange(value) {
            const angle = value.camrea;
            if (angle) {
                uino.app.camera.earthFlyTo({
                    ...angle,
                    complete: () => {
                    },
                });
            }
        },
        changePage(value) {
            console.log(value);
        },
    },
};
</script>

<style lang="scss" scoped>
    .menu {
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 29px;
        // margin-right: 28px;
        user-select: none;

        .menu-item {
            display: flex;
            flex-direction: column;
            width: 110px;
            min-height: 29px;
            margin: 0 5px;
            background-color: rgba(255, 255, 255, 0.2);
            transition: background-color 0.3s, color 0.3s;

            .item-name {
                width: 110px;
                height: 29px;
                color: #fff;
                // font-family: Source Han Sans CN;
                font-weight: 500;
                font-size: 16px;
                font-family: SourceHanSansCN-Medium, sans-serif;
                line-height: 29px;
                text-align: center;
                transition: background-color 0.3s, color 0.3s;
                cursor: pointer;
            }

            .item-name:hover {
                color: #000 !important;
                // background-color: #706c60;
                transition: background-color 0.3s, color 0.3s;
            }
        }
    }

    .click-style { // 按钮被点击后触发的样式
        color: #000 !important;
        background-color: #ffbe11;
        transition: background-color 0.3s, color 0.3s;
    }
</style>
