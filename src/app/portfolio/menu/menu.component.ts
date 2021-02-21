import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'pt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  constructor() { }

  
  ngAfterViewInit(): void {

    var btns = $(".link-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = $('.active');
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


$('.top-menu').on('click', 'a', function(){
  $('.animated').addClass('d')
  var id = $(this).attr('href');
  $(id).removeClass('d');
  $(id).addClass('animated fadeInLeft');
})


}

  
}
