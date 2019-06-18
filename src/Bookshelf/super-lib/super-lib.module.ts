import {NgModule} from "@angular/core";
import { SuperLibComponent } from './super-lib.component';

@NgModule({
    declarations: [SuperLibComponent],
    exports: [SuperLibComponent]
})
export class SuperLibModule{}


//TO BUILD THE LIBRARY:
//npm run build-lib