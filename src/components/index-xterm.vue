<template>
  <div>
    <input v-model="v" v-on:input="v=$event.target.value" />
    ttt
    <div id="terminal" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { WebLinksAddon } from 'xterm-addon-web-links'
// import { AttachAddon } from 'xterm-addon-attach'
import { SearchAddon } from 'xterm-addon-search'

export default {
  data() {
    return {
      v: `✔ Installed 1 packages
    ✔ Linked 0 latest versions
    ✔ Run 0 scripts
    Recently updated (since 2019-05-10): 1 packages (detail see file
    /Users/baolilei/Desktop/project/felab/xterm.js/fe-source-stage/src/xterm/node_modules/.recently_updates.txt)
    Today:
    → xterm@*(3.13.1) (01:15:03)
    ✔ All packages installed (1 packages installed from npm registry, used 1s(network 1s), speed 365.87kB/s, json
    1(7.12kB), tarball 509.49kB)`,
      podName: '',
      contaName: '',
      logtxt: '',
      terminalV: {
        pid: 1,
        name: 'terminal',
        cols: 400,
        rows: 400,
      },
    }
  },
  created() {},
  mounted() {
    // this.drawTerm()
  },
  methods: {
    drawTerm() {
      let term = new Terminal({
        cursorStyle: 'underline', //光标样式
        cursorBlink: true, // 光标闪烁
        convertEol: true, //启用时，光标将设置为下一行的开头
        disableStdin: false, //是否应禁用输入。
        theme: {
          foreground: 'yellow', //字体
          background: '#060101', //背景色
          cursor: 'help', //设置光标
        },
      })
      const fitAddon = new FitAddon()
      // const attachAddon = new AttachAddon(webSocket)
      const searchAddon = new SearchAddon()

      term.loadAddon(new WebLinksAddon())
      term.loadAddon(fitAddon)
      // term.loadAddon(attachAddon)
      term.loadAddon(searchAddon)

      term.open(document.getElementById('terminal'))

      searchAddon.findNext('foo')

      term.write(`${this.v}`)
      term.focus()
      // term.fit()
    },
  },
}
</script>

<style scoped>
.kkkkk {
  width: 80px;
}
</style>
