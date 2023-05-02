export class Contact{
    name="";
    surname="";
    email="";
    connected;
    constructor(name='',surname='',email='',connected=false) {
        if (typeof(name)==='string') {
            this.name=name;
            this.surname=surname;
            this.email=email;
            this.connected=connected;
        }
        else{
            this.name=name.name;
            this.surname=name.surname;
            this.email=name.email;
            this.connected=name.connected;
        }
    }

    toggleConnected(){
        this.connected=!this.connected;
    }
    
}