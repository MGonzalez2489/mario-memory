import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'gameboard',
    loadChildren: () =>
      import('./game-board/game-board.module').then((m) => m.GameBoardModule),
  },
  { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
