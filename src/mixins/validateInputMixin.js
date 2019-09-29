export default {
  methods: {
    // Validates input in a textbox
    // returns false if input is empty 
    // returns the new input after validation
    validateInput(input) {
      if(input !== "") {
        input = input.trim();
        if(input !== "") {
          return input;
        }else{
          return false;
        } 
      }else{
        return false;
      }
    }
  }
}