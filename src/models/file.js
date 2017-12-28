class File {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.tags = {};
  }

  getTag(tagName) {
    return this.tags[tagName] ? this.tags[tagName] : null;
  }
};

export default File;
