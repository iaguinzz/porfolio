import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  curriculumLink: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-a0f89.appspot.com/o/Curr%C3%ADculo%20-%20IAGO%20DE%20JESUS%20SILVA.pdf?alt=media&token=6f066582-667a-4498-8aff-8327bf285b27"
  linkedinLink: string =  "https://www.linkedin.com/in/iago-silva-642665207"
  gitLink: string = "https:/github.com/iaguinzz" 
}
