var assert = require("assert");
var natursystem = require("../src/NA-metoder");

describe("Natursystem", function() {
  it("hovedtype", function() {
    assert.equal(natursystem.slåOppHovedtype("NN-NA-T44-E-1"), "NN-NA-T44");
  });
  it("T44-E-1 er ikke grunntype", function() {
    assert.equal(natursystem.erGrunntype("NA-T44-E-1"), false);
  });
  it("T44-1 er grunntype", function() {
    assert.equal(natursystem.erGrunntype("NA-T44-1"), true);
  });
  it("T44-1 erHøyereKartleggingsnivå: nei", function() {
    assert.equal(natursystem.erHøyereKartleggingsnivå("NA-T44-1"), false);
  });
  it("T44-A-1 erHøyereKartleggingsnivå: nei", function() {
    assert.equal(natursystem.erHøyereKartleggingsnivå("NA-T44-A-1"), false);
  });
  it("T44-B-1 erHøyereKartleggingsnivå: ja", function() {
    assert.equal(natursystem.erHøyereKartleggingsnivå("NA-T44-B-1"), true);
  });
});
