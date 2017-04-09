require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe "POST authenticate" do
    before do
      expect(AuthenticateUser).to receive(:call).with("newuser", "newpassword").and_return(command)
      post :authenticate, params: { username: "newuser", password: "newpassword" }
    end

    context "when command is succcessful" do
      let(:command) { double("command", :success? => true, result: double("token")) }

      it { expect(response).to have_http_status(:success) }
    end

    context "when command is unsucccessful" do
      let(:command) { double("command", :success? => false, errors: { authentication: "Some error" }, result: nil) }

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
