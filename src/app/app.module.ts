import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ToolbarModule } from 'primeng/toolbar';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbFormFieldModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSelectModule, NbTabsetModule, NbThemeModule, NbUserModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';

import { LoginComponent } from './transferencias/component/login/login.component';
import { ContainerComponent } from './transferencias/container/container.component';


import { HeaderComponent } from './transferencias/component/header/header.component';
import { AcoesHeaderComponent } from './transferencias/component/acoes-header/acoes-header.component';
import { MenuComponent } from './transferencias/component/menu/menu.component';
import { SaldoComponent } from './transferencias/component/saldo/saldo.component';
import { SaqueComponent } from './transferencias/component/saque/saque.component';
import { BorderDirective } from './transferencias/component/deposito/diretiva.directive';
import { NgControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateGeralModule } from './transferencias/component/template-geral/template-geral.module';
import { TemplateGeralComponent } from './transferencias/component/template-geral/template-geral.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { DepositoComponent } from './transferencias/component/deposito/deposito.component';
import { UserComponent } from './transferencias/component/user/user.component';
import { ClienteComponent } from './transferencias/component/cliente/component/cliente.component';
import { ExtratoComponent } from './transferencias/component/extrato/component/extrato.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExtratoComponent,
    DepositoComponent,
    SaqueComponent,
    ClienteComponent,
    SaldoComponent,
    ContainerComponent,
    HeaderComponent,
    AcoesHeaderComponent,
    MenuComponent,
    BorderDirective,
    TemplateGeralComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    PasswordModule,
    ToolbarModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    AvatarModule,
    AvatarGroupModule,
    MenuModule,
    NbActionsModule,
    NbInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateGeralModule,
    NbSelectModule,
    NbFormFieldModule,
    NbDatepickerModule.forRoot(),
    NbTabsetModule,
    NbListModule,
    NbCheckboxModule,
    HttpClientModule,
    NbDatepickerModule,
    NbContextMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
