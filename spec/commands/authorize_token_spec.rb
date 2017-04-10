require 'rails_helper'

RSpec.describe AuthorizeToken do
  describe "#call" do
    let!(:user) { User.create(username: "user1", password: "pass1") }
    let!(:valid_token) { AuthenticateUser.call("user1", "pass1").result }
    let(:command) { described_class.call(token) }

    context "when token is valid" do
      let(:token) { valid_token }

      it "sets the result to the matching user" do
        expect(command.result).to eq(user)
      end
    end

    context "when token is invalid" do
      let(:token) { "some-invalid-token" }

      it "sets the result to nil" do
        expect(command.result).to be_nil
      end

      it "sets the error" do
        expect(command.errors[:token]).to be_present
      end
    end
  end
end
