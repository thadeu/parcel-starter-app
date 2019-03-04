import { expect } from 'chai'
import Event from '../src/event'

describe('Event', () => {
  it('check sender attributes', () => {
    const event = new Event('test')
    expect(event.sender).to.equal('test');
  });
  
  it('check listeners attributes', () => {
    const event = new Event('test')
    expect(event.listeners.length).to.equal(0);
  });

  it('.attach', () => {
    const event = new Event('attach')

    event.attach((sender, data) => {})
    event.attach((sender, data) => {})
    event.attach((sender, data) => {})

    event.notify({ render: [] })

    expect(event.listeners.length).to.equal(3)
  })
});