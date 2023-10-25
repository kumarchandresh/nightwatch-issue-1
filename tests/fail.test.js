// cSpell:ignore ecosia

module.exports = {
	'fail': () => {
		browser.navigateTo("https://www.ecosia.org/");
		const ecosia = browser.page.ecosia();
		browser.perform(() => {
			ecosia.InputText("[data-test-id='search-form-input']", "Hello world")
				.clickAway();
		});
		browser.saveScreenshot("failed.test.png");
	}
}