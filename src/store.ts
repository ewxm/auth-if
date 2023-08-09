import { reactive } from "vue";

/**
 * 全局状态
 */
const appStore = reactive({
    roles: [
        // 管理员权限
        "admin",
        // 菜单管理员
        "admin-menu"
    ],
    permissions: [
        // 最大权限
        "*:*:*",
        // 允许菜单下载
        "setting:menu:download",
        // 允许菜单上传
        "setting:menu:upload",
        // 允许菜单导出
        "setting:menu:export",
        // 允许菜单导入
        "setting:menu:import",
        // 允许菜单删除
        "setting:menu:delete",
    ]
})

/**
 * 使用全局状态
 */
export function useStore() {
    return appStore
}