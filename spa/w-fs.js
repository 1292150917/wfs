/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-09-09 09:15:00
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-09-09 11:45:17
 */
// 初始化config数据
if (window.require) {

} else {

}
function install() {
    window.wFs = wFs()
}
function wFs() {
    var obj = {}
    obj.readFileSync = async function (url, uft) {
        return await fs('readFileSync', {
            url, uft
        })
    }
    obj.writeFile = async function (url, data, callback) {
        return await fs('writeFile', {
            url,
            data
        }).then(s => {
            callback(s)
        })
    }
    return obj
}
function fs(type, data) {
    return new Promise((parent) => {
        axios({
            url: 'http://127.0.0.1:9985/' + type,
            method: 'post',
            data: data,
            transformRequest: [function (data) {
                // Do whatever you want to transform the data
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }]
        }).then(s => {
            parent(s.data)
        })
    })
}