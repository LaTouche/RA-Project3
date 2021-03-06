//
// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
//
// declare var $: any;
// import { NewEntryComponent } from '../new-entry/new-entry.component';
// import { Journal } from './journal';
// import { JournalService } from './journal.service';
//
// @Component({
//   // moduleId: module.id,
//   selector: 'app-journal',
//   templateUrl: './journal.component.html',
//   styleUrls: ['./journal.component.css']
// })
// export class JournalComponent implements OnInit {
//
//   selectedJournal: Journal;
//   journalEntries: Journal[] = [];
//   constructor(private journalService: JournalService, private router: Router) {
//     console.log('creating journal component');
//   }
//
//   ngOnInit(): void {
//     // console.log(this.journalEntries);
//     this.getJournals();
//
//
//   }
//
//   getJournals(): void {
//     console.log('getting journals');
//     const myPromiseOfJournals: Promise<Journal[]> = this.journalService.getJournals();
//
//     myPromiseOfJournals.then(
//       journals => {
//
//         this.journalEntries = <Journal[]>journals;
//         // console.log("***** in journal.component.ts callback *****");
//         // console.log(this.journalEntries);
//         // console.log(journals)
//         /*
//         console.log(this.journalEntries);
//         console.log("***** in journal.component.ts callback *****");
//         */
//       }).then(run => { this.owlCarousel(); });
//   }
//   onSelect(journal: Journal): void {
//     this.selectedJournal = journal;
//     // console.log(this.selectedJournal);
//
//   }
//
//   gotoDetail(journal: Journal): void {
//     this.selectedJournal = journal;
//     // this.router.navigate(['/read', this.selectedJournal.ID]);
//   }
//
//
//   owlCarousel() {
//     $(document).ready(function() {
//       $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         responsiveClass: true,
//         responsive: {
//           0: {
//             items: 1,
//             nav: true
//           },
//           600: {
//             items: 2,
//             nav: false
//           },
//           1050: {
//             items: 3,
//             nav: true,
//             loop: false
//           }
//         }
//       });
//
//     });
//
//   }
//
// }


import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
import { NewEntryComponent } from '../new-entry/new-entry.component';
import { Journal } from './journal';
import { JournalService } from './journal.service';

@Component({
  moduleId: module.id,
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

   selectedJournal: Journal;
  journalEntries: Journal[] = [];
  constructor(private journalService: JournalService, private router: Router) {
    console.log('creating journal component');
  }

  ngOnInit(): void {
    console.log(this.journalEntries);
    this.getJournals();


  }

  getJournals(): void {
    console.log('getting journals');
    const myPromiseOfJournals: Promise<Journal[]> = this.journalService.getJournals();

    myPromiseOfJournals.then(
      journals => {

        this.journalEntries = <Journal[]>journals;
        console.log("***** in journal.component.ts callback *****");
        console.log(this.journalEntries);
        console.log(journals);

        console.log(this.journalEntries);
        console.log("***** in journal.component.ts callback *****");

      }).then(run => { this.owlCarousel(); });
  }
  onSelect(journal: Journal): void {
    this.selectedJournal = journal;
    console.log(this.selectedJournal);
    console.log('hi');

  }

  gotoDetail(journal: Journal): void {
    console.log('hi');
    this.selectedJournal = journal;
    console.log(journal);
    // this.router.navigate(['/read', this.selectedJournal.ID]);
  }


  owlCarousel() {
    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: false
          },
          1050: {
            items: 3,
            nav: true,
            loop: false
          }
        }
      });

    });

  }

}
