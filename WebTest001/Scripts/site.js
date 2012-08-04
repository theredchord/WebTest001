var myViewModel = function (first, last) {
    var self = this;

    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);
    self.fullName = ko.computed({
        read: function () {
            return self.firstName() + " " + this.lastName();
        },
        write: function (value) {
            var lastSpacePos = value.lastIndexOf(" ");
            if (lastSpacePos > 0) {
                self.firstName(value.substring(0, lastSpacePos));
                self.lastName(value.substring(lastSpacePos + 1));
            }
        },
        owner: self
    });
}

ko.applyBindings(myViewModel("",""));