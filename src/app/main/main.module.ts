import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './containers/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { RangeComponent } from './components/range/range.component';
import { CorniceProfileComponent } from './components/cornice-profile/cornice-profile.component';
import { PaintComponent } from './components/paint/paint.component';
import { PanelInfoComponent } from './shared/components/panel-info/panel-info.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [MainComponent, SidebarComponent, StickyHeaderComponent, RangeComponent, CorniceProfileComponent, PaintComponent, PanelInfoComponent, PanelComponent, ColorPaletteComponent, ModalComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
