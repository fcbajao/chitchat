class Api::UsersController < Api::ApplicationController
  def authenticate
    command = AuthenticateUser.call(params.require(:username), params.require(:password))
    if command.success?
      render json: { token: command.result }, status: :ok
    else
      render json: { errors: command.errors }, status: :unauthorized
    end
  end
end
