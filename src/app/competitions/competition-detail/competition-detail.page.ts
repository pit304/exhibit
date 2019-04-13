import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../competition.service';
import { CompetitionEntry } from '../competition-entry.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.page.html',
  styleUrls: ['./competition-detail.page.scss'],
})
export class CompetitionDetailPage implements OnInit {
  competition: CompetitionEntry;

  constructor(private route: ActivatedRoute,
    private competitionService: CompetitionService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('competitionId')) {
        this.navCtrl.navigateBack('/competitii');
        return;
      }
      this.competition = this.competitionService.getCompetition(paramMap.get('competitionId'));
    });
  }
}
