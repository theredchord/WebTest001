var MasterViewModel = function () {
    var self, testVal;

    self = this;
    testVal = 0;
    self.theArray = ko.observableArray([
        { value: "hello" },
        { value: "hello2" },
        { value: "hello3" },
        { value: "hello4" }
    ]);
    self.function1 = function () {
        $.each(self.theArray(), function (index, value) {
            alert(value.value);
        }
        );
    }
    self.function2 = function () {
        self.theArray().push({
            value: "test" + testVal
        });
        alert("Added: " + testVal);
        testVal += 1;
    }
}

ko.applyBindings(new MasterViewModel());