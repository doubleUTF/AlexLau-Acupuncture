import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
   providedIn: 'root'
})

export class MetaService {
   constructor(@Inject(DOCUMENT) private dom) { }

   link: HTMLLinkElement = this.dom.createElement('link');
   createCanonicalURL() {
      this.link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(this.link);
      this.link.setAttribute('href', this.dom.URL);
   }

   deleteCanonicalURL(){
      this.dom.head.removeChild(this.link);
   }
}
