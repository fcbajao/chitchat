require 'rails_helper'

RSpec.feature "Chats", type: :feature, js: true do
  scenario "Chatting with others" do
    in_browser(:one) do
      login("user1", "pass1")
      expect(page).to have_text("Welcome, user1!")
    end

    in_browser(:two) do
      login("user2", "pass2")
      expect(page).to have_text("Welcome, user2!")
    end

    in_browser(:one) do
      fill_in "message", with: "Hi there user2!"
      click_button "Send"
      expect(page).to have_text("Hi there user2!")
    end

    in_browser(:two) do
      expect(page).to have_text("Hi there user2!")
      fill_in "message", with: "Hello user1!"
      click_button "Send"
      expect(page).to have_text("Hello user1!")
    end

    in_browser(:one) do
      expect(page).to have_text("Hello user1!")
    end
  end
end
