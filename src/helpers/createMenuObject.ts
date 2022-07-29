type MenuOptions = ''|'all'|'dog'|'cat'|'fish'

export const createMenuObject = (activeMenu: MenuOptions) =>{

    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    //se activeMenu não estiver vazio, então returnObject será true
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }

    return returnObject
}