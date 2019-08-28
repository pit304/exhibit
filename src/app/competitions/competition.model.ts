export class Competition {
  constructor(
    public id: number,
    public title: string,
    public year: number,
    public competition_text: string
  ) {}

  static backup : Competition[] = [
    {
      id: 1,
      title: 'Architecture Competition',
      year: 2019,
      competition_text: '3rd Prize, Design of British \
      Council book stand for Bookfest in Bucharest'
    },
    {
      id: 2,
      title: 'Architecture Competition',
      year: 2019,
      competition_text: 'Regional Architecture Festival A6, 2018, Nomination for \
      park in Cristian and Concept for a Multifamily Building and \
      for a Fire Station Building'
    },
    {
      id: 3,
      title: 'Regional Architecture Festival A6',
      year: 2016,
      competition_text: '1st Prize in the \
      housing section for project “House E” and Nomination in the \
      housing section for project “House S”'
    },
    {
      id: 4,
      title: 'Regional Architecture Festival A6',
      year: 2016,
      competition_text: '1st Prize in the \
      office building section for project “Offices for Star East Pet” \
      - Mies van der Rohe Nomination for project “House E”'
    },
    {
      id: 5,
      title: 'Regional Architecture Festival A5',
      year: 2012,
      competition_text: 'Nomination in the \
      Restoration section for project “Loft in Brașov”'
    },
    {
      id: 6,
      title: 'International Architecture Competition',
      year: 2011,
      competition_text: '1st Prize and \
      assignation of the work. Redesign / Restoration of \
      “Johannes Honterus” courtyard (the Black Church Courtyard), \
      Brașov, together with ADNBA architecture office'
    },
    {
      id: 7,
      title: 'International Architecture Competition',
      year: 2011,
      competition_text: 'Mention. \
      Design of Piața Universității, Bucharest (public space above \
      the underground parking), Technical Project - together with \
      ADNBA architecture office'
    },
    {
      id: 8,
      title: 'Regional Architecture Annual Bv-Cv-Hr',
      year: 2011,
      competition_text: '1st Prize in \
      the “Projects. Studies. Competitions” section for project \
      VELUX Prototype Project, Brașov'
    },
    {
      id: 9,
      title: 'Regional Architecture Annual Bv-Cv-Hr',
      year: 2011,
      competition_text: '1st Prize in \
      the “Interior design” section for project HUMANITAS Bookstore, Iași'
    },
    {
      id: 10,
      title: 'Architecture Competition',
      year: 2011,
      competition_text: '1st Prize and assignation \
      of project Design of public space “Ciprian Porumbescu Statue” \
      in Gh. park, Brașov'
    },
    {
      id: 11,
      title: 'Architecture Competition',
      year: 2011,
      competition_text: '1st Prize and assignation \
      of project Business Centre, Brașov, Romania, together with \
      the SYAA office'
    },
    {
      id: 12,
      title: 'International Architecture Competition',
      year: 2010,
      competition_text: '2nd Prize ex-aequo, \
      Book depository of “Lucian Blaga” Central University Library, Cluj-Napoca, \
      together with EASTERNWORKS and BOZIN&SZEKELY ARCHITECTS'
    },
    {
      id: 13,
      title: 'National Architecture Biannual BAB',
      year: 2010,
      competition_text: 'Restoration section, \
      1st Prize.For the project „Office of Brașov A.C. Evangelical Church”'
    },
    {
      id: 14,
      title: 'Regional Architecture Annual Bv-Cv-Hr',
      year: 2009,
      competition_text: '1st Prize. For projects: \
      “Office of Brașov A.C. Evangelical Church” (prize of Restoration section) \
      “Humanitas Bookstore Sibiu” (prize of Interior Design section) \
      “House P” (prize of Architecture <1000sqm section)'
    },
    {
      id: 15,
      title: 'Regional Architecture Annual Bv-Cv-Hr',
      year: 2008,
      competition_text: '1st Prize. For project: \
      Cubix Hotel, Brașov'
    },
    {
      id: 16,
      title: 'Regional Architecture Annual Bv-Cv-Hr',
      year: 2007,
      competition_text: ' 1st Prize. For projects: \
      “House in Galați” (prize of Architecture <1000sqm section)'
    },
    {
      id: 17,
      title: '“Humanitas Bookstore Timișoara”',
      year: 0,
      competition_text: 'prize of Interior Design section'
    }
  ];
}
