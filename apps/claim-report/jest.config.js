module.exports = {
  name: 'claim-report',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/claim-report',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
