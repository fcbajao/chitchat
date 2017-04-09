require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  describe "GET index" do
    before do
      get :index
    end

    it { expect(response).to have_http_status(:success) }
  end
end
