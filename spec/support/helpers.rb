module Helpers
  def in_browser(name)
    old_session = Capybara.session_name

    Capybara.session_name = name
    yield

    Capybara.session_name = old_session
  end

  def login(username, password)
    visit "/login"
    fill_in "username", with: username
    fill_in "password", with: password
    click_button "Join"
  end
end
