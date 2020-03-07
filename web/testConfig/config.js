import React from 'react';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import mochaSnapshots from 'mocha-snapshots';
import { expect, assert, should } from 'chai';
import { mount, render, shallow, configure } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import 'styled-components-test-utils/lib/chai';

configure({ adapter: new Adapter() });

global.mochaSnapshots = mochaSnapshots;
mochaSnapshots.setup({ sanitizeClassNames: false });

global.expect = expect;
global.assert = assert;
global.should = should();
global.sinon = sinon;
global.React = React;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.renderer = renderer;
global.enzymeFind = enzymeFind;

// global.shallowRender = StyledComponent => renderer.create(StyledComponent).toJSON();

