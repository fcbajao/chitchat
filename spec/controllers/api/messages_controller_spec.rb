require 'rails_helper'

RSpec.describe Api::MessagesController, type: :controller do
  describe "GET index" do
    before do
      token = "some-token"
      request.headers["Authorization"] = token
      expect(AuthorizeToken).to receive(:call).with(token).and_return(command)
    end

    context "when user is authorized" do
      let(:command) { double("command", :success? => true, result: double("user")) }

      before do
        expect(FetchRecentMessages).to receive(:call).with(limit: 10).and_return(double(result: []))
        get :index, params: { limit: 10 }, format: :json
      end

      it { expect(response).to have_http_status(:success) }
    end

    context "when user is unauthorized" do
      let(:command) { double("command", :success? => false, errors: { token: "Some error" }, result: nil) }

      before do
        expect(FetchRecentMessages).not_to receive(:call)
        get :index
      end

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
