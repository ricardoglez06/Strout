import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { Header } from '@components/header/header'
import { Footer } from '@components/footer/footer'


@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './main-layout.html',
  styles: ``
})
export class MainLayout {

}
