module.exports = {
  name: "lazy-loaded-nx",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/lazy-loaded-nx/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
