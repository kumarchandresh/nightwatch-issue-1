module.exports = class InputText {
	async command(cssSelector, text) {
		await this.api.sendKeys(cssSelector, text);
		return Promise.resolve();
	}
}