export class Tweet {
  constructor(userId, text) {
    this.userId = userId;
    this.text = text;
    this.createdAt = new Date();
  }
}
