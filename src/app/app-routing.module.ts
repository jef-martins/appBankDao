import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateGeralModule } from './transferencias/component/template-geral/template-geral.module';

const routes: Routes = [
  {path: '', loadChildren:() =>
    import('./transferencias/component/template-geral/template-geral.module')
      .then(x => x.TemplateGeralModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
