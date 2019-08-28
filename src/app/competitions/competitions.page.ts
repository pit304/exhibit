import { Component, OnInit, OnDestroy } from '@angular/core';
import { Competition } from './competition.model';
import { CompetitionsService } from './competitions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage implements OnInit, OnDestroy {
  
  loadedCompetitions: Competition[];
  private competitionsSub: Subscription;
  isLoading = false;

  constructor(private competitionsService: CompetitionsService) { }

  ngOnInit() {
    this.competitionsSub = this.competitionsService.competitions.subscribe(competitions => {
      this.loadedCompetitions = competitions;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.competitionsService.fetchCompetitions().subscribe(data => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.competitionsSub) {
      this.competitionsSub.unsubscribe();
    }
  }
}
