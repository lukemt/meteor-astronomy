Package.describe({
  summary: 'Model layer for Meteor',
  version: '0.10.5',
  name: 'jagi:astronomy',
  git: 'https://github.com/jagi/meteor-astronomy.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('mongo');
  api.use('minimongo');
  api.use('underscore');
  api.use('ejson');

  api.addFiles('lib/core/global.js', ['client', 'server']);
  api.addFiles('lib/core/utils.js', ['client', 'server']);
  api.addFiles('lib/core/events.js', ['client', 'server']);
  api.addFiles('lib/core/event.js', ['client', 'server']);
  api.addFiles('lib/core/base_class.js', ['client', 'server']);
  api.addFiles('lib/core/schema.js', ['client', 'server']);
  api.addFiles('lib/core/module.js', ['client', 'server']);
  api.addFiles('lib/core/constructor.js', ['client', 'server']);
  api.addFiles('lib/core/class.js', ['client', 'server']);

  // Events module.
  api.addFiles('lib/modules/events/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/events/init_class.js', ['client', 'server']);
  api.addFiles('lib/modules/events/module.js', ['client', 'server']);

  // Types module.
  api.addFiles('lib/modules/types/global.js', ['client', 'server']);
  api.addFiles('lib/modules/types/utils.js', ['client', 'server']);
  api.addFiles('lib/modules/types/type.js', ['client', 'server']);
  api.addFiles('lib/modules/types/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/types/module.js', ['client', 'server']);

  // Fields module.
  api.addFiles('lib/modules/fields/utils.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_class.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/module.js', ['client', 'server']);

  // Methods module.
  api.addFiles('lib/modules/methods/init_class.js', ['client', 'server']);
  api.addFiles('lib/modules/methods/module.js', ['client', 'server']);

  // EJSON module.
  api.addFiles('lib/modules/ejson/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/ejson/module.js', ['client', 'server']);

  api.export(['Astro', 'Astronomy'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jagi:astronomy@0.10.5');

  api.addFiles('test/ejson.js', ['client', 'server']);
  api.addFiles('test/events.js', ['client', 'server']);
  api.addFiles('test/fields.js', ['client', 'server']);
  api.addFiles('test/methods.js', ['client', 'server']);
  api.addFiles('test/types.js', ['client', 'server']);
});
