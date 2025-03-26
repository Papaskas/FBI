import { ElementRef, Injectable } from '@angular/core';
import JsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  private readonly pdf: JsPDF;

  constructor(private readonly elementRef: ElementRef) {
    this.pdf = new JsPDF();

    this.pdf.html(elementRef.nativeElement, {
      callback: (doc) => {
        doc.save('doc.pdf');
      },
    });
  }
}
