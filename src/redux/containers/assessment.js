const MODULE_CLICK = "assessment module clicked";

export function moduleClick(index){
    return {
        type: MODULE_CLICK,
        index
    }
}