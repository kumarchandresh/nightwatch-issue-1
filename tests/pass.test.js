// cSpell:ignore ecosia

module.exports = {
	'pass': () => {
		browser.navigateTo("https://www.ecosia.org/");
		const ecosia = browser.page.ecosia();
		ecosia.InputText("[data-test-id='search-form-input']", "Hello world")
			.clickAway();
		browser.saveScreenshot("pass.test.png");
	}
}