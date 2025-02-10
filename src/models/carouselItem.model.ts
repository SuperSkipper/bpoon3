export default class CarouselItem {
  public title: string;
  public description: string;
  public image: string;
  public gitHubUrl?: string;

  constructor(title: string, description: string, image: string, gitHubUrl?: string) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.gitHubUrl = gitHubUrl;
  }
}
