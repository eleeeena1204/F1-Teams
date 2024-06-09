import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { ViewItemComponent } from '../view-item/view-item.component';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { Item } from '../item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ViewItemComponent, EditItemComponent]
})
export class MainPage {
  allItems: Item[] = [
    {id: 1, tipo: 'coche', imagen: 'assets/img/AlpineA524.jpg', nombre: 'Alpine A524', descripcion: 'El cambio de marca del equipo en 2021 marcó el siguiente paso en el resurgimiento de Renault en la F1. Ya ganadores de la carrera con su nueva apariencia, podios regulares y aspiraciones al título deben ser su próximo objetivo.'},
    {id: 2, tipo: 'piloto', imagen: 'assets/img/AlpineEstebanOcon.png', nombre: 'Esteban Ocon', descripcion: 'En 2014, Ocon se abrió paso en el mundo de los monoplazas, venciendo a un tal Max Verstappen por el título europeo de F3. Respaldado por Mercedes, ganó el título de GP3 al año siguiente.'},
    {id: 3, tipo: 'piloto', imagen: 'assets/img/AlpinePierreGasly.png', nombre: 'Pierre Gasly', descripcion: 'El piloto francés fue convocado para debutar en 2017 en Malasia en lugar de Daniil Kvyat y fue nombrado piloto de Toro Rosso al año siguiente. Tras 21 carreras más, Gasly ascendió nuevamente, esta vez para reemplazar a Daniel Ricciardo.'},
    {id: 4, tipo: 'coche', imagen: 'assets/img/AstonMartinAMR24.jpg', nombre: 'Aston Martin AMR24', descripcion: 'Este equipo de F1 no es ajeno al éxito, ya que ganó como Racing Point en 2020. Reconocido por su capacidad para superar su peso, y ahora con un bi-cambpeón liderando su alineación de pilotos, Aston Martin es un equipo a seguir.'},
    {id: 5, tipo: 'piloto', imagen: 'assets/img/AstonMartinLanceStroll.png', nombre: 'Lance Stroll', descripcion: 'Un corredor oportunista, subió al podio en Bakú, siendo el novato más joven en hacerlo. Como hijo de un empresario adinerado, Stroll está acostumbrado a un estilo de vida con champán, pero ahora sabe que la efervescencia sabe aún más dulce en la tribuna.'},
    {id: 6, tipo: 'piloto', imagen: 'assets/img/AstonMartinFernandoAlonso.png', nombre: 'Fernando Alonso', descripcion: 'Alonso no se avergüenza de su talento, calificándose a sí mismo como 9/10 “en todo”, y pocos estarían en desacuerdo, con sus actuaciones en la F1 caracterizadas por una velocidad vertiginosa, un pensamiento táctico brillante, un arte de carrera ejemplar.'},
    {id: 7, tipo: 'coche', imagen: 'assets/img/FerrariSF24.jpg', nombre: 'Ferrari SF24', descripcion: 'Para muchos, Ferrari y la Fórmula 1 se han vuelto inseparables. El único equipo que ha competido en todas las temporadas desde que comenzó el campeonato mundial, ha crecido hasta convertirse en una de las marcas más icónicas y reconocidas del mundo.'},
    {id: 8, tipo: 'piloto', imagen: 'assets/img/FerrariCharlesLeclerc.png', nombre: 'Charles Leclerc', descripcion: 'Leclerc mostró destellos de ritmo vertiginoso los sábados y brillantez en las carreras los domingos, arrastrando su Sauber más allá de sus límites y ganándose un asiento de carrera en Ferrari, poniéndose en la piel del último campeón mundial de la escudería.'},
    {id: 9, tipo: 'piloto', imagen: 'assets/img/FerrariCarlosSainz.png', nombre: 'Carlos Sainz', descripcion: 'El español es inteligente además de instintivo, lo que le acompaña fuera de la pista, donde permanece imperturbable ante las presiones de forjar una carrera en Grandes Premios con un nombre famoso.'},
    {id: 10, tipo: 'coche', imagen: 'assets/img/HaasVF24.jpg', nombre: 'Haas VF24', descripcion: 'Haas, el equipo más joven de la parrilla, hizo su impresionante debut en 2016 y, en el proceso, se convirtió en el primer equipo de F1 liderado exclusivamente por estadounidenses en tres décadas.'},
    {id: 11, tipo: 'piloto', imagen: 'assets/img/HaasKevinMagnussen.png', nombre: 'Kevin Magnussen', descripcion: 'Puede que sea un piloto de F1 de segunda generación, pero los ídolos de Magnussen son de la "era dorada" de los Grandes Premios, cuando jugadores como Juan Manuel Fangio y Stirling Moss lo arriesgaban todo por amor al deporte.'},
    {id: 12, tipo: 'piloto', imagen: 'assets/img/HaasNicoHulkenberg.png', nombre: 'Nico Hulkenberg', descripcion: 'Hulkenberg dominó las condiciones cambiantes de la pista para lograr una brillante pole en Brasil. Su capacidad para acumular puntos constantemente lo ha convertido en un jugador de equipo muy valorado.'},
    {id: 13, tipo: 'coche', imagen: 'assets/img/McLarenMCL38.jpg', nombre: 'McLaren MCL38', descripcion: 'Desde que ingresó al deporte en 1966 bajo la guía y el incansable esfuerzo de su fundador, el éxito de McLaren ha sido impresionante. Cinco brillantes décadas han dado lugar a innumerables victorias, poles y podios.'},
    {id: 14, tipo: 'piloto', imagen: 'assets/img/McLarenLandoNorris.png', nombre: 'Lando Norris', descripcion: 'McLaren tuvo al adolescente británico en sus libros durante dos años antes de acelerarlo hacia la galaxia de estrellas de la F1 en 2019. Un petardo en su carrera junior, Con una predilección por las poles y las peleas rueda con rueda, Norris no los defraudó.'},
    {id: 15, tipo: 'piloto', imagen: 'assets/img/McLarenOscarPiastri.png', nombre: 'Oscar Piastri', descripcion: 'Nacido en Melbourne, cerca de la sede del Gran Premio de Australia, los sueños del joven Oscar Piastri de competir algún día en la Fórmula 1 se encendieron cuando los pilotos estrella de este deporte rugieron en las calles de Albert Park.'},
    {id: 16, tipo: 'coche', imagen: 'assets/img/MercedesW15.jpg', nombre: 'Mercedes W15', descripcion: 'El renacimiento de Mercedes en la F1 comenzó con la creación de un equipo oficial para 2010, un ascenso meteórico en el orden de los Grandes Premios. El equipo generó una gran expectación desde el principio con el sensacional regreso de Michael Schumacher.'},
    {id: 17, tipo: 'piloto', imagen: 'assets/img/MercedesLewisHamilton.png', nombre: 'Lewis Hamilton', descripcion: 'Desde que aniquiló las expectativas con una de las mejores actuaciones de novato en la historia de la F1 en 2007, eso es literalmente todo lo que ha hecho: ascender a lo más alto de la lista de poles de todos los tiempos por delante de su héroe Ayrton Senna.'},
    {id: 18, tipo: 'piloto', imagen: 'assets/img/MercedesGeorgeRussell.png', nombre: 'George Russell', descripcion: 'Esa brillante velocidad de base le sirvió a Russell mientras sumaba títulos en su camino hacia la Fórmula 1. El británico irrumpió en el campeonato de GP3 de 2017 y entregó la corona de Fórmula 2 de 2018 bajo una inmensa presión.'},
    {id: 19, tipo: 'coche', imagen: 'assets/img/RacingBullsVCARB01.jpg', nombre: 'Racing Bulls VCARB01', descripcion: 'Establecido en 2006 como un equipo en el que los jóvenes pilotos del prodigioso grupo de talentos de Red Bull podían iniciarse en la F1, RB (originalmente llamado Toro Rosso y luego AlphaTauri) se formó a partir de las cenizas del valiente equipo Minardi.'},
    {id: 20, tipo: 'piloto', imagen: 'assets/img/RacingBullsDanielRicciardo.png', nombre: 'Daniel Ricciardo', descripcion: 'El australiano combina una velocidad máxima con una habilidad de carrera impresionante. Ricciardo, que nunca tiene miedo de llegar al límite si eso significa lograr un adelantamiento, es un corredor ganador.'},
    {id: 21, tipo: 'piloto', imagen: 'assets/img/RacingBullsYukiTsunoda.png', nombre: 'Yuki Tsunoda', descripcion: 'El ascenso de Tsunoda a lo más alto del automovilismo fue sorprendentemente rápido: pasó de competir en la F4 japonesa a un asiento en la Fórmula 1 con AlphaTauri, ahora RB, en poco más de tres años.'},
    {id: 22, tipo: 'coche', imagen: 'assets/img/RedBullRB20.jpg', nombre: 'Red Bull RB20', descripcion: 'Red Bull no era ajeno a la F1, como patrocinador, antes de ingresar formalmente como equipo oficial en 2004. Sin embargo, la escala de su éxito durante la década siguiente fue asombrosa.'},
    {id: 23, tipo: 'piloto', imagen: 'assets/img/RedBullMaxVerstappen.png', nombre: 'Max Verstappen', descripcion: 'Verstappen, que llegó como el competidor más joven de la historia de la Fórmula 1 con sólo 17 años, llevó su coche, sus rivales y los libros de récords del deporte al límite. El holandés con cara de niño y corazón de león tomó al Toro por los cuernos.'},
    {id: 24, tipo: 'piloto', imagen: 'assets/img/RedBullSergioPerez.png', nombre: 'Sergio Perez', descripcion: 'Pérez es un operador suave, un maestro en el manejo de neumáticos para obtener un rendimiento extra y darle ventaja en la estrategia. Firme favorito en la parrilla tras su paso por Sauber, McLaren, Force India y Racing Point.'},
    {id: 25, tipo: 'coche', imagen: 'assets/img/SauberC44.jpg', nombre: 'Sauber C44', descripcion: 'En las últimas temporadas corrieron bajo el nombre de Alfa Romeo, y en 2026 se convertirán en el equipo oficial de Audi, pero para 2024 un nuevo patrocinador principal aporta una nueva identidad al famoso equipo suizo.'},
    {id: 26, tipo: 'piloto', imagen: 'assets/img/SauberValtteriBottas.png', nombre: 'Valtteri Bottas', descripcion: 'Debutó en la F1 con Williams en 2013. Bottas pronto pasó a formar parte de la familia. Siguieron puntos y podios, y el confiable corredor incluso acumuló la mayor cantidad de puntos sin ganar, un récord que le molestaba pero que demostraba su habilidad.'},
    {id: 27, tipo: 'piloto', imagen: 'assets/img/SauberZhouGuanyu.png', nombre: 'Zhou Guanyu', descripcion: 'Habiendo cogido el gusanillo de las carreras, el piloto chino se propuso el ambicioso objetivo de convertirse en el primer piloto de F1 de su país, logrando una hazaña que Ma Qinghua nunca logró.'},
    {id: 28, tipo: 'coche', imagen: 'assets/img/WilliamsFW46.jpg', nombre: 'Williams FW46', descripcion: 'Impulsado por la brillantez y la pasión del fallecido Sir Frank Williams, Williams creció desde sus humildes comienzos hasta convertirse en un gigante de la Fórmula 1, sin rival, excepto Ferrari y McLaren, en términos de éxito duradero.'},
    {id: 29, tipo: 'piloto', imagen: 'assets/img/WilliamsAlexanderAlbon.png', nombre: 'Alexander Albon', descripcion: 'Nacido en Londres pero compitiendo bajo la bandera de Tailandia, la primera palabra de Alexander Albon fue de hecho italiano. Esa palabra era Ferrari, aunque fue con otro equipo italiano donde consiguió su gran oportunidad en la F1.'},
    {id: 30, tipo: 'piloto', imagen: 'assets/img/WilliamsLoganSargeant.png', nombre: 'Logan Sargeant', descripcion: 'Logan Sargeant se convirtió en el primer piloto estadounidense de F1 en casi ocho años cuando entró en la parrilla para la temporada 2023, dándole al país un favorito local al que animar una vez más.'}
  ];
  items: Item[] = this.allItems;

  constructor(private modalController: ModalController) { }

  showCars() {
    this.items = this.allItems.filter(item => item.tipo === 'coche');
  }

  showDrivers() {
    this.items = this.allItems.filter(item => item.tipo === 'piloto');
  }

  async viewItem(item: Item) {
    const modal = await this.modalController.create({
      component: ViewItemComponent,
      componentProps: { item }
    });
    return await modal.present();
  }

  async editItem(item: Item) {
    const modal = await this.modalController.create({
      component: EditItemComponent,
      componentProps: { item }
    });
    return await modal.present();
  }

}
