const fs = require('fs')
const path = require('path')
// env环境变量的路径
const envPath = path.resolve(__dirname, '../.env')
// env对象
const envObj = parse(fs.readFileSync(envPath, 'utf8'))
const SERVER_ID = parseInt(envObj['VUE_APP_SERVER_ID'])

function parse (src) {
    // 解析KEY=VAL的文件
    const res = {}
    src.split('\n').forEach(line => {
        // matching "KEY' and 'VAL' in 'KEY=VAL'
        const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/)
        // matched?
        if (keyValueArr != null) {
            const key = keyValueArr[1]
            let value = keyValueArr[2] || ''

            // expand newlines in quoted values
            const len = value ? value.length : 0
            if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
                value = value.replace(/\\n/gm, '\n')
            }

            // remove any surrounding quotes and extra spaces
            value = value.replace(/(^['"]|['"]$)/g, '').trim()

            res[key] = value
        }
    })
    return res
}

const SERVER_LIST = [
    {
        id: 0,
        name: '生产环境',
        domain: 'www.tzchuan.com',
        host: '120.79.73.88',
        port: 22,
        username: 'root',
        password: '981710Tzc',
        path: '/root/projects/my-site-vue/'
    }
]

module.exports = SERVER_LIST[SERVER_ID]