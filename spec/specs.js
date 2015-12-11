describe('ping_pong', function() {
  it("returns 'pingpong' if divisible by 15", function() {
    expect(ping_pong(15)).to.equal("pingpong");
  });
  
  it("returns 'pong' if divisible by 5", function() {
    expect(ping_pong(5)).to.equal("pong");
  });
  
  it("returns 'ping' if divisible by 3", function() {
    expect(ping_pong(3)).to.equal("ping");
  });
  
  it("returns the given number if not divisible by 3, 5, or 15", function() {
    expect(ping_pong(1)).to.equal(1);
  });
});