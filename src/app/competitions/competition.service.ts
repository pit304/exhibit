import { Injectable } from '@angular/core';
import { CompetitionEntry } from './competition-entry.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private _competitions: CompetitionEntry[] = [
    {
      id: '1',
      text: 'Architecture Competition, 2019, 3rd Prize, Design of British \
      Council book stand for Bookfest in Bucharest'
    },
    {
      id: '2',
      text: 'Regional Architecture Festival A6, 2018, Nomination for \
      park in Cristian and Concept for a Multifamily Building and \
      for a Fire Station Building'
    },
    {
      id: '3',
      text: 'Regional Architecture Festival A6, 2016, 1st Prize in the \
      housing section for project “House E” and Nomination in the \
      housing section for project “House S”'
    },
    {
      id: '4',
      text: 'Regional Architecture Festival A6, 2016, 1st Prize in the \
      office building section for project “Offices for Star East Pet” \
      - Mies van der Rohe Nomination for project “House E”'
    },
    {
      id: '5',
      text: 'Regional Architecture Festival A5, 2012, Nomination in the \
      Restoration section for project “Loft in Brașov”'
    },
    {
      id: '6',
      text: 'International Architecture Competition 2011, 1st Prize and \
      assignation of the work. Redesign / Restoration of \
      “Johannes Honterus” courtyard (the Black Church Courtyard), \
      Brașov, together with ADNBA architecture office'
    },
    {
      id: '7',
      text: 'International Architecture Competition 2011, Mention. \
      Design of Piața Universității, Bucharest (public space above \
      the underground parking), Technical Project - together with \
      ADNBA architecture office'
    },
    {
      id: '8',
      text: 'Regional Architecture Annual Bv-Cv-Hr, 2011, 1st Prize in \
      the “Projects. Studies. Competitions” section for project \
      VELUX Prototype Project, Brașov'
    },
    {
      id: '9',
      text: 'Regional Architecture Annual Bv-Cv-Hr, 2011, 1st Prize in \
      the “Interior design” section for project HUMANITAS Bookstore, Iași'
    },
    {
      id: '10',
      text: 'Architecture Competition, 2011, 1st Prize and assignation \
      of project Design of public space “Ciprian Porumbescu Statue” \
      in Gh. park, Brașov'
    },
    {
      id: '11',
      text: 'Architecture Competition, 2011, 1st Prize and assignation \
      of project Business Centre, Brașov, Romania, together with \
      the SYAA office'
    },
    {
      id: '12',
      text: 'International Architecture Competition 2010, 2nd Prize ex-aequo, \
      Book depository of “Lucian Blaga” Central University Library, Cluj-Napoca, \
      together with EASTERNWORKS and BOZIN&SZEKELY ARCHITECTS'
    },
    {
      id: '13',
      text: 'National Architecture Biannual BAB 2010, Restoration section, \
      1st Prize.For the project „Office of Brașov A.C. Evangelical Church”'
    },
    {
      id: '14',
      text: 'Regional Architecture Annual Bv-Cv-Hr 2009, 1st Prize. For projects: \
      “Office of Brașov A.C. Evangelical Church” (prize of Restoration section) \
      “Humanitas Bookstore Sibiu” (prize of Interior Design section) \
      “House P” (prize of Architecture <1000sqm section)'
    },
    {
      id: '15',
      text: 'Regional Architecture Annual Bv-Cv-Hr 2008, 1st Prize. For project: \
      Cubix Hotel, Brașov'
    },
    {
      id: '16',
      text: 'Regional Architecture Annual Bv-Cv-Hr 2007, 1st Prize. For projects: \
      “House in Galați” (prize of Architecture <1000sqm section)'
    },
    {
      id: '17',
      text: '“Humanitas Bookstore Timișoara” (prize of Interior Design section)'
    }
  ];

  get competitions() {
    return [...this._competitions];
  }

  getCompetition(id: string) {
    return {...this._competitions.find(
      competition => competition.id === id
    )};
  }
}
