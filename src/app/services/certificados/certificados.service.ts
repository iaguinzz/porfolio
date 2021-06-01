import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const APIEndpoint = 'https://www.alura.com.br/api/dashboard/';

@Injectable({
    providedIn: 'root'
})
export class CertificadosService{

    constructor(public http: HttpClient){}


    getInformacoes(){
        let token = 'e3612181fc915a3a3fae6fae3244950569072c9275483d9513bc5b390b0dee1a';

        return this.http.get(APIEndpoint + token)
    }
}