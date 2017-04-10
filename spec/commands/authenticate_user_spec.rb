require 'rails_helper'

RSpec.describe AuthenticateUser do
  describe "#call" do
    let!(:user) { User.create(username: "user1", password: "pass1234") }
    let!(:command) { described_class.call(username, password) }

    context "when username exists" do
      let(:username) { "user1" }

      context "and password is correct" do
        let(:password) { "pass1234" }

        it "sets result to token with user data" do
          token = command.result
          data = JsonWebToken.decode(token)
          expect(data).to include(id: user.id, username: user.username)
        end
      end

      context "and password is incorrect" do
        let(:password) { "wrongpassword" }

        it "sets the error" do
          expect(command.errors[:authenticate]).to be_present
        end
      end
    end

    context "when username does not exist" do
      let(:username) { "user2" }
      let(:password) { "newpass" }
      let(:newuser) { User.find_by_username(username) }

      it "creates new user" do
        expect(newuser).to be_present
        expect(newuser.authenticate(password)).to eq(newuser)
      end

      it "sets result to token with user data" do
        token = command.result
        data = JsonWebToken.decode(token)
        expect(data).to include(id: newuser.id, username: newuser.username)
      end
    end
  end
end
