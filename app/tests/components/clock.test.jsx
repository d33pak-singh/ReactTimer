var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('Jquery');
var TestUtils = require('react-addons-test-utils');

var  Clock = require('Clock');

describe('Clock', () => {
	it('Should exits', () => {
		expect(Clock).toExist();
	})
});