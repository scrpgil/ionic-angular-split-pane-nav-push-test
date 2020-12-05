import { Component, OnInit, ElementRef } from "@angular/core";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  public listNumber: number = 1;
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Inbox",
      url: "/folder/Inbox",
      icon: "mail",
    },
    {
      title: "Outbox",
      url: "/folder/Outbox",
      icon: "paper-plane",
    },
    {
      title: "Favorites",
      url: "/folder/Favorites",
      icon: "heart",
    },
    {
      title: "Archived",
      url: "/folder/Archived",
      icon: "archive",
    },
    {
      title: "Trash",
      url: "/folder/Trash",
      icon: "trash",
    },
    {
      title: "Spam",
      url: "/folder/Spam",
      icon: "warning",
    },
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(public navParams: NavParams, public el: ElementRef) {}

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
    console.log(this.navParams.get("listNumber"));
    if (this.navParams.get("listNumber")) {
      this.listNumber = this.navParams.get("listNumber") + 1;
    }
  }

  nextPage() {
    (this.el.nativeElement.closest("ion-nav") as any).push(ListPage, {
      listNumber: this.listNumber,
    });
  }
}
