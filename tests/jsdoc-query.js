// Test at https://estools.github.io/esquery/

// Top-Level arrow-function MUST HAVE a jsdoc.
const arrowFuncMustHaveComment = () => {};

// Top-Level function MUST HAVE a jsdoc.
function funcMustHaveComment() {}

// Functions defined directly as an function argument
// MAY have a jsdoc.
console.log(() => {
  return;
});

const d = {
  // Function as property MAY have a jsdoc.
  someFunc() {
    return;
  },
};
