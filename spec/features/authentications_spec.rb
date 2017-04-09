require 'rails_helper'

RSpec.feature "Authentications", type: :feature, js: true do
  scenario "Logging in as a new user" do
    visit "/"

    fill_in "username", with: "newuser"
    fill_in "password", with: "newpassword"
    click_button "Join"

    expect(page).to have_text("Welcome, newuser!")
  end
end
