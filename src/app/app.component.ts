import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule}   from "@angular/forms";
import { NewitemComponent } from './newitem/newitem.component';


class Item{
  purchase: string;
  done: boolean;
  price: number;
  constructor(_purchase: string, _price: number)
  {
    this.purchase = _purchase;
    this.price = _price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NewitemComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})



export class AppComponent {
@Input() text: string = "";
@Output() textChange = new EventEmitter<String>();
  name = "Tom";
    age = 24;
clicks = 0;
price: number = 0;
total_price: number = 0;
items: Item[] = [];
current_item: Item = new Item("", 0);
changeNameEvent():void {
this.text = "";
this.price = 0;
this.textChange.emit(this.text);
}
onChanged(increased:boolean){
  increased?this.clicks++:this.clicks--;
}
addItem(text: string,price: number): void 
{
  if(text == null || text.trim() == "" || price == null)
    return;
  this.items.push(new Item(text, price));
  
}
dellItem(item: Item):void 
{

  const index = this.items.indexOf(item)
  console.log(index);
  if(index < 0)
    return;
  const temp:Item[]  = [];
  this.items.forEach((value:Item) =>
  {
if(value !== item)
  temp.push(value)
  });
  this.items = temp;
 
} 
clickCheck(event:Event, item:Item)
{
  if(item.done == true)
    {
      this.total_price += item.price
    }
  else 
    {
      this.total_price -= item.price
    }
  } 
}
