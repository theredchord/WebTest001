function AppViewModel() {
    var self = this;

    self.firstName = ko.observable("Dustin");
    self.lastName = ko.observable("Litorja");
    self.fullName = ko.computed(function () {
        return self.firstName() + " " + self.lastName();
    }, this);
}

ko.applyBindings(new AppViewModel);