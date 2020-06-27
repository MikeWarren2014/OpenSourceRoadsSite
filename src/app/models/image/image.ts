export class Image {
  private id : number = -1;

  image : string = '';

  descStr : string = '';

  constructor(id = -1, image = '', descStr= '') {
    this.id = id;
    this.image = image;
    this.descStr = descStr;
  }
}
