const assert = require('chai').assert;

describe('status dashboard', async function() {
  it('add status', async function() {
    await this.browser.url('http://localhost:3000/');

    const statusInput = await this.browser.$('.StatusesDashboard-StatusInput');

    await statusInput.setValue('test status');

    const addButton = await this.browser.$('.StatusesDashboard-AddButton');

    await addButton.click();

    const StatusesDashboard = await this.browser.$('.StatusesDashboard');

    const classes = await StatusesDashboard.getAttribute('class');

    assert.isOk(classes.split(' ').includes('StatusesDashboard_length_2'));

    const lastStatus = await this.browser.$('.StatusesDashboard > .Status:nth-last-child(2)');

    const text = await lastStatus.getText();

    assert.equal(text, '😎test status', 'последний статус в списке не test status');

    await this.browser.assertView('after', '.StatusesDashboard', { ignoreElements: '.StatusesDashboard-Form' });
    console.log(classes);
  });
});
