/* https://github.com/kozakdenys/qr-code-styling */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvasER: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    let canvas = this.canvasER.nativeElement;

    const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      margin: 14,
      data: 'https://www.clinidev.com/',
      // image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded',
      },
      backgroundOptions: {
        color: '#e9ebee',
      },
      // imageOptions: {
      //   crossOrigin: "anonymous",
      //   margin: 14,
      // },
      type: 'svg',
    });

    qrCode.append(canvas);
  }
}
