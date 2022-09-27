abstract class Padre1{
    abstract caminar():void
    abstract gatear():void

    saludar(saludo:string):string{
        return saludo
    }
}

class Hijoo extends Padre1{
    caminar(): void {
        console.log()
    }
    gatear(): void {
        console.log()
    }
}
class otraclase extends Padre1{
    caminar(): void {
        console.log()
    }
    gatear(): void {
        console.log()
    }
}