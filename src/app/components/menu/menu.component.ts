import {Component} from '@angular/core';
import { EngineService } from '../engine/engine.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  public constructor(private engServ: EngineService) { }

  // ファイルを開く
  public open(event) {

    const file = (event.target.files as FileList)[0];
    if (file) {
      this.loadIFCFile(file);
    }
    event.target.value = "";

  }

  // IFCファイルの読み込み
  public loadIFCFile(file: File) {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const buffer = new Uint8Array(event.target?.result as ArrayBuffer)
      await this.engServ.loadIFCFile(buffer);
    };
    reader.readAsArrayBuffer(file);
  }

}
