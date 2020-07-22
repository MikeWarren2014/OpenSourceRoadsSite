export class MenuOption {
  routerLink: string;

  constructor(link: string) {
    this.routerLink = link;
  }

  get text() {
    return this.routerLink
      .substring(1)
      .split("-")
      .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
      .join(" ");
  }
}
