import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { RouteComponent } from "./route/route.component";
import { YzLayoutComponent, ActGuard, DisplayIndexComponent } from "yunzai8";
import { SimpleErrorComponent } from "yunzai8";
import {TesComponent} from './tes/tes.component';

const routes: Routes = [
  {
    path: "",
    component: YzLayoutComponent,
    data: { breadcrumb: "主页", description: "这是主页面" },

    canActivate: [ActGuard],
    canActivateChild: [ActGuard],
    children: [
        { path: "route", redirectTo: "RouteComponent"},
      {path: "demo",component: DemoComponent,
        data: {breadcrumb: "DEMO TITLE",description: "demo页面是一个具有xxxx功能的xxxxxxxxxxxxxxx的页面xxxxx"
        }
      },
      {path: "route",component: RouteComponent},

      

      { path: "displayIndex", component: DisplayIndexComponent },
      { path: "error/:status/:desc", component: SimpleErrorComponent },
      { path: 'tes', component: TesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
