/**
 * Private Properties
 * 私有属性
 */

class ClassWithPrivateField {
    #age=18

    getAge() {
        return this.#age
    }

    setAge(age) {
        this.#age = age
    }
}

const c = new ClassWithPrivateField()
console.log(c.getAge())

c.setAge(20)
console.log(c.getAge())

// console.log(c.#age) 报错

/*

18
20

 */