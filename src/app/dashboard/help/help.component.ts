import { Component, OnInit, ElementRef } from '@angular/core';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'help-cmp',
    templateUrl: './help.component.html'
})

export class HelpComponent implements OnInit{
    test : Date = new Date();

    ngOnInit(){}
}
