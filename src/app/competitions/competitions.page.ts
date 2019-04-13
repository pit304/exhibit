import { Component, OnInit } from '@angular/core';
import { CompetitionEntry } from './competition-entry.model';
import { CompetitionService } from './competition.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage implements OnInit {
  loadedCompetitions: CompetitionEntry[];

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.loadedCompetitions = this.competitionService.competitions;
  }
}
