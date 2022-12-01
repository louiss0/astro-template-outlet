import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

describe('Example Tests', () => {
	// Simple test to get us started with the syntax
	// This show us how to write a test for our component's output using astro-component-tester

	let component;

	beforeEach(async () => {
		component = await getComponentOutput('./src/Component.astro');
	});

	it('should be a string', () => {
		expect(component.raw).to.be.a('string');
	});
});
