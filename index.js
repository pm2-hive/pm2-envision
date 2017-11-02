const pmx = require('pmx')
const cp = require('child_process')

let conf

cp.exec('pidof electron', (err, stdout, stderr) => {
  let pids = stdout.trim().split(' ').map(elm => parseInt(elm)).sort()
  let pid = pids[0]
  console.log(pid)

  conf = pmx.initModule({
    pid,
    widget: {
      logo: 'https://camo.githubusercontent.com/79904b8ba0d1bce43022bbd5710f0ea1db33f54f/68747470733a2f2f7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652d656c656374726f6e2f6d61737465722f656c656374726f6e2d6c6f676f2e737667',
    }
  })

})

setInterval(() => {}, 10000)
