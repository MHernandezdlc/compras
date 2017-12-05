import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
attributes:Array<number> = [];
    values:Array<string> = [];
    

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

    valChange(value:string, index:number):void{
        this.values[index] = value;
        
    }

    addInput():void{
        this.attributes.push(this.attributes.length);
        this.values.push('');
    }

    removeInput(index:number):void{
        this.attributes.splice(index, 1);
        this.values.splice(index, 1);
    }

    getValues():void{
        console.log(this.values);
    }

}

