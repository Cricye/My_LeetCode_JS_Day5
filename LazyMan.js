// 要求设计 LazyMan 类， 实现以下功能
//题目：
LazyMan('Curry');
// Hi I an Curry
LazyMan('Curry').sleep(10).eat('lunch');
// Hi I am Curry
// 等待了10秒...
// I am eating
lunchLazyMan.eat('lunch').sleep(10).eat('dinner');
// Hi I am Curry
// I am eating lunch
// 等待了10秒...
// I am eating
dinnerLazyMan('Curry').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Curry
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

//------------------------------------------------------------------------------------------

//解答：
class LazyManClass {
    constructor(name) {
        this.name = name
            this.queue = []
            console.log(`等待了${time}秒...`)
            setTimeout(() => {
                this.next()
            }, 0)
    }
    sleepFirst(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`)
                this.next()
            }, time)
        }
        this.queue.push(fn)
        return this
    }
    next() {
        const fn = this.queue.shift()
        fn && fn()
    }
}

function LazyMan(name) {
    return new LazyManClass(name)
}