const commands = {
	clickAway: function (callback) {
		this.api.click(".main-header__logo");
		if (typeof callback == "function") callback.call(this);
		return this;
	}
}

module.exports = {
	elements: {
		searchBar: "[data-test-id='search-form-input']",
	},
	commands: [commands]
};