export default class CampusManage {
    constructor(app = uino.app, map = uino.map) {
        this.app = app;
        this.map = map;
        this.campusList = new Map(); // 保存campus
    }

    create(params) {
        let campusThings = this.app.query(`#campus_${params.id}`)[0];
        if (!campusThings) {
            campusThings = this.app.create({
                type: 'Campus',
                name: `campus_${params.name}`,
                id: `campus_${params.id}`,
                position: CMAP.Util.convertLonlatToWorld(params.coordinates, 2),
                angles: CMAP.Util.getAnglesFromLonlat(params.coordinates, 0),
                url: params.url,
                userData: params.userData,
            });
        }
        return campusThings;
    }

    destroy(id) {
        const campus = this.app.query(`#campus_${id}`)[0];
        if (campus) {
            campus.destroy();
        }
    }

    /**
     *@description: 显示园区
     *@author: 章曼霞
    */
    show(id) {
        const campus = this.app.query(`#campus_${id}`)[0];
        if (campus) {
            campus.visible = true;
        }
    }

    hide(id) {
        const campus = this.app.query(`#campus_${id}`)[0];
        if (campus) {
            campus.visible = false;
        }
    }

    // 切换到园区层级
    levelChange(id) {
        const campus = this.app.query(`#campus_${id}`)[0];
        if (campus) {
            this.app.level.change(id);
        }
    }
}
