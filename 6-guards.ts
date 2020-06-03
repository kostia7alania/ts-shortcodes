// вспомогательные штуки,которые помогают пахать с типами
// typeof 
function strip(x: string | number) {
    if(typeof x === 'number')
    return x.toFixed(12)
    return x.trim()
}

// instanceof 
class MyResponce {
    header = 'resp header'
    result = 'resp res'
}
class MyError {
    header = 'err header'
    result = 'err res'
}
function handle (res: MyResponce | MyError) {
    if(res instanceof MyResponce) {
        return {
            info: res.header + res.result
        }
    }
    if(res instanceof MyError) {
        return {
            info: res.header + res.message
        }
    }
}

// === ТОК указанные значения:
type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType) {
    //...
} 
setAlertType('warning')
setAlertType('warning2') // ошибка! ИБо ток указанные значения!