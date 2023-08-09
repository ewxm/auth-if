import type { App } from "vue";

interface AuthOptions {
    /**
     * 指令名
     * 例如：auth-if、${projectName}-if
     */
    name: string;
    /**
     * 提供一个允许跳过权限检测的字符串数组
     * 例：允许管理员查看全部的内容时，可以把管理员角色和权限传入：['admin']
     */
    skips: string[];
    /**
     * 根据指令参数提供当前用户的权限、角色等等字符串数组
     * @param arg 自定义指令的参数：用于区分类型（类型指权限、角色...）
     */
    provide: (arg: string) => string[];
}

/**
 * 默认指令名：auth-if
 * 如需自定义指令可在使用插件时传入 name 
 */
const DEFAULT_DIRECTIVE_NAME = 'auth-if'

/**
 * 指令值异常
 */
const ERROR_TYPE_VALUE = 'The value passed to the directive is an array.'

export default {

    install: (app: App, options: AuthOptions) => {
        
        const {
            name,
            skips = [],
            provide
        } = options

        // 注册指令名
        const directiveName = name || DEFAULT_DIRECTIVE_NAME

        app.directive(directiveName, {
            mounted(el, binding /** , vnode, prevVnode */) {
                const { arg = '', value = [] } = binding

                // 测试指令值是否在测试序列中
                // 结果：如果指令值不在测试序列中，则从 DOM 中移除指令绑定的元素
                const test = (values: string[]) => {
                    console.log(values);
                    if (!Array.isArray(values)) {
                        throw new Error(ERROR_TYPE_VALUE)
                    } 
                    const has = values.some((v) => {
                        return skips.includes(v) || value.includes(v)
                    })

                    if (!has) {
                        el.parentNode ? el.parentNode.removeChild(el) : el.style.display = 'none'
                    }
                }
                test(provide(arg))
            }
        })
    }
}