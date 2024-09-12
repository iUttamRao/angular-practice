import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  calculatorList = ["%", "/", "C", "⌫", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="]
  input = ""

  calculate = () => {
    try {
      this.input = eval(this.input).toString()
    }
    catch (err: any) {
      alert(err)
    }
  }

  buttonClicked = (item: string) => {
    if (item === '=') {
        this.calculate(); 
    } else if (item === 'C') {
      this.input = ''; 
    } else if (item === '⌫') {
      this.input = this.input.slice(0, -1); 
    } else if (item === '+/-') {
      if (this.input.startsWith('-')) {
        this.input = this.input.slice(1);
      } else {
        this.input = '-' + this.input;
      }
    } else {
      this.input += item;
    }
  }

}
