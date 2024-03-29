import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { PaymentService } from './services/paymentservice';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RightsAndAttributesComponent } from './rights-and-attributes/rights-and-attributes.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
    declarations: [
        AppComponent,
        RightsAndAttributesComponent,
        AttributesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        DropdownModule,
        CheckboxModule,
        RadioButtonModule,
        ToolbarModule,
        FieldsetModule
    ],
    providers: [PaymentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
