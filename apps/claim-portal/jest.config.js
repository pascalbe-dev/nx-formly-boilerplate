module.exports = {
  name: 'claim-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/claim-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
