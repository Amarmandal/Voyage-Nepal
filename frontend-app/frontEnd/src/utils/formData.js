class FormData {
    #data = {};
  
    constructor(keyVal) {
      this.#data = keyVal;
    }
  
    addData(keyVal) {
      this.#data = {
        ...this.#data,
        ...keyVal
      };
    }
  
    getData() {
      return {...this.#data};
    }
  }
  
  export default FormData;