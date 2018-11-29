var obj = {
    name: "Praveen",
    page_title: "Board XChange"
}

class Values {



    constructor() {
        // invokes the setter


    }
    getName() {
        return this.name;
    }

    getValue(param) {
        

        return obj[param];
    }

}

export default Values;
