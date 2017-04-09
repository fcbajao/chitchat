require 'rails_helper'

RSpec.describe "Routes", type: :routing do
  it { expect(get("/")).to route_to("home#index") }
  it { expect(post("/api/users/authenticate")).to route_to("api/users#authenticate") }

  it "routes all other routes to home#index" do
    expect(get("/some/other/path")).to route_to(controller: "home", action: "index", path: "some/other/path")
  end
end
