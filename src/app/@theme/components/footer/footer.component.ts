import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
	  <span class="created-by">Created with ♥ by <b><a href="https://www.github.com/czfadmin" target="_blank">Czfadmin</a></b> 2019</span>
	  <div class="socials">
		  <a href="https://www.github.com/czfadmin" target="_blank" class="ion ion-social-github"></a>
		  <a href="#" target="_blank" class="ion ion-social-facebook"></a>
		  <a href="#" target="_blank" class="ion ion-social-twitter"></a>
		  <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
	  </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
