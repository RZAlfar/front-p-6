class Cal{

constructor(prevText , curText){
  this.prevText = prevText; 
  this.curText = curText;
  this.clear();
}
  clear(){
    this.prev = '';
    this.cur = '';
    this.op = undefined;
  }
  
  del(){
    this.cur = this.cur.toString().slice(0, -1);
  }
  
  append(num){
    if (num === '.' && this.cur.includes('.')) return;
    this.cur = this.cur.toString() + num.toString();
  }
  
  choose_op(op) {
  
    if (this.cur === '') return;
    if (this.prev !== '') {
      this.compute();
    }
    this.op = op;
    this.prev = this.cur;
    this.cur = '';
    
  }
  compute(){
  // convert inserted value inside buttons to a float to start calculations
    let result;
    const pre = parseFloat(this.prev);
    const cu = parseFloat(this.cur)
    if (isNaN(pre) || isNaN(cu)) return;
    
    switch(this.op){
      case '+':
        result = pre + cu;
      
        break;
      case '-':
        result = pre - cu;
        break;
      case '÷':
        result = pre / cu;
        break;
      case '*':
        result = pre * cu;
        break;
      
      default:
        return;
      
    }
    this.cur = result;
    this.prev = '';
    this.op = undefined;
    
  }
  
  getResult(num){
    const stringNum = num.toString();
    const int = parseFloat(stringNum.split('.')[0]);
    const decimal = stringNum.split('.')[1];
    let intDisplay;
    // int
    // split int with a (,)
    if (isNaN(int)) {
      intDisplay = '';
    } else {
      intDisplay = int.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    // decimal=======
    if (decimal != null) {
      return `${intDisplay}.${decimal}`;
    }else{
      return intDisplay;
    }
  }
  
  
  updateDisplay(){
  // display the final result (int and decimal)
    this.curText.innerText = this.getResult(this.cur);
    if(this.op != null){
      this.prevText.innerText=`
      ${this.getResult(this.prev)} ${this.op}
      `
    }else{
    this.prevText.innerText =''
    }
  }
}


const op = document.querySelectorAll('[data-op]');
const num = document.querySelectorAll('[data-num]');
const del = document.querySelector('[data-del]');
const ac = document.querySelector('[data-ac]');
const equal = document.querySelector('[data-equ]');
const prevText = document.querySelector('[data-prev]');
const curText = document.querySelector('[data-current]');


const cal = new Cal(prevText,curText);

num.forEach(button =>{
button.addEventListener('click', () => {
  cal.append(button.innerText);
  cal.updateDisplay();
})
}
)

op.forEach(button =>{
button.addEventListener('click',()=>{
  cal.choose_op(button.innerText);
  cal.updateDisplay();
  
})
})

equal.addEventListener('click', button => {
  cal.compute();
  cal.updateDisplay();
});

del.addEventListener('click', button =>{
  cal.del();
  cal.updateDisplay();
})

ac.addEventListener('click', button=>{
  cal.clear();
  cal.updateDisplay();
})
