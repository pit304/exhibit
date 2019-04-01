import { Injectable } from '@angular/core';
import { TextEntry } from './text-entry.model';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private _texts: TextEntry[] = [
    {
      id: '1',
      title: 'An atelier',
      locationYear: 'Hasselt, 2012',
      text: 'In the east of Italy, from where I come, landscapes are plain and drowned in mist. \
      There is a kind of loneliness in the way buildings stand in space, as for the trees. \
      In the valley of Po river roads can flow straight for thirty or forty miles crossing plain chessboards of valleys and canals; everything is rarefied and so smooth that the eye can feel a sort of nostalgia for a little point raised up to look around. Nevertheless this vagueness offers the conditions to sharpen the perception of almost all the intangible elements that make this space, apparently undefined. \
      In “Lezioni americane” Italo Calvino wrote, reflecting on Leopardi’s work, “The poet of the vague can only be the poet of precision”.'
    },
    {
      id: '2',
      title: 'Notes on cities and places',
      locationYear: 'Denmark, 2014',
      text: 'Denmark landscape was formed by ice. \
      The line, on which laid the glacial deposits of the continent, bisects the Jutland peninsula and nowadays it still acts as threshold between the different landscapes of the country. To the west it is a plain of sand, clay and sand dunes along the coast; to the east, where the altitude is slightly higher, it is an undulated landscape of fertile plains, hills and woods, with an indented coastline, engraved by fjords that penetrate deep into: a peninsula, more than 500 mostly uninhabited islands, 7.314 km of coastline and a surface area of 43.000 square kilometres. \
      Inhabited by sedentary since 500 BC, a thousand years after Denmark still appeared as a flat landscape dotted with huts, with essential and pragmatically utilitarian character, and fortifications with solid and precise geometries. From 500 seas and rivers were the real scene, where the Vikings dominated by technical mastery and ruthlessness: it is the time of great migrations toward England, France, Iceland and the Mediterranean, until Baghdad.'
    },
    {
      id: '3',
      title: 'Notes on cities and places',
      locationYear: 'Paris, 2014',
      text: 'The Roman city, Lutetia Parisiorum, was founded on the heights of the left bank of the Seine: an isolated chessboard with a 300 Roman foot was organized on a north-south axis and surrounded by swamps. \
      Charles the Great preferred it to Aachen, and though the frantic kingdoms were meriting and cruising courts, the city was enlarged, occupying the right bank of the Seine slowly. It is under the reign of Philip II Augustus that a true kingdom capital is born. Philip, a crofter and captain of the armed forces against John Lackland; a political strategist and Machiavellian administrator, extends his kingdom from the Ile de France to about two-thirds of the entire French territory, which is governed by urban infrastructure works, fortifications and new founding cities (bastides) and through administrative ordinances.'
    }
  ];

  get texts() {
    return [...this._texts];
  }

  getText(id: string) {
    return {...this._texts.find(
      text => text.id === id
    )};
  }
}
