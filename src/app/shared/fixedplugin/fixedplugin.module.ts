import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FixedPluginComponent } from './fixedplugin.component';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
@NgModule({
    imports: [ RouterModule, CommonModule, JWBootstrapSwitchModule ],
    declarations: [ FixedPluginComponent ],
    exports: [ FixedPluginComponent ]
})

export class FixedPluginModule {}
