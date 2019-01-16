import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
 
@Injectable({
   providedIn: 'root'
})
 
export class MetaService { 
   constructor(@Inject(DOCUMENT) private dom) { }
    
   createCanonicalURL() {
      let link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', this.dom.URL);
   }
} 