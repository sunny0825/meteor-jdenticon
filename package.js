Package.describe({
	name: 'ls3271:meteor-jdenticon',
	version: '0.0.2',
	// Brief, one-line summary of the package.
	summary: 'This is a Meteor library for generating identicons from a hash using canvas.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/sunny0825/meteor-jdenticon.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.add_files('jdenticon/jdenticon.js', 'client');
});
