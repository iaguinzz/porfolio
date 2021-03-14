import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'pt-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  conhecimentos = [
    "API rest",
    "Data mining",
    "Software development",
    "Automação Selenium",
    "Scripts"
  ]

  experiencias: Experiencia[] = [
    {
      cargo: "Python Developer",
      company: "Freelancer",
      desc: "Atuação em projeto Freelancer - Website de perguntas e respostas, FRONT-END: React e BACKEND: Python Django.",
      periodo: "2020 - 2021",

    },
    {
      cargo: "Python Developer",
      company: "Freelancer",
      desc: "Atuação em projeto Freelancer - Software de monitoramento de computadores (semelhante ao TeamViewer).",
      periodo: "2021 - 2021",

    },
    {
      cargo: "Python Developer",
      company: "Freelancer",
      desc: 'Aplicativo Mobile "Lixeira Eletrônica - Elixo" responsável por fazer conexão com hardware(Raspberry PI), FRONT-END: Flutter, BACK-END: Python Flask.',
      periodo: "2019 - 2020",

    },
    {
      cargo: "Python Developer",
      company: "Freelancer",
      desc: 'Aplicativo Mobile "Animais de Rua" App para registrar no mapa animais abandonados, FRONT-END: Flutter, BACK-END: Python Django.',
      periodo: "2018 - 2021",

    }
  ]


  formacoes: Formacao[] = [
    {
      periodo: "2021 - 2021",
      title: "API com Django 3",
      instituicao: "Alura",
      desc: 'O Django Rest Framework, também conhecido como DRF, é capaz de criar APIs altamente escaláveis e com um poder de fogo gigantesco, sem precisar construir a maior parte dela "from scratch".'
    },
    {
      periodo: "2021 - 2021",
      title: "Design Patterns",
      instituicao: "Alura",
      desc: 'Design Patterns também conhecido como padrões de projetos, são soluções flexíveis e elegantes para nosso código. E foi isso que eu aprendi nesse curso, um código de qualidade gera um ambiente mais harmônico e torna o trabalho em equipe menos infeliz!'
    },
    {
      periodo: "2021 - 2021",
      title: "Angular Fundamentos",
      instituicao: "Alura",
      desc: 'Nesse treinamento aprendi a construir magníficas aplicações web usando o Framework da Google, Angular 2+. Sou capaz de construir aplicações SPA, responsivas que consuma APIs e banco dados, tudo isso com uma extraordinária performance.'
    },

]

  projetos: Projeto[] = [
    {
      title: 'TGS TI',
      desc: 'Site empresarial',
      img: 'assets/imgs/tgsti.png',
      url: 'https://tgs-ti.web.app/'
    }
  ]

  constructor() { }


  

  

}

class Experiencia{
  cargo: string;
  company: string;
  desc: string;
  periodo: string
}

class Formacao{
  title: string;
  instituicao: string;
  desc: string;
  periodo: string
}

class Projeto{
  title: string;
  desc: string;
  img: string;
  url: string;
}