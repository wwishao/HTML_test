let that;
class Tab {
    constructor(id) {
        that = this
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.tabscon = this.main.querySelector('.tabscon');
        this.init();
    }
    // 获取li和section
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.section = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    // 初始化
    init() {
        this.updateNode();
        this.add.onclick = this.addTab;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.section[i].ondblclick = this.editTab;
        }
    }
    // 1.切换功能
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.section[this.index].className = 'conactive';
    }
    // 清除样式
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.section[i].className = '';
        }
    }
    // 2.添加功能
    addTab() {
        that.clearClass();
        const li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        const section = `<section class="conactive">新选项卡测试${Math.random()}</section>`
        that.ul.insertAdjacentHTML('beforeend', li)
        that.tabscon.insertAdjacentHTML('beforeend', section)
        that.init();
    }
    // 3.删除功能
    removeTab(e) {
        e.stopPropagation(); // 阻止冒泡
        let index = this.parentNode.index
        that.lis[index].remove();
        that.section[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].click();
    }
    //4.修改功能
    editTab() {
        let text = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); // 双击禁止选中文字
        this.innerHTML = `<input type="text" value="${text}" />`
        let input = this.children[0];
        input.select(); // 选中文本框文字
        //鼠标离开文本框把值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }
        // 按下回车键也触发离开事件
        input.onkeyup = function (e) {
            if(e.keyCode === 13){
                this.blur();
            }
        }
    }
}

new Tab('#tab');