var MasterViewModel = function () {
    var self;
    self = this;

    self.displayMessage = ko.observable(false);
}

ko.applyBindings(new MasterViewModel());