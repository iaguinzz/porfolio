import { Component, OnInit } from '@angular/core';
import { CertificadosService } from '../../services/certificados/certificados.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  constructor(private certService: CertificadosService) { }

  data: any;

  ngOnInit(): void {
    this.getInformacoes()
  }

  getInformacoes(){
    this.certService.getInformacoes().subscribe(data => this.data = data)
  }

}
